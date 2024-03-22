import type { StoryObj, Meta } from "@storybook/react";
import DynamicMenu from "./DynamicMenu";

const menuItems = [
  <a href="#">Item 1</a>,
  <a href="#">Item 2</a>,
  <a href="#">Item 3</a>,
  <a href="#">Item 4</a>,
  <a href="#">Item 5</a>,
];

export default {
  title: "Components/Menus/Dynamic Menu",
  component: DynamicMenu,
  args: {
    menuName: "Dynamic Menu",
    menuItems: menuItems,
    openDirection: "down",
  },
  argTypes: {
    menuName: {
      control: "text",
      description: "The menu label name.",
    },
    menuItems: {
      control: "object",
      description: "The list of menu elements.",
    },
    openDirection: {
      control: "select",
      options: ["up", "down"],
      description: "The direction the menu can open.",
    },
  },
} as Meta<typeof DynamicMenu>;

type Story = StoryObj<typeof DynamicMenu>;

export const Default: Story = {
  argTypes: {
    menuName: { control: false },
    menuItems: { control: false },
    openDirection: { control: false },
  },
};

export const OpenUp: Story = {
  args: {
    ...Default.args,
    openDirection: "up",
  },
  argTypes: Default.argTypes,
};
