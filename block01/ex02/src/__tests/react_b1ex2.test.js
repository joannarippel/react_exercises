import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Test from "../App.js";

beforeEach(() => render(<Test />));

describe("b1ex02: Display all products and best-sellers with a header and a footer", () => {
  it("#1 Must contain a header tag", () => {
    expect(screen.getByRole("banner")).toHaveTextContent("My Shop");
  });
  it("#2 Must contain a footer tag", () => {
    expect(screen.getByRole("contentinfo")).toHaveTextContent(
      "All rights reserved"
    );
  });
  it("#3 Must contain the batman shirt twice", async () => {
    const batman_shirts = await screen.findAllByText((text) =>
      text.includes("batman t-shirt")
    );
    expect(batman_shirts).toHaveLength(2);
  });
  it("#4 Must contain the superman hat twice", async () => {
    const superman_hat = await screen.findAllByText((text) =>
      text.includes("superman hat")
    );
    expect(superman_hat).toHaveLength(2);
  });
  it("#5 Must contain the flash t-shirt once", async () => {
    const flash_shirt = await screen.findAllByText((text) =>
      text.includes("flash t-shirt")
    );
    expect(flash_shirt).toHaveLength(1);
  });
  it("#6 Must contain the batman shirt price twice", async () => {
    const batman_shirts = await screen.findAllByText((text) =>
      text.includes("22.5")
    );
    expect(batman_shirts).toHaveLength(2);
  });
  it("#7 Must contain the superman hat price twice", async () => {
    const superman_hat = await screen.findAllByText((text) =>
      text.includes("13.9")
    );
    expect(superman_hat).toHaveLength(2);
  });
  it("#8 Must contain the flash t-shirt price once", async () => {
    const flash_shirt = await screen.findAllByText((text) =>
      text.includes("27.5")
    );
    expect(flash_shirt).toHaveLength(1);
  });
  it("#9 Must contain the flash t-shirt image once", () => {
    const images = screen
      .getAllByRole("img")
      .filter(
        (image) =>
          image.src ===
          "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg"
      );
    expect(images).toHaveLength(1);
  });
  it("#10 Must contain the batman shirt image twice", () => {
    const images = screen
      .getAllByRole("img")
      .filter(
        (image) =>
          image.src ===
          "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png"
      );
    expect(images).toHaveLength(2);
  });
  it("#11 Must contain the superman hat image twice", () => {
    const images = screen
      .getAllByRole("img")
      .filter(
        (image) =>
          image.src ===
          "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg"
      );
    expect(images).toHaveLength(2);
  });
  it("#12 Must contain two h1", () => {
    screen.getAllByRole("heading", { level: 1 }).forEach((heading) => {
      expect(heading).toBeInTheDocument();
    });
  });
});
