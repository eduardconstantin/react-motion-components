import { useRef, FC } from "react";
import { motion } from "framer-motion";
import { buttonAnim } from "./Button.anim";
import { ButtonProps, ButtonType } from "./Button.d";
import { useSquareData } from "./hooks";
import AnimatedSquares from "./components/AnimatedSquares";
import MapBackground from "./components/MapBackground";
import S from "./Button.module.css";

const Button: FC<ButtonProps> = ({
  children = "GO",
  randomBg = false,
  buttonType = "Default",
  buttonColor,
  size = 5,
  ...rest
}: ButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const squaresData = useSquareData(btnRef);

  document.documentElement.style.setProperty("--overlay", buttonColor || ButtonType[buttonType]);
  document.documentElement.style.setProperty("--size", size.toString());

  return (
    <motion.button
      {...rest}
      className={S.button}
      type="button"
      ref={btnRef}
      variants={buttonAnim}
      initial="init"
      animate="init"
      whileHover="anim"
      whileTap="tap"
    >
      <MapBackground random={randomBg} />
      <p className={S.label}>{children}</p>
      <AnimatedSquares squareData={squaresData} />
    </motion.button>
  );
};
export default Button;
