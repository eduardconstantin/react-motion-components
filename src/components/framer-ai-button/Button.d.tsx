import { ButtonHTMLAttributes } from "react";
import { MotionProps } from "framer-motion";

export type ButtonProps = {
  children?: string;
  hueValue?: number;
} & MotionProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
