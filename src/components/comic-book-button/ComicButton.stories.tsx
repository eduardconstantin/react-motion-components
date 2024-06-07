import ComicButton from "./ComicButton";
import type { StoryObj, Meta } from "@storybook/react";
export default {
  title: "Components/Buttons/Comic-Book Button",
  args: {
    buttonName: "BUTTON",
    hoverBtnName: "BUTTON",
    btnClassName: "default",
    handleButtonClick: () => {},
  },
  argTypes: {
    buttonName: {
      control: "text",
      description: "Specify the label of your Button.",
    },
    hoverBtnName: {
      control: "text",
      description: "Specify the label of your Button.",
    },
    btnClassName: {
      control: "text",
      description: "The class of the button.",
    },
    handleButtonClick: {
      action: "onClick",
      description: "Event handler that fires when the button is clicked.",
    },
  },
  component: ComicButton,
} as Meta<typeof ComicButton>;

type Story = StoryObj<typeof ComicButton>;

export const Default: Story = {
  argTypes: {
    buttonName: { control: false },
    hoverBtnName: { control: false },
    btnClassName: { control: false },
    handleButtonClick: { control: false },
  },
};

export const Playground: Story = {
  args: {
    buttonName: "PLAY",
    hoverBtnName: "PLAY",
  },
  argTypes: {
    handleButtonClick: {
      action: "clicked",
      description: "Event handler that fires when the button is clicked.",
    },
  },
};
