import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { buttonAnim, squaresAnim } from "./Button.anim";
import S from "./Button.module.css";

type ButtonProps = {
  children?: string;
};

const GenerateSquares = (no: number, size: number) => {
  return Array(no)
    .fill(null)
    .map((_, i) => (
      <motion.div
        key={i}
        className={S.square}
        variants={squaresAnim}
        initial="init"
        animate="anim"
        custom={{ i: 3.5 - Math.random() * 2, j: Math.random() * 3, k: 1 - Math.random() * 0.5 }}
        style={{
          width: size,
          height: size,
        }}
      />
    ));
};

export const Button = ({ children = "GO" }: ButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [dimensions, setDimensions] = useState<{ size?: number; no?: number }>({});

  useLayoutEffect(() => {
    const currentRef = btnRef.current;
    if (!currentRef) return;

    const { height, width } = currentRef.getBoundingClientRect();
    const squareSize = height / 3;
    const noOfSquares = Math.floor((width / squareSize) * 3);
    setDimensions({ size: squareSize, no: noOfSquares });
  }, [btnRef.current]);

  return (
    <motion.button
      className={S.button}
      ref={btnRef}
      variants={buttonAnim}
      initial="init"
      animate="init"
      whileHover="anim"
      whileTap="tap"
    >
      <svg className={S.background}>
        <filter id="filter">
          <feTurbulence baseFrequency="0.006" numOctaves="2" seed="11" />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="1 0 1 0 1 0 1 0 1 0" />
          </feComponentTransfer>
          <feConvolveMatrix kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1" />
          <feColorMatrix
            values="0 0 0 0 0
                    1 1 0 0 0
                    0 0 0 0 0
                    0 0 0 0.15 0"
          />
          <feMorphology operator="dilate" radius="1" />
        </filter>
        <rect width="100%" height="100%" filter="url(#filter)" />
      </svg>
      <p className={S.label}>{children}</p>
      <div className={S.squaresContainer}>{GenerateSquares(dimensions.no!, dimensions.size! - 1)}</div>
    </motion.button>
  );
};
