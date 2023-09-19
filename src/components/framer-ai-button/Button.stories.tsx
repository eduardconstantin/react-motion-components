import type { StoryObj, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Buttons/Framer AI Button",
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Generate Site",
    hueValue: 0,
  },
};
