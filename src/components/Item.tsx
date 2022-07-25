import React, { useContext } from "react"
import { Paper } from "@mui/material"
import { Context, ItemData } from "./Main"
import ClearIcon from "@mui/icons-material/Clear"

export interface ItemProps {
  item: ItemData
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { dispatch }: any = useContext(Context)

  return (
    <li>
      <div className="itemWrapper">
        <Paper elevation={4}>
          <div className="item-card">
            <div className="item">{item.name}</div>
            <button
              className="del-btn"
              onClick={() => dispatch({ type: "deleteItem", id: item.id })}>
              <ClearIcon />
            </button>
          </div>
        </Paper>
      </div>
    </li>
  )
}

export default Item
