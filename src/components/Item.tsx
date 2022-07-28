import React, { ComponentState, useContext } from "react"
import { Paper } from "@mui/material"
import { Context, ItemData } from "./Main"
import ClearIcon from "@mui/icons-material/Clear"

export interface ItemProps {
  item: ItemData
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { dispatch }: ComponentState = useContext(Context)

  return (
    <li>
      <div className="itemWrapper">
        <Paper elevation={4}>
          <div className="item-card">
            <div className="name-tag">{item.name}</div>
            <span
              className="del-btn"
              onClick={() =>
                dispatch({
                  type: "deleteItem",
                  data: { id: item.id, name: item.name },
                })
              }>
              <ClearIcon />
            </span>
          </div>
        </Paper>
      </div>
    </li>
  )
}

export default Item
