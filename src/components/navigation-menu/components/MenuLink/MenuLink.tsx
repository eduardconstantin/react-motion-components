import { FC } from "react";
import { motion } from "framer-motion";
import { iconAnim, labelAnim } from "./MenuLink.anim";
import { GoGlobe } from "react-icons/go";
import { MenuLinkProps } from "./MenuLink.d";
import style from "./MenuLink.module.css";

const MenuLink: FC<MenuLinkProps> = ({ buttonIcon = <GoGlobe />, buttonLabel = "Default", onClick = () => {} }) => {
  return (
    <motion.button
      initial="initial"
      animate="initial"
      whileHover="hover"
      type="button"
      className={style.listButton}
      onClick={onClick}
    >
      <motion.div variants={iconAnim}>{buttonIcon}</motion.div>
      <motion.p variants={labelAnim}>{buttonLabel.toUpperCase()}</motion.p>
    </motion.button>
  );
};

export default MenuLink;
