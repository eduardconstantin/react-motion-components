import type { StoryObj, Meta } from "@storybook/react";
import GoomorphicCard from "./GoomorphicCard";

export default {
  title: "Components/Cards/Goomorphic Card",
  component: GoomorphicCard,
  args: {
    sections: {},
  },
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} as Meta<typeof GoomorphicCard>;

type Story = StoryObj<typeof GoomorphicCard>;

export const Default: Story = {
  argTypes: {
    sections: { control: false },
  },
};
