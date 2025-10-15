import type { StoryObj, Meta } from "@storybook/react";
import BattlefieldSixMenu from "./BattlefieldSixMenu";

const menuItems = [
  { label: "PLAY", href: "/play" },
  { label: "LOADOUTS", href: "/loadouts" },
  { label: "CHALLENGES", href: "/challenges" },
  { label: "PROFILE", href: "/profile" },
];

export default {
  title: "Components/Menus/Battlefield 6 Menu",
  component: BattlefieldSixMenu,
  tags: ["!autodocs"],
  args: {
    menuItems: menuItems,
  },
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} as Meta<typeof BattlefieldSixMenu>;

type Story = StoryObj<typeof BattlefieldSixMenu>;

export const Default: Story = {
  argTypes: {
    menuItems: { control: false },
  },
};
