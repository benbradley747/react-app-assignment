import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Main, { ItemData } from "../components/Main"

describe("components/Main", () => {
  const renderComponent = () => {
    render(<Main />)
  }

  it("should render the header, form, and list components", () => {
    renderComponent()
    expect(screen.getByText(/Manage my items/)).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("list")).toBeInTheDocument()
  })
})
