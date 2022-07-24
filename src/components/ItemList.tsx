import React from "react"
import { Context, ItemData } from "./Main"
import { Paper } from "@mui/material"
import Item from "./Item"

const ItemList = () => {
  const { state }: any = React.useContext(Context)

  return (
    <Paper elevation={4}>
      <div className="item-list-wrapper">
        <h3 className="item-list-title">My items ({state.items.length})</h3>
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
