import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";
import "../Button.module.css";

describe("Button", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Button />);
    expect(getByText("Button Text")).toBeInTheDocument();
  });

  it("changes hover state on mouse events", () => {
    const { getByText } = render(<Button />);
    const button = getByText("Button Text");
    fireEvent.mouseOver(button);
    fireEvent.mouseOut(button);
  });

  it("renders children correctly", () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText("Test")).toBeInTheDocument();
  });

  // it("applies the hue rotation style correctly", () => {
  //   const { getByText } = render(<Button hueValue={90}>Test</Button>);
  //   expect(getByText("Test")).toHaveStyle({ filter: "hue-rotate(90deg)" });
  // });
});
