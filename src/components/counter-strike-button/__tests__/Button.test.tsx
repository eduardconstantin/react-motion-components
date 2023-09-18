import Button from "../Button";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { useSquareData } from "../hooks";

jest.mock("../hooks", () => ({
  useSquareData: jest.fn(),
}));

describe("Button", () => {
  beforeEach(() => {
    (useSquareData as jest.Mock).mockReturnValue({
      size: 10,
      squares: [
        { dur: 1, del: 0.2, op: 1 },
        { dur: 0.5, del: 0.1, op: 1 },
        { dur: 0.1, del: 0.4, op: 0.5 },
        { dur: 0.6, del: 0.3, op: 1 },
      ],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", async () => {
    const { getByText } = render(<Button />);
    expect(getByText("GO")).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    const { getByText } = render(<Button>TEST</Button>);
    expect(getByText("TEST")).toBeInTheDocument();
  });

  it("changes the background", async () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick} randomBg={true} />);
    const button = getByRole("button");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("changes hover state on mouse events", async () => {
    const { getByRole } = render(<Button />);
    const button = getByRole("button");
    await userEvent.hover(button);
    await userEvent.unhover(button);
  });
});
