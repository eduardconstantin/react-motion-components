import { FC, MouseEvent } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import MenuLink from "../MenuLink/MenuLink";
import { menuAnim } from "./Menu.anim";
import { MenuBarProps, MenuClasses } from "./MenuBar.d";
import style from "./MenuBar.module.css";

const MenuBar: FC<MenuBarProps> = ({ menuElements, menuSize = null, isOpen = false, angle = 5 }) => {
  const noOfElements = menuElements.length;
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [0, 800], [-angle, angle]);

  const handleMouse = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
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
