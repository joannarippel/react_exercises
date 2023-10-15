import "@testing-library/jest-dom";
import { render, fireEvent, screen } from '@testing-library/react'
import App from "../App.js";

describe("b3ex02: Change and render state ( Functional )", () => {
  it("#1 There should be an input in App.js with an onChange event", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
  });
  it("#2 There should be an h1 component initialised to 'no data provided!'", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    expect(input.value).toBe('no data provided!')
  });
  it("#3 There should be an h1 component rendering state", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'test' } })
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent('test')
  });
});
