import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  text?: string;
  buttonColor?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;
