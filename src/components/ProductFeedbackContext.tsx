
import React, { Reducer } from 'react';
import {useEffect, useContext, useReducer, useState, ReactNode} from 'react';
import {items, ItemType} from '../db'

interface ProductFeedbackContextProps {
    items: Array<ItemType>
    sortColumn: string,
    sortBy: (sortColumn: string) => void
    filter: (tag: string) => void    
    clear: () => void,
    upvote: () => void,
    downvote: () => void
}

export const ProductFeedbackContext = React.createContext<ProductFeedbackContextProps>({
    items: [],
    sortColumn: '',
    sortBy: () => {},
    filter: () => {},
    clear: () => {},
    upvote: () => {},
    downvote: () => {}
});

export const useProductFeedback = () => {
    const context = useContext(ProductFeedbackContext);
    if (context === undefined) {
      throw new Error("products must be used within a UsersProvider");
    }
    return context;
};

export const ProductFeedbackProvider = ({children} : { children: ReactNode }) => {
    const [sortColumn, setSortColumn] = useState<string>('');
    const [count, setCount] = useState(0);
    interface ReducerState {
        items: Array<ItemType>,
    }
    function reducer(state: ReducerState, action: any) {
        console.log(state);
        console.log(action);
        switch (action.type) {
          case "sortBy":
            const sortedItems = items.sort((a, b) => {
                if (action.sortColumn === 'comments') {
                    return Number(b.comments) - Number(a.comments)
                } else if (action.sortColumn === 'upvotes') {
                    return Number(b.upvotes) - Number(a.upvotes)
                } else {
                    return 0;
                }
            })
            setSortColumn(action.sortColumn);
            return {
                items: sortedItems,
            };
          case "filter":
            const filteredItems = items.filter((item) => {
                return item.tag === action.tag
            })
            return {
                items: filteredItems,
            };
          case "clear":
            return {
                items: items,
            };
          case "upvote":
            setCount(count => count + 1)
            return {
              items: count
            };
          case "downvote":
            setCount(count => count - 1)
            return {
              items: count
            };
          default:
            throw new Error();
        }
      }
    const [state, dispatch] = useReducer<Reducer<ReducerState, any>>(reducer, { items });
    
    const sortBy = (sortColumn: string) => {
        dispatch({
            type: 'sortBy',
            sortColumn
        })
    }

    const filter = (tag: string) => {
      dispatch({
          type: 'filter',
          tag
      })
    }

    const clear = () => {
      dispatch({
          type: 'clear',
      })
    }

    const upvote = () => {
      dispatch({
          type: 'upvote',
      })
    }

    const downvote = () => {
      dispatch({
          type: 'downvote',
      })
    }

    useEffect(() => {
        sortBy('upvotes')
    }, [])
    
    return (
        <ProductFeedbackContext.Provider
          value={{
            items: [ ...state.items ],
            sortColumn,
            sortBy,
            filter,
            clear,
            upvote,
            downvote
          }}
        >
          {children}
        </ProductFeedbackContext.Provider>
    );
}