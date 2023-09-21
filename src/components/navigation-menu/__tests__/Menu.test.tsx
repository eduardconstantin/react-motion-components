import Menu from "../Menu";
import MenuLink from "../components/MenuLink/MenuLink";
import MenuBar from "../components/MenuBar/MenuBar";
import { render, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BsFillBootstrapFill } from "react-icons/bs";

describe("Button", () => {
  it("renders correctly", async () => {
    const { getByTestId } = render(<Menu />);
    const button = getByTestId("menu-button");
    expect(button).toBeInTheDocument();
  });

  it("toggles menu on button click", async () => {
    const { getByTestId } = render(<Menu />);
    const button = getByTestId("menu-button");
    const navBar = getByTestId("nav-bar");
    expect(navBar).toHaveStyle(`opacity: 0`);

    await userEvent.click(button);
    await waitFor(() => {
      expect(navBar).toHaveStyle(`opacity: 1`);
    });

    await userEvent.click(button);
    await waitFor(() => {
      expect(navBar).toHaveStyle(`opacity: 0`);
    });
  });

  it("handles mouse events correctly", async () => {
    const { getByTestId } = render(<Menu />);
    const button = getByTestId("menu-button");
    const navBar = getByTestId("nav-bar");

    await userEvent.click(button);

    const mockEvent = new MouseEvent("mouse", {
      clientX: 10,
      clientY: 20,
    });
    fireEvent.mouseMove(navBar, mockEvent);
  });

  it("handles mouse events correctly on elements", async () => {
    const mockOnClick1 = jest.fn();
    const mockOnClick2 = jest.fn();
    const mockOnClick3 = jest.fn();
    const mockOnClick4 = jest.fn();

    const elements = [
      {
        buttonIcon: <BsFillBootstrapFill />,
        buttonLabel: "element1",
        onClick: mockOnClick1,
      },
      {
        buttonIcon: <BsFillBootstrapFill />,
        buttonLabel: "element2",
        onClick: mockOnClick2,
      },
      {
        buttonIcon: <BsFillBootstrapFill />,
        buttonLabel: "element3",
        onClick: mockOnClick3,
      },
      {
        buttonIcon: <BsFillBootstrapFill />,
        buttonLabel: "element4",
        onClick: mockOnClick4,
      },
    ];

    const { getByTestId } = render(
      <Menu menuIcon={<BsFillBootstrapFill />} menuElements={elements} tiltAngle={50} menuSize={6} />
    );
    const button = getByTestId("menu-button");
    const navBar = getByTestId("nav-bar");

    await userEvent.click(button);
    const menuBtns = navBar.querySelectorAll(".listButton");
    menuBtns.forEach(async (button) => await userEvent.click(button));
    await waitFor(() => {
      expect(mockOnClick1).toHaveBeenCalled();
      expect(mockOnClick2).toHaveBeenCalled();
      expect(mockOnClick3).toHaveBeenCalled();
      expect(mockOnClick4).toHaveBeenCalled();
    });
  });

  it("renders correctly when isOpen is not provided", () => {
    const mockOnClick1 = jest.fn();
    const mockOnClick2 = jest.fn();
    const mockOnClick3 = jest.fn();
    const mockOnClick4 = jest.fn();
    const elements = [
      {
        buttonIcon: <BsFillBootstrapFill />,
        buttonLabel: "element1",
        onClick: mockOnClick1,
      },
      {
        buttonIcon: <BsFillBootstrapFill />,
        buttonLabel: "element2",
        onClick: mockOnClick2,
      },
      {
        buttonIcon: <BsFillBootstrapFill />,
        buttonLabel: "element3",
        onClick: mockOnClick3,
      },
      {
        buttonIcon: <BsFillBootstrapFill />,
        buttonLabel: "element4",
        onClick: mockOnClick4,
      },
    ];
    const { getByTestId } = render(<MenuBar menuElements={elements} menuSize={4} angle={5} />);
    const navBar = getByTestId("nav-bar");
    expect(navBar).toBeInTheDocument();
  });

  it("renders correctly when no props are provided", () => {
    const { getByRole } = render(<MenuLink />);
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", async () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(
      <MenuLink onClick={mockOnClick} buttonLabel="test" buttonIcon={<BsFillBootstrapFill />} />
    );
    const button = getByRole("button");

    await userEvent.click(button);
    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
