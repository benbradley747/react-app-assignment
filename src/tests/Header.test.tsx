import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../components/Header"

describe("components/Header", () => {
  const renderComponent = () => {
    render(<Header />)
  }

  it("should render the header, form, and list components", () => {
    renderComponent()
    expect(screen.getByText(/Manage my items/)).toBeInTheDocument()
  })
})
