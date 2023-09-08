import { Variants } from "framer-motion";
import { RANDOM } from "../helpers";

export const buttonAnim: Variants = {
  init: {
    scale: 1,
    boxShadow: "inset 50px 0 50px -25px rgba(74, 194, 18, 0.7), inset -50px 0 50px -25px rgba(74, 194, 18, 0.7)",
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.3,
    },
  },
  anim: {
    boxShadow: "inset 80px 0 50px -25px rgba(74, 194, 18, 0.7), inset -80px 0 50px -25px rgba(74, 194, 18, 0.7)",
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
