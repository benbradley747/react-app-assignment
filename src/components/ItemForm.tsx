import React, { useContext } from "react"
import { Paper } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { Context } from "./Main"

const ItemForm = () => {
  const { dispatch } = useContext(Context)
  const [newItem, setNewItem] = useState<string>("")

  const handleSubmit = () => {
    event?.preventDefault()
    
    if (newItem.length != 0) {
      console.log("new item: ", newItem)
      dispatch({ type: "addItem", data: newItem })
      setNewItem("")
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItem(event.target.value)
  }

  return (
    <Paper elevation={4}>
      <div className="item-form-wrapper">
        <form className="item-form">
          <input
            type="text"
            value={newItem}
            onChange={handleChange}
          />
          <input type="submit" onClick={() => handleSubmit()} value="Add Item" />
        </form>
      </div>
    </Paper>
  )
}

export default ItemForm
