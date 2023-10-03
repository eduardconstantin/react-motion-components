import { useState, FC } from "react";
import { Props } from "./DynamicMenu.d";
import * as S from "./DynamicMenu.styles";
import * as anim from "./DynamicMenu.anim";

const DynamicMenu: FC<Props> = ({ menuName = "Dynamic Menu", menuItems, openDirection = "down" }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        <S.MenuContent variants={anim.menuContainer} custom={[menuItems.length, openDirection]} data-testid="menu">
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
export default DynamicMenu;
