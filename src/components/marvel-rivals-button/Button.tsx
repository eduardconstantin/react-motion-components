import { FC } from "react";
import { ButtonProps } from "./Button.d";
import S from "./Button.module.css";

const Button: FC<ButtonProps> = ({ text = "JOIN NOW", buttonColor = 0 }) => {
  return (
    <button className={S.button} style={{ filter: `hue-rotate(${buttonColor}deg)` }}>
      <div />
      {text}
    </button>
  );
};
export default Button;
