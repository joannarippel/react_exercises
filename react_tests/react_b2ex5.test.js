import { render } from '@testing-library/react'
import "@testing-library/jest-dom";
import App from "../App.js";
import List from "../List.js";

describe("b2ex05: Refactor ECommerce clone", () => {
  it("#1 App.js must render 2 components containing 'List' in their name", () => {
    const view = render(<App />)
    const key = Object.keys(view)[0]
    const key2 = Object.keys(view[key])[0]
    const key3 = Object.keys(view[key][key2].alternate.child.child.stateNode)[1]
    const key4 = Object.keys(view[key][key2].alternate.child.child.stateNode[key3])[0]
    const arr = []
    view[key][key2].alternate.child.child.stateNode[key3][key4].forEach((comp, i) => {
      if (`${comp.type}`.includes("List")) arr.push(arr.length)
    })
    expect(arr.length === 2).toBe(true)
  });
  it("#2 App.js must pass products through props the products array using key 'products' to the components", () => {
    const view = render(<App />)
    const key = Object.keys(view)[0]
    const key2 = Object.keys(view[key])[0]
    const key3 = Object.keys(view[key][key2].alternate.child.child.stateNode)[1]
    const key4 = Object.keys(view[key][key2].alternate.child.child.stateNode[key3])[0]
    const arr = []
    view[key][key2].alternate.child.child.stateNode[key3][key4].forEach((comp, i) => {
      if (comp.props.products?.length > 0) arr.push(arr.length)
    })
    expect(arr.length === 2).toBe(true)
  });
  it("#3 List.js must render passed products.length Item components", () => {
    const random = Math.floor(Math.random() * 5) + 1
    const products = Array.from(Array(random).keys())
    const view = render(<List products={products} />)
    const key = Object.keys(view)[0]
    const key2 = Object.keys(view[key])[0]
    const key3 = Object.keys(view[key][key2].alternate.child.child.stateNode)[1]
    const key4 = Object.keys(view[key][key2].alternate.child.child.stateNode[key3])[0]
    const arr = []
    view[key][key2].alternate.child.child.stateNode[key3][key4].forEach((comp, i) => {
      if (`${comp.type}`.includes("Item")) arr.push(arr.length)
    })
    expect(arr.length === products.length).toBe(true)
  });
});
