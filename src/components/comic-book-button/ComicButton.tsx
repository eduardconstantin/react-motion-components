import { useState } from "react";
import { motion } from "framer-motion";
import { buttonAnim, clickAnim } from "./ComicButton.anim";
import { RANDOM_INT } from "../helpers";
import { ComicButtonProps } from "./ComicButton.d";
import style from "./ComicButton.module.css";

export default function ComicButton({ buttonName, hoverBtnName, btnClassName, handleButtonClick }: ComicButtonProps) {
  const [btnName, setBtnName] = useState(buttonName);

  return (
    <motion.button
      type="button"
      className={style.btn + " " + btnClassName}
      initial="init"
      animate="init"
      whileHover="hover"
      whileTap="tap"
      whileFocus="focus"
      variants={buttonAnim}
      custom={RANDOM_INT(6, 12)}
      onMouseEnter={() => setBtnName(hoverBtnName)}
      onMouseLeave={() => setBtnName(buttonName)}
      onClick={handleButtonClick}
    >
      {btnName}
      <motion.div className={style.click} variants={clickAnim} custom={RANDOM_INT(-50, 50)}></motion.div>
    </motion.button>
  );
}

ComicButton.defaultProps = {
  buttonName: "BUTTON",
  hoverBtnName: "BUTTON",
};
