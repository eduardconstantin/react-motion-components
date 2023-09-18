import type { StoryObj, Meta } from "@storybook/react";
import { ButtonType } from "./Button.d";
import Button from "./Button";

export default {
  title: "Components/Buttons/Counter-Strike 2 Button",
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
  args: { randomBg: true, buttonType: "Default", children: "default", buttonColor: undefined, size: 5 },
  argTypes: {
    randomBg: {
      control: "boolean",
      description: "Toggle random background for the button.",
    },
    buttonType: {
      control: "select",
      options: Object.keys(ButtonType),
      description: 'The type of the button (e.g., "Default", "Success", "Danger").',
    },
    buttonColor: {
      control: "color",
      description: "The custom background color for the button (in hexadecimal or RGB format).",
    },
    size: {
      control: "number",
      description: "The width of the button.",
    },
    children: {
      control: "text",
      description: "Specify the label of your Button.",
    },
  },
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  argTypes: {
    children: { control: false },
    randomBg: { control: false },
    buttonType: { control: false },
    buttonColor: { control: false },
    size: { control: false },
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    randomBg: false,
    buttonType: "Success",
    children: "go",
  },
  argTypes: Default.argTypes,
};

export const Danger: Story = {
  args: {
    ...Success.args,
    buttonType: "Danger",
    children: "Cancel",
  },
  argTypes: Default.argTypes,
};

export const Info: Story = {
  args: {
    ...Success.args,
    buttonType: "Info",
    children: "Info",
  },
  argTypes: Default.argTypes,
};

export const Warning: Story = {
  args: {
    ...Success.args,
    buttonType: "Warning",
    children: "Warning",
  },
  argTypes: Default.argTypes,
};

export const CustomColor: Story = {
  args: {
    ...Success.args,
    children: "Custom",
    buttonColor: "#d590d8",
  },
  argTypes: Default.argTypes,
};

export const Playground: Story = {
  args: {
    children: "playground",
    size: 6,
  },
  argTypes: {
    onClick: {
      action: "clicked",
      description: "Event handler that fires when the button is clicked.",
    },
  },
};
