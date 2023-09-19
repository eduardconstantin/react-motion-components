import { ReactNode } from "react";

export type MenuElement = {
  buttonIcon: ReactNode;
  buttonLabel: string;
  onClick: () => void;
};

export type MenuProps = {
  menuIcon: ReactNode;
  menuElements: MenuElement[];
  tiltAngle: number;
  menuSize: number | null;
};
