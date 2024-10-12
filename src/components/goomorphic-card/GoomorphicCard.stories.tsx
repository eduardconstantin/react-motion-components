import type { StoryObj, Meta } from "@storybook/react";
import GoomorphicCard from "./GoomorphicCard";

export default {
  title: "Components/Cards/Goomorphic Card",
  component: GoomorphicCard,
  args: {
    location: "Bogliasco, Italy",
    device: "FUJIFILM, X-T30 II",
    name: "Grigorii Shcheglov",
    user: "@shegiva",
    url: "https://images.unsplash.com/photo-1723843038784-12e69916ac1e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "Orange", value: "#f1a97f" }],
      default: "Orange",
    },
  },
  argTypes: {},
} as Meta<typeof GoomorphicCard>;

type Story = StoryObj<typeof GoomorphicCard>;

export const Default: Story = {};
