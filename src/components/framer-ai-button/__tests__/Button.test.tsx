import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "../Button";

describe("Button", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Button />);
    expect(getByText("Button Text")).toBeInTheDocument();
  });

  it("changes hover state on mouse events", async () => {
    const { getByRole } = render(<Button />);
    const button = getByRole("button");
    await userEvent.hover(button);
    await userEvent.unhover(button);
  });

  it("renders children correctly", () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("applies the hue rotation style correctly", () => {
    const { getByRole } = render(<Button hueValue={90}>Test</Button>);
    const button = getByRole("button");
    expect(getComputedStyle(button).filter).toBe("hue-rotate(90deg)");
  });
});
