import { motion } from "framer-motion";
import { squaresAnim } from "../Button.anim";
import { SquareDataProps } from "../Button.d";
import S from "../Button.module.css";

const AnimatedSquares = ({ squareData }: { squareData: SquareDataProps }) => {
  const { size, squares } = squareData;

  return (
    <div className={S.squaresContainer}>
      {squares &&
        squares.map((el, i) => (
          <motion.div
            key={i}
            className={S.square}
            variants={squaresAnim}
            initial="init"
            animate="anim"
            custom={{ dur: el.dur, del: el.del, op: el.op }}
            style={{
              width: size,
              height: size,
            }}
          />
        ))}
    </div>
  );
};

export default AnimatedSquares;
