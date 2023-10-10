import "@testing-library/jest-dom";
import App from "../App.js";
import { render, fireEvent, screen } from '@testing-library/react'

describe("b3ex03: Form handling", () => {
  it("#1 There should be three functional components in App.js", async () => {
    const view = render(<App />)
    const key = Object.keys(view)[0]
    const key2 = Object.keys(view[key])[0]
    const key3 = Object.keys(view[key][key2].alternate.child.child.stateNode)[1]
    const key4 = Object.keys(view[key][key2].alternate.child.child.stateNode[key3])[0]
    const arr = []
    view[key][key2].alternate.child.child.stateNode[key3][key4].forEach(comp => {
      if (`${comp.type}`.includes("function")) arr.push(arr.length)
    })
    expect(arr.length).toBe(3)
  });
  it("#2 There should be two inputs with onChange event in App.js", async () => {
    render(<App />);
    const inputs = await screen.findAllByRole("textbox")
    expect(inputs.length).toBe(2)
    inputs.forEach((input, i) => {
      fireEvent.change(input, { target: { value: i } })
      expect(input.value).toBe(`${i}`)
    })
  });
  it("#3 There should be a button with onClick event in App.js", () => {
    render(<App />);
    const button = screen.getByRole('button')
    const key1 = Object.keys(button)[0]
    expect(Object.keys(button[key1].pendingProps)[0]).toBe("onClick")
  });
  it("#4 Alert should show user's input", async () => {
    render(<App />);
    let text;
    const inputs = await screen.findAllByRole("textbox")
    inputs.forEach((input, idx) =>
      idx === 0
        ? fireEvent.change(input, { target: { value: "Hello" } })
        : idx === 1 && fireEvent.change(input, { target: { value: "World" } })
    );
    const button = screen.getByRole('button')
    function foo(e) { text = e }
    window.alert = foo
    fireEvent.click(button)
    expect(text).toContain("Hello");
    expect(text).toContain("World");
  });
});
