import "@testing-library/jest-dom";
import Name from "../Name.js";
import Surname from "../Surname.js";
import { render, screen } from '@testing-library/react'

describe("b2ex02: Display name and surname side by side", () => {
  it("#1 App.js must render 2 class components, each rendering the passed prop name and surname", () => {
    render(<Name name="Hannah" />)
    render(<Surname surname="Diamond" />)
    const name = screen.queryByText(/Hannah/)
    const nameKey = Object.keys(name)[0]
    const surname = screen.queryByText(/Diamond/)
    const surnameKey = Object.keys(surname)[0]
    expect(`${name[nameKey].return.elementType}`.includes("class")).toBe(true)
    expect(`${surname[surnameKey].return.elementType}`.includes("class")).toBe(true)
  });
});
