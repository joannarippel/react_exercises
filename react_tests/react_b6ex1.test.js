import "@testing-library/jest-dom";
import App from "../App.js";
import { render, fireEvent, screen } from '@testing-library/react'

describe("b6ex01: Initiation to Navigation", () => {
  it("#1 In a functional App.js there should be 4 NavLinks", () => {
    render(<App />)
    expect(screen.getAllByRole("link").length).toBe(4)
  });
  it("#2 When clicking on each link the URL should change to the corresponding path", () => {
    let allGood = true
    render(<App />)
    const links = screen.getAllByRole("link")
    links.forEach(link => {
      fireEvent.click(link)
      const url = global.window.location.pathname
      const title = screen.getByRole("heading", { level: 1 })
      if (url === "/" && title.innerHTML !== "I am Home") allGood = false
      if (url === "/about" && title.innerHTML !== "I am About") allGood = false
      if (url === "/contact" && title.innerHTML !== "I am Contact") allGood = false
      if (url === "/profile" && title.innerHTML !== "I am Profile") allGood = false
    })
    if (!allGood) return false
  });
});
