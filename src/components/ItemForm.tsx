import React, { MouseEvent, ChangeEvent, useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from '@mui/material'

import { useAppContext } from './AppWrapper'

const ItemForm = () => {
  const { state, dispatch } = useAppContext()
  const [newItem, setNewItem] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSubmit = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()

    if (newItem.length !== 0) {
      dispatch({ type: 'addItem', data: { id: state.count, name: newItem } })
      setNewItem('')
      setError('')
    } else {
      setError('Item name cannot be empty')
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItem(event.target.value)
  }

  return (
    <FormControl sx={{ margin: '10px' }}>
      <Box display="flex" sx={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextField
          aria-describedby="helper-text"
          label="New Item"
          variant="filled"
          size="small"
          value={newItem}
          onChange={handleChange}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          color="primary">
          Add Item
        </Button>
      </Box>
      <FormHelperText error={true} id="helper-text">
        {error}
      </FormHelperText>
    </FormControl>
  )
}

export default ItemForm
