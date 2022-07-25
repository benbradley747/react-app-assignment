import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Context, ItemData } from "../components/Main"
import ItemList from "../components/ItemList"

describe("components/ItemList", () => {
  const mockItems: ItemData[] = [
    {
      id: 0,
      name: "First item",
    },
    {
      id: 1,
      name: "Second item"
    }
  ]

  const renderComponent = () => {
    const dispatch = jest.fn()

    render(
      <Context.Provider
        value={{
          state: {
            count: mockItems.length,
            items: mockItems
          },
          dispatch: dispatch
        }}
      >
        <ItemList />
      </Context.Provider>
    )
  }

  it("should render all items and count them properly", () => {
    renderComponent()

    expect(screen.getByText(`My items (${mockItems.length})`)).toBeInTheDocument()
    expect(screen.getByText(mockItems[0].name)).toBeInTheDocument()
    expect(screen.getByText(mockItems[1].name)).toBeInTheDocument()
  })
})
