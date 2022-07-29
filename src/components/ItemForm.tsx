import React, { useContext } from "react"
import { Paper } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { useAppContext } from "./AppWrapper"

const ItemForm = () => {
  const { state, dispatch } = useAppContext()
  const [newItem, setNewItem] = useState<string>("")

  const handleSubmit = () => {
    event?.preventDefault()

    if (newItem.length != 0) {
      dispatch({ type: "addItem", data: { id: state.count, name: newItem } })
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
          <input type="text" value={newItem} onChange={handleChange} />
          <input
            type="submit"
            onClick={() => handleSubmit()}
            value="Add Item"
          />
        </form>
      </div>
    </Paper>
  )
}

export default ItemForm
