import React, { Dispatch } from "react"
import { ActionType } from "../components/AppWrapper"

interface State {
  count: number
  items: ItemData[]
}

interface ItemData {
  id: number
  name: string
}

interface ContextProps {
  state: State
  dispatch: Dispatch<ActionType>
}

export type { State, ItemData, ContextProps }
