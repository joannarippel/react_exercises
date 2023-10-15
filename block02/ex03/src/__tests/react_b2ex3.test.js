import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom";
import App from "../App.js";
import List from "../List.js";
import Item from "../Item.js";

describe("b2ex03: Display categories ( Class )", () => {
  it("#1 App.js must render class component List", () => {
    const view = render(<App />)
    const key = Object.keys(view)[0]
    const key2 = Object.keys(view[key])[0]
    const key3 = Object.keys(view[key][key2].alternate.child.child.stateNode)[1]
    const key4 = Object.keys(view[key][key2].alternate.child.child.stateNode[key3])[0]
    expect(`${view[key][key2].alternate.child.child.stateNode[key3][key4].type}`.includes("class")).toBe(true)
    expect(`${view[key][key2].alternate.child.child.stateNode[key3][key4].type}`.includes("List")).toBe(true)
  });
  it("#2 List must render class component Item", () => {
    const view = render(<List categories={["shirts", "hats", "shoes"]} />)
    const key = Object.keys(view)[0]
    const key2 = Object.keys(view[key])[0]
    const key3 = Object.keys(view[key][key2].alternate.child.child.stateNode)[1]
    const key4 = Object.keys(view[key][key2].alternate.child.child.stateNode[key3])[0]
    expect(`${view[key][key2].alternate.child.child.stateNode[key3][key4][0].type}`.includes("class")).toBe(true)
    expect(`${view[key][key2].alternate.child.child.stateNode[key3][key4][0].type}`.includes("Item")).toBe(true)
  });
  it("#3 Pass categories array from App.js to List.js", () => {
    const view = render(<App />)
    const key = Object.keys(view)[0]
    const key2 = Object.keys(view[key])[0]
    const key3 = Object.keys(view[key][key2].alternate.child.child.stateNode)[1]
    const key4 = Object.keys(view[key][key2].alternate.child.child.stateNode[key3])[0]
    expect(view[key][key2].alternate.child.child.stateNode[key3][key4].props.categories.length > 0).toBe(true)
  });
  it("#4 Pass category item from List.js to Item.js", () => {
    render(<List categories={["test"]} />)
    const test = screen.queryByText("test")
    expect(test).toBeInTheDocument()

    // THIS SHOULD/MIGHT ALSO WORK
    // const key = Object.keys(view)[0]
    // const key2 = Object.keys(view[key])[0]
    // const key3 = Object.keys(view[key][key2].alternate.child.child.stateNode)[1]
    // const key4 = Object.keys(view[key][key2].alternate.child.child.stateNode[key3])[0]
    // expect(Object.keys(view[key][key2].alternate.child.child.stateNode[key3][key4][0].props).includes("category")).toBe(true)

  });
  it("#5 Item.js should render category coming from props", () => {
    render(<Item category="test" />)
    const test = screen.queryByText("test")
    expect(test).toBeInTheDocument()
  })
});
