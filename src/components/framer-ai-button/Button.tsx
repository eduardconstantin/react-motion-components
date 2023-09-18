import { useState, FC } from "react";
import { motion } from "framer-motion";
import { buttonAnim, highlightContainerAnim, highlightAnim, labelAnim } from "./Button.anim";
import Sparkles from "./components/Sparkles";
import Stars from "./components/Stars";
import { ButtonProps } from "./Button.d";
import S from "./Button.module.css";

const Button: FC<ButtonProps> = ({ children = "Button Text", hueValue = 0, ...rest }: ButtonProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const [sparkles] = useState<number[]>(Array(30).fill(0));

  return (
    <div style={{ position: "relative" }}>
      <Sparkles sparkles={sparkles} hover={hover} />
      <motion.button
        {...rest}
        variants={buttonAnim}
        initial="init"
        animate={hover ? "anim" : "init"}
        whileTap="tap"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className={S.btn}
        type="button"
        style={{ filter: `hue-rotate(${hueValue}deg)` }}
      >
        <motion.div
          data-testid="highlight"
          variants={highlightContainerAnim}
          className={S.highlightContainer}
          animate={hover ? "anim" : "init"}
        >
          <motion.div variants={highlightAnim} className={S.highlight}></motion.div>
        </motion.div>
        <Stars hover={hover} />
        <motion.span variants={labelAnim}>{children}</motion.span>
      </motion.button>
    </div>
  );
};

export default Button;
