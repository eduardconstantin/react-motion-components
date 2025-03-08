import { themes } from "@storybook/theming";

export const parameters = {
  actions: {},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
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
  docs: {
    theme: themes.dark,
  },
};
// export const tags = ["autodocs"];
