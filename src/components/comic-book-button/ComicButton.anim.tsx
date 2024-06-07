export const buttonAnim = {
  init: {
    translateX: [0, 0, 0, 0, 0, 0, 0, 0],
    scale: 1,
    textShadow: [
      "0px 0px 0px #ff006a, 0px 0px 0px #00dcff",
      "0x 0px 2px #ff006a, 0px 0px 0px #00dcff",
      "0px 0px 0px #ff006a, 0px 0px 0px #00dcff",
      "0px 0px 0px #ff006a, 0x 0px 0px #00dcff",
      "0px 0px 0px #ff006a, 0px 0px 0px #00dcff",
      "0px 0px 0px #ff006a, 0px 0px 0px #00dcff",
    ],
    filter: [
      "drop-shadow(0px 0px 0px #ff006a) drop-shadow(0px 0px 0px #00dcff)",
      "drop-shadow(0px 0px 0px #ff006a) drop-shadow(0px 0px 0px #00dcff)",
      "drop-shadow(0px 0px 0px #ff006a) drop-shadow(0px 0px 0px #00dcff)",
      "drop-shadow(0px 0px 0px #ff006a) drop-shadow(0px 0px 0px #00dcff)",
      "drop-shadow(0px 0px 0px #ff006a) drop-shadow(0px 0px 0px #00dcff)",
      "drop-shadow(0px 0px 0px #ff006a) drop-shadow(0px 0px 0px #00dcff)",
    ],
    transition: {
      duration: 0.1,
      ease: [0.455, 0.03, 0.515, 0.955],
    },
  },
  hover: (custom: number) => ({
    translateX: [0, -custom, custom, -custom + 2, custom - 2, -custom, custom, 0],
    textShadow: [
      "0px 0px 0px #ff006a, 0px 0px 0px #00dcff",
      "-14px 0px 2px #ff006a, 14px 0px 2px #00dcff",
      "14px 0px 2px #ff006a, -14px 0px 2px #00dcff",
      "-14px 0px 2px #ff006a, 14px 0px 2px #00dcff",
      "14px 0px 2px #ff006a, -14px 0px 2px #00dcff",
      "0px 0px 0px #ff006a, 0px 0px 0px #00dcff",
    ],
    filter: [
      "drop-shadow(0px 0px 0px #ff006a) drop-shadow(0px 0px 0px #00dcff)",
      "drop-shadow(-5px 0px 1px #ff006a) drop-shadow(5px 0px 1px #00dcff)",
      "drop-shadow(5px 0px 1px #ff006a) drop-shadow(-5px 0px 1px #00dcff)",
      "drop-shadow(-5px 0px 1px #ff006a) drop-shadow(5px 0px 1px #00dcff)",
      "drop-shadow(5px 0px 1px #ff006a) drop-shadow(-5px 0px 1px #00dcff)",
      "drop-shadow(0px 0px 0px #ff006a) drop-shadow(0px 0px 0px #00dcff)",
    ],
    transition: {
      duration: 0.2,
      ease: [0.455, 0.03, 0.515, 0.955],
    },
  }),
  tap: {
    scale: 0.9,
    transition: {
      duration: 0.1,
      ease: [0.455, 0.03, 0.515, 0.955],
    },
  },
};

export const clickAnim = {
  init: (custom: number) => ({
    x: custom,
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  }),
  anim: {},
  tap: (custom: number) => ({
    x: custom,
    opacity: 1,
    scale: 1.2,
    transition: {
      duration: 0.07,
    },
  }),
};
