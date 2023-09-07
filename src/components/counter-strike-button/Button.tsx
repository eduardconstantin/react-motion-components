import { useRef, useLayoutEffect, useState } from "react";
import S from "./Button.module.css";

type ButtonProps = {
  label?: string;
};

export const Button = ({ label = "GO" }: ButtonProps) => {
  const btnRef = useRef<HTMLDivElement>(null);
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
    <button className={S.btn}>
      <div className={S.current} ref={btnRef}>
        <p>{label}</p>
        <div className={S.sContainer}>
          <svg className={S.btnBackground}>
            <filter id="filter">
              <feTurbulence baseFrequency="0.004" numOctaves="3" seed="13" />
              <feComponentTransfer>
                <feFuncA type="discrete" tableValues="1 0 1 0 1 0 1 0 1 0" />
              </feComponentTransfer>
              <feConvolveMatrix kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1" />
              <feColorMatrix
                values="0 0 0 0 0
                      1 1 1 1 0
                      0 0 0 0 0
                      0 0 0 1 0"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#filter)" />
          </svg>
          {new Array(dimensions.no).fill(null).map((_, i) => (
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
      </div>
    </button>
  );
};
