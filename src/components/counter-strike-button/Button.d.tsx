import { ButtonHTMLAttributes } from "react";
import { MotionProps } from "framer-motion";

export enum ButtonType {
  Default = "transparent",
  Success = "#55df15",
  Danger = "#C31C1C",
  Info = "#15c1df",
  Warning = "#dfcb15",
}

export type ButtonProps = {
  children?: string;
  randomBg?: boolean;
  buttonColor?: string;
  buttonType?: keyof typeof ButtonType;
  size?: number;
} & MotionProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type SquareProps = {
  dur: number;
  del: number;
  op: number;
};

export type SquareDataProps = {
  size: number;
  squares: SquareProps[];
};
