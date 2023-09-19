import { useState } from "react";
import MenuBar from "./components/MenuBar/MenuBar";
import { motion } from "framer-motion";
import { BsList, BsFillBootstrapFill } from "react-icons/bs";
import style from "./Menu.module.css";

const Menu = ({ menuIcon, menuElements, tiltAngle, menuSize }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className={style.menuContainer}>
      <motion.button
        type="button"
        className={style.menuButton}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
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

Menu.defaultProps = {
  menuIcon: <BsList />,
  menuSize: null,
  tiltAngle: 5,
  menuElements: defaultElements,
};
