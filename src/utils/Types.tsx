import React from "react"

export type ItemData = {
  id: number
  name: string
}

export type MainComponentState = {
  count: number
  items: ItemData[]
}

export type ActionType =
  | { type: "addItem"; data: ItemData }
  | { type: "deleteItem"; data: ItemData }
