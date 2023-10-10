import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Test from "../App.js";

beforeEach(() => render(<Test />));

describe("b1ex01: Display a list of product categories", () => {
  it("#1 t-shirts should be in the document", () => {
    expect(screen.queryByText(/t-shirts/i)).toBeInTheDocument();
  });
  it("#2 hats should be in the document", () => {
    expect(screen.queryByText(/hats/i)).toBeInTheDocument();
  });
  it("#3 shorts should be in the document", () => {
    expect(screen.queryByText(/shorts/i)).toBeInTheDocument();
  });
  it("#4 jackets should be in the document", () => {
    expect(screen.queryByText(/jackets/i)).toBeInTheDocument();
  });
  it("#5 pants should be in the document", () => {
    expect(screen.queryByText(/pants/i)).toBeInTheDocument();
  });
  it("#6 shoes should be in the document", () => {
    expect(screen.queryByText(/shoes/i)).toBeInTheDocument();
  });
});
