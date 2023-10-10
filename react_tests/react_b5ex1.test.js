import "@testing-library/jest-dom";
import App from "../App.js";
import { render, fireEvent, screen } from '@testing-library/react'

describe("b5ex01: Dynamic Filtering", () => {
  it("#1 In a functional App.js there should be a form with an input (with an onChange event updating state) and a button", () => {
    render(<App />)
    const input = screen.getByRole("textbox")
    const key = Object.keys(input)[0]
    expect(input[key].return.elementType).toBe("form")
    expect(Object.keys(input[key].pendingProps).includes("onChange")).toBe(true)
    expect(screen.getByRole("button")).toBeInTheDocument()
  });
  it("#2 initially we should see all the products: 2 shirts and 1 hat", () => {
    render(<App />)
    expect(screen.getAllByText(/t-shirts/).length).toBe(2)
    expect(screen.getAllByText(/hats/).length).toBe(1)
  });
  it("#3 By typing 'shirt' we should see two products", () => {
    render(<App />)
    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "shirt" } })
    expect(screen.getAllByText(/t-shirts/).length).toBe(2)
    expect(screen.queryByText(/hats/)).toBeNull()
    // OR 
    // expect(screen.queryByText(/hats/)).not.toBeInTheDocument()
  });
  it("#4 By typing 'all' we should see all the products", () => {
    render(<App />)
    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "all" } })
    expect(screen.getAllByText(/t-shirts/).length).toBe(2)
    expect(screen.getAllByText(/hats/).length).toBe(1)
  });
  it("#5 By typing 'asdf' we should see no products and render 'No products found' phrase", () => {
    render(<App />)
    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "asdf" } })
    expect(screen.queryByText(/t-shirts/)).toBeNull()
    expect(screen.queryByText(/hats/)).toBeNull()
    expect(screen.getByText(/No products found/)).toBeInTheDocument()
  });
});
