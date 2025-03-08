import { FC } from "react";
import S from "./Button.module.css";

const Button: FC = () => {
  return (
    <button className={S.button}>
      <div />
      JOIN NOW
    </button>
  );
};
export default Button;
