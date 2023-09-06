import type { StoryObj, Meta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Components/Buttons/Counter-Strike Button",
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "Custom Dark",
      values: [
        {
          name: "Custom Dark",
          value: "#121112",
        },
      ],
    },
  },
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {},
};
