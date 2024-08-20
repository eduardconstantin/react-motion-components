import type { StoryObj, Meta } from "@storybook/react";
import GoomorphicMenu from "./GoomorphicMenu";

const sections = [
  { id: "Home", key: "home" },
  { id: "About", key: "about" },
  { id: "Features", key: "features" },
  { id: "Pricing", key: "pricing" },
  { id: "Contact", key: "contact" },
];

export default {
  title: "Components/Menus/Goomorphic Menu",
  component: GoomorphicMenu,
  args: {
    section: sections[0].id,
    sections: sections,
  },
  argTypes: {},
} as Meta<typeof GoomorphicMenu>;

type Story = StoryObj<typeof GoomorphicMenu>;

export const Default: Story = {
  argTypes: {
    section: { control: false },
    sections: { control: false },
  },
};

export const OpenUp: Story = {
  args: {
    ...Default.args,
  },
  argTypes: Default.argTypes,
};
