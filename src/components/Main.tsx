import React from "react"
import { AppWrapper } from "./AppWrapper"
import Header from "./Header"
import ItemForm from "./ItemForm"
import ItemList from "./ItemList"

const Main = () => {
  return (
    <AppWrapper>
      <div className="Container">
        <Header />
        <ItemForm />
        <ItemList />
      </div>
    </AppWrapper>
  )
}

export default Main
