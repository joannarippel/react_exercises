import { fireEvent, render, screen } from '@testing-library/react'
import "@testing-library/jest-dom";
import App from "../App.js";

describe("b3ex01: Change and render state ( Class )", () => {
  it("#1 There should be an input in App.js with an onChange event", () => {
    render(<App />)
    const input = screen.getByRole("textbox")
    const key = Object.keys(input)[1]
    expect(Object.keys(input[key]).includes("onChange")).toBe(true)
  });
  it("#2 There should be an h1 component initialised to 'no data provided!'", () => {
    render(<App />)
    const h1 = screen.getByRole("heading", { level: 1 })
    expect(h1.innerHTML).toBe("no data provided!")
  });
  it("#3 There should be an h1 component rendering state", () => {
    render(<App />)
    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "test" } })
    const h1 = screen.getByRole("heading", { level: 1 })
    expect(h1.innerHTML).toBe("test")
  });
});
