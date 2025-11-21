export type MenuItem = {
  label: string;
  href: string;
};

export interface BattlefieldSixMenuProps {
  menuItems: MenuItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export interface ContentWrapperProps {
  menuItems: MenuItem[];
}
