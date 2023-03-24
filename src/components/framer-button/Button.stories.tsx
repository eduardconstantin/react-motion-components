import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Buttons/Framer Button",
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Generate Site",
  hueValue: 0,
};
