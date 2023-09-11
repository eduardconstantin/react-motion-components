import { Variants } from "framer-motion";

export const buttonAnim: Variants = {
  init: {
    scale: 1,
    boxShadow: "inset 50px 0 50px -25px rgba(204, 204, 204, 0.8), inset -50px 0 50px -25px rgba(204, 204, 204, 0.8)",
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.3,
    },
  },
  anim: {
    boxShadow: "inset 80px 0 50px -25px rgba(204, 204, 204, 0.8), inset -80px 0 50px -25px rgba(204, 204, 204, 0.8)",
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 0.5,
    },
  },
  tap: {
    scale: 0.95,
  },
};

export const squaresAnim: Variants = {
  init: {
    opacity: 0,
  },
  anim: ({ dur, del, op }) => ({
    opacity: op,
    transition: {
      type: "tween",
      ease: "anticipate",
      repeat: Infinity,
      repeatType: "mirror",
      duration: dur,
      delay: del,
    },
  }),
};
