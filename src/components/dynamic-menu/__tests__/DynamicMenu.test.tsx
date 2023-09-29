import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import DynamicMenu from "../DynamicMenu";

describe("DynamicMenu", () => {
  it("renders correctly", () => {
    const menuItems = [<div key="1">Item 1</div>, <div key="2">Item 2</div>];
    const { getByText } = render(<DynamicMenu menuItems={menuItems} />);

    expect(getByText("Dynamic Menu")).toBeInTheDocument();
    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
  });

  it("toggles menu on click", async () => {
    const menuItems = [<div key="1">Item 1</div>, <div key="2">Item 2</div>];
    const { getByTestId, getByRole } = render(<DynamicMenu menuItems={menuItems} />);

    const button = getByRole("button");
    const menu = getByTestId("menu");
    expect(getComputedStyle(menu).opacity).toBe("0");

    // After clicking the button, the menu should open
    await userEvent.click(button);
    await waitFor(() => {
      expect(getComputedStyle(menu).opacity).toBe("1");
    });
    // After clicking the button again, the menu should close
    await userEvent.click(button);
    await waitFor(() => {
      expect(getComputedStyle(menu).opacity).toBe("0");
    });
  });
  it("toggles menu on up direction", async () => {
    const menuItems = [<div key="1">Item 1</div>, <div key="2">Item 2</div>];
    const { getByTestId, getByRole } = render(<DynamicMenu menuItems={menuItems} openDirection="up" />);

    const button = getByRole("button");
    const menu = getByTestId("menu");
    expect(getComputedStyle(menu).opacity).toBe("0");

    // After clicking the button, the menu should open
    await userEvent.click(button);
    await waitFor(() => {
      expect(getComputedStyle(menu).opacity).toBe("1");
    });
    // After clicking the button again, the menu should close
    await userEvent.click(button);
    await waitFor(() => {
      expect(getComputedStyle(menu).opacity).toBe("0");
    });
  });
});
