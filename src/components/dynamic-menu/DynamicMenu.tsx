import { useState } from "react";
import * as S from "./DynamicMenu.styles";
import * as anim from "./DynamicMenu.anim";

export const DynamicMenu = ({ menuName = "Dynamic Menu", menuItems, openDirection = "down" }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.MenuContainer openDirection={openDirection}>
      <S.MenuWrapper
        openDirection={openDirection}
        variants={anim.menuWrapper}
        initial="initial"
        animate={isOpen ? "click" : "initial"}
        custom={menuItems.length}
      >
        <S.MenuButton onClick={() => setIsOpen(!isOpen)}>{menuName}</S.MenuButton>
        <S.MenuContent variants={anim.menuContainer} custom={[menuItems.length, openDirection]}>
          {menuItems.map((item: JSX.Element, i: number) => {
            return (
              <S.MenuContentItem key={`key${i}`} variants={anim.item}>
                {item}
              </S.MenuContentItem>
            );
          })}
        </S.MenuContent>
      </S.MenuWrapper>
    </S.MenuContainer>
  );
};

type Props = {
  menuName?: string;
  menuItems: JSX.Element[];
  openDirection?: "up" | "down";
};
