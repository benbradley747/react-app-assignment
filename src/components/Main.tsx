import React, { createContext, Dispatch } from "react"
import { useReducer } from "react"
import ItemForm from "./ItemForm"
import ItemList from "./ItemList"

export type ItemData = {
  id: number
  name: string
}

export interface ContextProps {
  state: {
    count: number
    items: ItemData[]
  }
  dispatch: Dispatch<
    { type: "addItem", data: string } | { type: "deleteItem", data: number }
  >
}

export const Context = createContext({} as ContextProps)

function Main() {
  const initialState = {
    count: 0,
    items: [],
  }

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "addItem":
        return {
          ...state,
          items: [...state.items, { id: state.count, name: action.data }],
          count: state.count + 1,
        }
      case "deleteItem":
        return {
          ...state,
          items: [
            ...state.items.filter((x: { id: number }) => x.id !== action.id),
          ],
        }
      case "count":
        return state.count
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}>
      <div className="Container">
        <h1>Manage my items</h1>
        <ItemForm />
        <ItemList />
      </div>
    </Context.Provider>
  )
}

export default Main
