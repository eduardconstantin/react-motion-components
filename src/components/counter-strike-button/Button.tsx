import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import S from "./Button.module.css";

type ButtonProps = {
  children?: string;
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
    <button className={S.button} ref={btnRef}>
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
      <div className={S.squaresContainer}>
        {Array(dimensions.no)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className={S.square}
              style={{
                width: dimensions.size! - 1,
                height: dimensions.size! - 1,
                animation: `${S.fade} ${4 - Math.random() * 2}s infinite ease ${Math.random() * 3}s`,
              }}
            ></div>
          ))}
      </div>
    </button>
  );
};
