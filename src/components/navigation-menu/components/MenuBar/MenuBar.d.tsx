import { MenuElement } from "../../Menu.d";

export type MenuBarProps = {
  menuElements: MenuElement[];
  menuSize: number | null;
  isOpen?: boolean;
  angle: number;
};

export type MenuClasses = {
  [key: number]: string;
};
