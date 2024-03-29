import { FC, MouseEvent, useState, useMemo } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import MenuLink from "../MenuLink/MenuLink";
import { menuAnim } from "./MenuBar.anim";
import { MenuBarProps, MenuClasses } from "./MenuBar.d";
import style from "./MenuBar.module.css";

const MenuBar: FC<MenuBarProps> = ({ menuElements, menuSize, isOpen = false, angle }) => {
  const noOfElements = useMemo(() => {
    return menuElements.length;
  }, [menuElements]);

  const [width, setWidth] = useState<number>(0);
  const x = useMotionValue<number>(width / 2);
  const rotateY = useTransform<unknown, number>(x, [0, width], [-angle / 2, angle / 2]);

  const handleMouse = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setWidth(rect.width);
    x.set(event.clientX - rect.left);
  };

  const menuClasses: MenuClasses = {
    2: style.menuSmall,
    4: style.menuMedium,
    6: style.menuLarge,
    8: style.menuXlarge,
  };

  const addMiddleGap = (index: number, length: number) => {
    if (index === Math.floor((length - 1) / 2)) {
      return style.leftElement;
    } else if (index === Math.ceil((length - 1) / 2)) {
      return style.rightElement;
    }
  };

  return (
    <motion.div
      className={`${style.menuWrapper} ${menuClasses[menuSize || noOfElements]}`}
      variants={menuAnim}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      onMouseMove={handleMouse}
      data-testid="nav-bar"
      style={{ rotateY: rotateY }}
    >
      <ul className={style.menuList}>
        {menuElements.map((el, i) => {
          return (
            <li key={el.buttonLabel} className={addMiddleGap(i, noOfElements)}>
              <MenuLink buttonIcon={el.buttonIcon} buttonLabel={el.buttonLabel} onClick={el.onClick} />
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default MenuBar;
