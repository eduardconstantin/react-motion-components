import { Variants, Variant } from "framer-motion";

export const card: Variants = {
  init: {
    backgroundSize: "120%",
    backgroundPosition: "50% 100%",
    transition: { ease: [0.7, 0, 0, 0.9], type: "tween", duration: 5 },
  },
  anim: {
    backgroundSize: "110%",
    backgroundPosition: "50% 200%",
    filter: ["brightness(1)", "brightness(2)", "brightness(1)"],
    transition: { ease: [0.7, 0, 0, 0.9], type: "tween", duration: 1, delay: 0.9 },
  },
};

export const hr: Variants = {
  init: {
    opacity: 0,
  },
  anim: {
    opacity: 1,
    transition: { type: "tween", duration: 0.5, delay: 1.4 },
  },
};

export const text: Variants = {
  init: {
    filter: "blur(5px)",
    color: "rgba(255,0,0,1)",
  },
  anim: {
    filter: "blur(0px)",
    color: "rgba(255,255,255,0.6)",
    transition: { type: "tween", duration: 1, filter: { type: "tween", delay: 0.8, duration: 1 } },
  },
};

export const socials: Variants & { [key: string]: any } = {
  init: {
    height: 40,
    "--mask":
      "radial-gradient(0px at 50% 0px, #000 99%, #0000 101%) calc(50% - 36px) 0/72px 100%, radial-gradient(0px at 50% 0px, #0000 99%, #000 101%) 50% 0px/72px 100% repeat-x",
  },
  anim: {
    height: [40, 75, 40],
    "--mask": [
      "radial-gradient(0px at 50% 0px, #000 99%, #0000 101%) calc(50% - 36px) 0/72px 100%, radial-gradient(0px at 50% 0px, #0000 99%, #000 101%) 50% 0px/72px 100% repeat-x",
      "radial-gradient(18px at 50% 18px, #000 99%, #0000 101%) calc(50% - 36px) 0/72px 100%, radial-gradient(18px at 50% 0px, #0000 99%, #000 101%) 50% 18px/72px 100% repeat-x",
      "radial-gradient(18px at 50% 18px, #000 99%, #0000 101%) calc(50% - 36px) 0/72px 100%, radial-gradient(18px at 50% 0px, #0000 99%, #000 101%) 50% 18px/72px 100% repeat-x",
      "radial-gradient(0px at 50% 0px, #000 99%, #0000 101%) calc(50% - 36px) 0/72px 100%, radial-gradient(0px at 50% 0px, #0000 99%, #000 101%) 50% 0px/72px 100% repeat-x",
    ],
    transition: {
      ease: [0.85, 0, 0.15, 0.6],
      type: "tween",
      duration: 1.5,
      "--mask": { delay: 0.2, duration: 0.65 },
      height: { duration: 1 },
    },
  },
};

export const meta: Variants & { [key: string]: any } = {
  init: {
    bottom: [-30, -30, -30],
    height: [40, 40, 40],
    width: "70%",
    borderRadius: 0,
    "--mask":
      "radial-gradient(0px at 50% calc(100% - 0px), #000 99%, #0000 101%) calc(50% - 36px) 0/72px 100%, radial-gradient(0px at 50% calc(100% + 0px), #0000 99%, #000 101%) 50% calc(100% - 0px) / 72px 100% repeat-x",
  },
  anim: {
    bottom: [-30, 115, 70],
    height: [40, 70, 40],
    width: ["70%", "90%", "100%"],
    borderRadius: [0, 0, 50],
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    "--mask": [
      "radial-gradient(0px at 50% calc(100% - 0px), #000 99%, #0000 101%) calc(50% - 36px) 0/72px 100%, radial-gradient(0px at 50% calc(100% + 0px), #0000 99%, #000 101%) 50% calc(100% - 0px) / 72px 100% repeat-x",
      "radial-gradient(18px at 50% calc(100% - 18px), #000 99%, #0000 101%) calc(50% - 36px) 0/72px 100%, radial-gradient(18px at 50% calc(100% + 0px), #0000 99%, #000 101%) 50% calc(100% - 18px) / 72px 100% repeat-x",
      "radial-gradient(18px at 50% calc(100% - 18px), #000 99%, #0000 101%) calc(50% - 36px) 0/72px 100%, radial-gradient(18px at 50% calc(100% + 0px), #0000 99%, #000 101%) 50% calc(100% - 18px) / 72px 100% repeat-x",
      "radial-gradient(0px at 50% calc(100% - 0px), #000 99%, #0000 101%) calc(50% - 36px) 0/72px 100%, radial-gradient(0px at 50% calc(100% + 0px), #0000 99%, #000 101%) 50% calc(100% - 0px) / 72px 100% repeat-x",
    ],
    transition: {
      duration: 1.5,
      type: "tween",
      ease: [0.9, 0, 0.15, 0.6],
      "--mask": { delay: 0.2, duration: 0.65 },
      height: { duration: 0.9 },
    },
  },
};
