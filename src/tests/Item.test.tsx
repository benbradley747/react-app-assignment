import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ItemData } from "../state/Interfaces"
import Item from "../components/Item"

describe("components/Item", () => {
  const mockItem: ItemData = {
    id: 0,
    name: "My Item",
  }

  const renderComponent = () => {
    render(<Item item={mockItem} />)
  }

  it("should render the correct item name", () => {
    renderComponent()
    expect(screen.getByText(mockItem.name)).toBeInTheDocument()
  })
})
