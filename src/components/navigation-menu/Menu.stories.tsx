import type { StoryObj, Meta } from "@storybook/react";
import Menu from "./Menu";

export default {
  title: "Components/Menus/Navigation Menu",
  component: Menu,
} as Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {};
