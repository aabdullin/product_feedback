
import React, { Reducer } from 'react';
import {useEffect, useContext, useReducer, ReactNode} from 'react';
import {items, ItemType} from '../db'

interface ProductFeedbackContextProps {
    items: Array<ItemType>
    sortBy: (sortColumn: string) => void
    filter: (tag: string) => void    
    clear: () => void
}

export const ProductFeedbackContext = React.createContext<ProductFeedbackContextProps>({
    items: [],
    sortBy: () => {},
    filter: () => {},
    clear: () => {}
});

export const useProductFeedback = () => {
    const context = useContext(ProductFeedbackContext);
    if (context === undefined) {
      throw new Error("useTodos must be used within a UsersProvider");
    }
    return context;
};

export const ProductFeedbackProvider = ({children} : { children: ReactNode }) => {
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

    useEffect(() => {
        sortBy('upvotes')
    }, [])

  //   useEffect(() => {
  //     sortBy('upvotes')
  // }, [state])
    
    return (
        <ProductFeedbackContext.Provider
          value={{
            items: [ ...state.items ],
            sortBy,
            filter,
            clear
          }}
        >
          {children}
        </ProductFeedbackContext.Provider>
    );
}