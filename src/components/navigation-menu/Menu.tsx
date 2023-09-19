import { useState, FC } from "react";
import MenuBar from "./components/MenuBar/MenuBar";
import { motion } from "framer-motion";
import { BsList, BsFillBootstrapFill } from "react-icons/bs";
import { MenuProps } from "./Menu.d";
import style from "./Menu.module.css";

const Menu: FC<MenuProps> = ({
  menuIcon = <BsList />,
  menuElements = defaultElements,
  tiltAngle = 5,
  menuSize = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <motion.div className={style.menuContainer}>
      <motion.button
        type="button"
        className={style.menuButton}
        onClick={toggleMenu}
        initial={{ translateZ: 0, rotateZ: 45 }}
        whileTap={{ translateZ: -60 }}
      >
        {menuIcon}
      </motion.button>
      <MenuBar isOpen={isOpen} menuElements={menuElements} angle={tiltAngle} menuSize={menuSize} />
    </motion.div>
  );
};

export default Menu;

const defaultElements = [
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element1",
    onClick: () => {},
  },
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element2",
    onClick: () => {},
  },
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element3",
    onClick: () => {},
  },
  {
    buttonIcon: <BsFillBootstrapFill />,
    buttonLabel: "element4",
    onClick: () => {},
  },
];
