import React, { useContext } from "react"
import { Paper, Typography } from "@mui/material"
import ClearIcon from "@mui/icons-material/Clear"
import { useAppContext } from "./AppWrapper"
import { ItemData, ContextProps } from "../state/Interfaces"

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
            <Typography className="name-tag" variant="body1">
              {item.name}
            </Typography>
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
