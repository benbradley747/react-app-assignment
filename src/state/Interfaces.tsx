import { Dispatch } from 'react'
import { ActionType } from '../components/AppWrapper'

interface ItemData {
  id: number
  name: string
}

interface State {
  count: number
  items: ItemData[]
}

interface ContextProps {
  state: State
  dispatch: Dispatch<ActionType>
}

export type { State, ItemData, ContextProps }
