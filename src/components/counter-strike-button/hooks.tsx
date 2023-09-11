import { useEffect, useState, RefObject } from "react";
import { RANDOM_DECIMAL } from "../helpers";
import { SquareDataProps } from "./Button.d";

export const useSquareData = (btnRef: RefObject<HTMLButtonElement>) => {
  const [squareData, setSquareData] = useState<SquareDataProps>({ size: 0, squares: [] });

  useEffect(() => {
    const currentRef = btnRef.current;

    if (!currentRef) return;

    const { height, width } = currentRef.getBoundingClientRect();
    const squareSize = height / 3;
    const noOfSquares = Math.floor((width / squareSize) * 3);
    const squaresArray = Array(noOfSquares)
      .fill(null)
      .map(() => ({
        dur: RANDOM_DECIMAL(1, 2),
        del: RANDOM_DECIMAL(0.5, 1.5),
        op: RANDOM_DECIMAL(0.3, 1),
      }));

    setSquareData({ size: squareSize - 1, squares: squaresArray });
  }, [btnRef]);

  return squareData;
};
