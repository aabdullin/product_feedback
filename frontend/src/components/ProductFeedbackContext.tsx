import React, { Reducer } from "react";
import { useEffect, useContext, useReducer, useState, ReactNode } from "react";
import { ItemType } from "../db";
const axios = require("axios").default;

interface ProductFeedbackContextProps {
  items: Array<ItemType>;
  fetchItems: () => void;
  addItem: (name: string, description: string) => void;
  editItem: (id: number, name: string) => void;
  deleteItem: (id: number) => void;
  sortColumn: string;
  sortBy: (sortColumn: string) => void;
  filter: (tag: string) => void;
  clear: () => void;
  upvote: (id: number) => void;
  downvote: (id: number) => void;
  addComment: (id: number, comments: string) => void;
}

export const ProductFeedbackContext =
  React.createContext<ProductFeedbackContextProps>({
    items: [],
    fetchItems: () => {},
    addItem: () => {},
    editItem: () => {},
    deleteItem: () => {},
    sortColumn: "",
    sortBy: () => {},
    filter: () => {},
    clear: () => {},
    upvote: () => {},
    downvote: () => {},
    addComment: () => {},
  });

export const useProductFeedback = () => {
  const context = useContext(ProductFeedbackContext);
  if (context === undefined) {
    throw new Error("products must be used within a UsersProvider");
  }
  return context;
};

export const ProductFeedbackProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [sortColumn, setSortColumn] = useState<string>("");
  interface ReducerState {
    items: Array<ItemType>;
  }
  function reducer(state: ReducerState, action: any) {
    console.log(state);
    console.log(action);
    switch (action.type) {
      case "addItem":
        return {
          items: [
            ...state.items,
            {
              ...action.item,
              id: state.items.length + 1,
            },
          ],
        };
      case "fetchItems":
        return {
          items: action.feedback,
        };
      case "edit":
        return {
          items: state.items.map((u) => {
            if (u.id === action.item.id) {
              return action.item;
            }
            return u;
          }),
        };
      case "delete":
        return {
          items: state.items.filter((u) => u.id !== action.item.id),
        };
      case "sortBy":
        const sortedItems = state.items.sort((a, b) => {
          if (action.sortColumn === "comments") {
            return Number(b.comments) - Number(a.comments);
          } else if (action.sortColumn === "upvotes") {
            return Number(b.upvotes) - Number(a.upvotes);
          } else {
            return 0;
          }
        });
        setSortColumn(action.sortColumn);
        return {
          items: sortedItems,
        };
      case "filter":
        const filteredItems = state.items.filter((item) => {
          return item.tag === action.tag;
        });
        return {
          items: filteredItems,
        };
      case "clear":
        return {
          items: state.items,
        };
      case "upvote":
        return {
          items: state.items.map((u) => {
            return {
              ...u,
              upvotes: u.id === action.id ? Number(u.upvotes) + 1 : u.upvotes,
            };
          }),
        };
      case "downvote":
        return {
          items: state.items.map((u) => {
            return {
              ...u,
              upvotes: u.id === action.id ? Number(u.upvotes) - 1 : u.upvotes,
            };
          }),
        };
      case "addComment":
        return {
          items: state.items.map((u) => {
            if (u.id !== action.id) {
              return u;
            }

            return {
              ...u,
              comments: [
                ...u.comments,
                {
                  author: {
                    name: "Artur",
                    username: "omgwtfbbq",
                  },
                  comment: action.comments,
                },
              ],
            };
          }),
        };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer<Reducer<ReducerState, any>>(reducer, {
    items: [],
  });

  const sortBy = (sortColumn: string) => {
    dispatch({
      type: "sortBy",
      sortColumn,
    });
  };

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3001/api/feedbacks", {});
    console.log(response);
    // early exit when successful
    if (response.error) {
      console.log(response.error);
      // return;
    }

    const feedback = await response.data;

    // commit the change to context after successfully adding to server
    dispatch({
      type: "fetchItems",
      feedback,
    });
  };

  const addItem = async (name: string, description: string) => {
    const response = await axios.post("http://localhost:3001/api/feedbacks", {
      name,
      description,
    });
    console.log(response);
    // early exit when successful
    if (response.error) {
      console.log(response.error);
      // return;
    }

    const feedback = await response.data;

    // commit the change to context after successfully adding to server
    dispatch({
      type: "addItem",
      item: {
        _id: feedback._id,
        name,
        upvotes: "0",
        comments: "0",
        description,
        tag: "",
      },
    });
  };

  const editItem = () => {
    dispatch({
      type: "editItem",
    });
  };

  const deleteItem = () => {
    dispatch({
      type: "deleteItem",
    });
  };

  const filter = (tag: string) => {
    dispatch({
      type: "filter",
      tag,
    });
  };

  const clear = async () => {
    await fetchItems();
  };

  const upvote = (id: number) => {
    dispatch({
      type: "upvote",
      id,
    });
  };

  const downvote = (id: number) => {
    dispatch({
      type: "downvote",
      id,
    });
  };

  const addComment = (id: number, comments: string) => {
    dispatch({
      type: "addComment",
      id,
      comments,
    });
  };

  useEffect(() => {
    sortBy("upvotes");
  }, []);

  return (
    <ProductFeedbackContext.Provider
      value={{
        items: [...state.items],
        addItem,
        fetchItems,
        editItem,
        deleteItem,
        sortColumn,
        sortBy,
        filter,
        clear,
        upvote,
        downvote,
        addComment,
      }}
    >
      {children}
    </ProductFeedbackContext.Provider>
  );
};
