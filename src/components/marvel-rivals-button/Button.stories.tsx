import type { StoryObj, Meta } from "@storybook/react";
// import { ButtonType } from "./Button.d";
import Button from "./Button";

export default {
  title: "Components/Buttons/Marvel Rivals Button",
  // args: {},
  // argTypes: {},
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  // argTypes: {
  // children: { control: false },
  // randomBg: { control: false },
  // buttonType: { control: false },
  // buttonColor: { control: false },
  // size: { control: false },
  // },
};
