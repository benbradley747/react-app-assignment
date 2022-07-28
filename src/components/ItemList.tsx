import React, { ComponentState, useContext } from "react"
import { Context, ItemData } from "./Main"
import { Paper, Typography } from "@mui/material"
import Item from "./Item"

const ItemList = () => {
  const { state }: ComponentState = useContext(Context)
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
