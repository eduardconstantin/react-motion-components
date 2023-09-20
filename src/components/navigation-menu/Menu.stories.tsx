import type { StoryObj, Meta } from "@storybook/react";
import { BsList, BsFillBootstrapFill } from "react-icons/bs";
import Menu from "./Menu";

export default {
  title: "Components/Menus/Navigation Menu",
  component: Menu,
  args: { menuIcon: <BsList />, menuElements: undefined, tiltAngle: undefined, menuSize: null },
  argTypes: {
    menuIcon: {
      control: "text",
      description: "The menu button icon.",
    },
    menuElements: {
      control: "object",
      description: "The list of menu elements.",
    },
    tiltAngle: {
      control: "number",
      description: "The angle the menu can tilt.",
    },
    menuSize: {
      control: "number",
      description: "The width of the menu.",
    },
  },
} as Meta<typeof Menu>;

const elements = [
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element1",
    onClick: () => {},
  },
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element2",
    onClick: () => {},
  },
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element3",
    onClick: () => {},
  },
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element4",
    onClick: () => {},
  },
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element5",
    onClick: () => {},
  },
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element6",
    onClick: () => {},
  },
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element7",
    onClick: () => {},
  },
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element8",
    onClick: () => {},
  },
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element9",
    onClick: () => {},
  },
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element10",
    onClick: () => {},
  },
];

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  argTypes: {
    menuIcon: { control: false },
    menuElements: { control: false },
    tiltAngle: { control: false },
    menuSize: { control: false },
  },
};

export const TiltAngle: Story = {
  args: {
    ...Default.args,
    tiltAngle: 50,
  },
  argTypes: Default.argTypes,
};

export const Small: Story = {
  args: {
    ...Default.args,
    menuSize: 2,
  },
  argTypes: Default.argTypes,
};

export const Medium: Story = {
  args: {
    ...Default.args,
    menuSize: 4,
    menuElements: elements.slice(0, 6),
  },
  argTypes: Default.argTypes,
};

export const Large: Story = {
  args: {
    ...Default.args,
    menuSize: 6,
    menuElements: elements.slice(0, 8),
  },
  argTypes: Default.argTypes,
};

export const ExtraLarge: Story = {
  args: {
    ...Default.args,
    menuSize: 8,
    menuElements: elements,
  },
  argTypes: Default.argTypes,
};
