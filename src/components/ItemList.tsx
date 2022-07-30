import React from "react"
import { Paper, Typography } from "@mui/material"
import Item from "./Item"
import { useAppContext } from "./AppWrapper"
import { ItemData, ContextProps } from "../state/Interfaces"

const ItemList = () => {
  const { state }: ContextProps = useAppContext()
  return (
    <Paper elevation={4}>
      <div className="item-list-wrapper">
        <Typography variant="h6">My items ({state.items.length})</Typography>
        <ul className="item-list">
          {state.items.map((item: ItemData, key: number) => (
            <Item item={item} key={key} />
          ))}
        </ul>
      </div>
    </Paper>
  )
}

export default ItemList
