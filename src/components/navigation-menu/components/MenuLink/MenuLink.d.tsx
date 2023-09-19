import { ReactNode } from "react";

export type MenuLinkProps = {
  buttonIcon?: ReactNode;
  buttonLabel?: string;
  onClick?: () => void;
};
