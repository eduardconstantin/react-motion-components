import type { StoryObj, Meta } from "@storybook/react";
import ContentWrapper from "./components/ContentWrapper";

const menuItems = [
  { label: "PLAY", href: "/play" },
  { label: "LOADOUTS", href: "/loadouts" },
  { label: "CHALLENGES", href: "/challenges" },
  { label: "PROFILE", href: "/profile" },
];

export default {
  title: "Components/Menus/Battlefield 6 Menu",
  component: ContentWrapper,
  tags: ["!autodocs"],
  args: {
    menuItems: menuItems,
  },
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} as Meta<typeof ContentWrapper>;

type Story = StoryObj<typeof ContentWrapper>;

export const Default: Story = {
  argTypes: {
    menuItems: { control: false },
  },
};
