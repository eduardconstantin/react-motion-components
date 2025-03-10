import type { StoryObj, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Buttons/Marvel Rivals Button",
  args: {
    text: "JOIN NOW",
    buttonColor: 0,
  },
  argTypes: {
    text: {
      control: "text",
      description: "Specify the text of your Button.",
    },
    buttonColor: {
      control: { type: "range", min: 0, max: 360, step: 20 },
      description: "The hue value to change the button color.",
    },
  },
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  argTypes: {
    text: { control: false },
    buttonColor: { control: false },
  },
};
export const Playground: Story = {
  args: {
    text: "playground",
    buttonColor: 180,
  },
};
