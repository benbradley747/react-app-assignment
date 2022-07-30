import React, { createContext, useContext, useReducer } from "react"
import { ContextProps } from "../state/Interfaces"
import { ItemData, State } from "../state/Interfaces"

export type ActionType =
  | { type: "addItem"; data: ItemData }
  | { type: "deleteItem"; data: ItemData }

const initialState: State = {
  count: 0,
  items: [] as ItemData[],
}

const AppContext = createContext({} as ContextProps)

const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider")
  }
  return context
}

export const reducer = (state: State, action: ActionType): State => {
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

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppWrapper, AppContext, useAppContext }
