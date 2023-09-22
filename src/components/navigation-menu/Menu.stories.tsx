import type { StoryObj, Meta } from "@storybook/react";
import {
  BsHouse,
  BsNewspaper,
  BsShopWindow,
  BsPencilSquare,
  BsList,
  BsCart,
  BsChat,
  BsEnvelope,
  BsHeart,
  BsImage,
  BsPerson,
} from "react-icons/bs";
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

const small = [
  {
    buttonIcon: <BsHouse />,
    buttonLabel: "home",
    onClick: () => {},
  },
  {
    buttonIcon: <BsNewspaper />,
    buttonLabel: "news",
    onClick: () => {},
  },
  {
    buttonIcon: <BsShopWindow />,
    buttonLabel: "shop",
    onClick: () => {},
  },
  {
    buttonIcon: <BsPencilSquare />,
    buttonLabel: "contact",
    onClick: () => {},
  },
];
const elements = [
  {
    buttonIcon: <BsEnvelope />,
    buttonLabel: "mail",
    onClick: () => {},
  },
  {
    buttonIcon: <BsChat />,
    buttonLabel: "chat",
    onClick: () => {},
  },
  {
    buttonIcon: <BsCart />,
    buttonLabel: "cart",
    onClick: () => {},
  },
  {
    buttonIcon: <BsHouse />,
    buttonLabel: "home",
    onClick: () => {},
  },
  {
    buttonIcon: <BsNewspaper />,
    buttonLabel: "news",
    onClick: () => {},
  },
  {
    buttonIcon: <BsShopWindow />,
    buttonLabel: "shop",
    onClick: () => {},
  },
  {
    buttonIcon: <BsPencilSquare />,
    buttonLabel: "contact",
    onClick: () => {},
  },
  {
    buttonIcon: <BsHeart />,
    buttonLabel: "heart",
    onClick: () => {},
  },
  {
    buttonIcon: <BsImage />,
    buttonLabel: "image",
    onClick: () => {},
  },
  {
    buttonIcon: <BsPerson />,
    buttonLabel: "profile",
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
    menuElements: small,
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
