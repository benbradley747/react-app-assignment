import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from '@testing-library/user-event'
import ItemForm from "../components/ItemForm"

describe("components/ItemForm", () => {
  const renderComponent = () => {
    return render(<ItemForm />)
  }

  it("should render the correct components in the form", async () => {
    renderComponent()

    const inputComponent = screen.getByRole("textbox")
    const buttonComponent = screen.getByRole("button", {name: "Add Item"})

    expect(buttonComponent).toBeInTheDocument()
    expect(inputComponent).toBeInTheDocument()
  })

  it("should show the correct value on the textbox after input", async () => {
    renderComponent()

    const inputComponent = screen.getByRole("textbox")
    await userEvent.type(inputComponent, "My Item")

    expect(inputComponent).toHaveValue("My Item")
  })
})
