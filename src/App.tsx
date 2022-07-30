import React from 'react'
import './App.css'
import { AppWrapper } from './components/AppWrapper'
import Header from './components/Header'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'

function App() {
  return (
    <AppWrapper>
      <Header />
      <ItemForm />
      <ItemList />
    </AppWrapper>
  )
}

export default App
