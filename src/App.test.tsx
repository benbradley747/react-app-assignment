import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"
import Main, { ItemData } from "./components/Main"
import Item from "./components/Item"

it("should show the correct item name", () => {
  const item: ItemData = {
    id: 0,
    name: "My Item",
  }

  const renderedItem = render(<Item item={item} />)
  const nameTag = renderedItem.findByText("name-tag")

  expect(nameTag).toHaveClass("name-tag")
})
