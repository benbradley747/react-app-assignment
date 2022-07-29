import React, { useContext } from "react"
import { Paper } from "@mui/material"
import ClearIcon from "@mui/icons-material/Clear"
import { ContextProps, useAppContext } from "./AppWrapper"
import { ItemData } from "../utils/Types"

export interface ItemProps {
  item: ItemData
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { dispatch }: ContextProps = useAppContext()

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
