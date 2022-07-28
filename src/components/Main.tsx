import React, { createContext, Dispatch } from "react"
import { useReducer } from "react"
import Header from "./Header"
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
  dispatch: Dispatch<ActionType>
}

export type ComponentState = {
  count: number
  items: ItemData[]
}

const initialState: ComponentState = {
  count: 0,
  items: [] as ItemData[],
}

export type ActionType =
  | { type: "addItem"; data: ItemData }
  | { type: "deleteItem"; data: ItemData }
  | { type: "count" }

export const Context = createContext({} as ContextProps)

const reducer = (state: ComponentState, action: ActionType): ComponentState => {
  switch (action.type) {
    case "addItem":
      return {
        ...state,
        items: [...state.items, { id: state.count, name: action.data.name }],
        count: state.count + 1,
      }
    case "deleteItem":
      return {
        ...state,
        items: [
          ...state.items.filter((x: { id: number }) => x.id !== action.data.id),
        ],
      }
    default:
      throw new Error()
  }
}

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}>
      <div className="Container">
        <Header />
        <ItemForm />
        <ItemList />
      </div>
    </Context.Provider>
  )
}

export default Main
