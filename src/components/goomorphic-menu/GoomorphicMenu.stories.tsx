import type { StoryObj, Meta } from "@storybook/react";
import ContentWrapper from "./components/ContentWrapper";

const sections = [
  { id: "Home", key: "home" },
  { id: "About", key: "about" },
  { id: "Features", key: "features" },
  { id: "Pricing", key: "pricing" },
  { id: "Contact", key: "contact" },
];

export default {
  title: "Components/Menus/Goomorphic Menu",
  component: ContentWrapper,
  tags: ["!autodocs"],
  args: {
    sections: sections,
  },
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} as Meta<typeof ContentWrapper>;

type Story = StoryObj<typeof ContentWrapper>;

export const Default: Story = {
  argTypes: {
    sections: { control: false },
  },
};
