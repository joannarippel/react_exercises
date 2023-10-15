import "@testing-library/jest-dom";
import App from "../App.js";
import Child from "../Child.js";
import { render, screen } from '@testing-library/react'

describe("b2ex01: Pass some prop from class parent component to class child component", () => {
  it("#1 Child must be a class component", () => {
    render(<App />)
    const p = (screen.queryByText(/child/))
    const key = Object.keys(p)[0]
    expect(`${p[key]._debugOwner.elementType}`.includes("class")).toBe(true)
  });
  it("#2 Must have a prop 'name' rendered in child component", async () => {
    const now = Date.now()
    render(<Child name={now} />)
    const p = screen.queryByText(/child/)
    const key = Object.keys(p)[1]
    const key2 = Object.keys(p[key])
    expect(p[key][key2].includes(now)).toBe(true)
  });
  it("#3 There must be a match between passed prop and child rendering", async () => {
    const { unmount } = render(<App />)
    const p = (screen.queryByText(/child/))
    const key = Object.keys(p)[0]
    const name = p[key]._debugOwner.stateNode.props.name
    expect(!!name).not.toBe(false)
    unmount()
    render(<Child name={name} />)
    const found = screen.queryByText(/child/)
    const key2 = Object.keys(found)[1]
    const key3 = Object.keys(found[key2])
    expect(found[key2][key3].includes(name)).toBe(true)
  });
});
