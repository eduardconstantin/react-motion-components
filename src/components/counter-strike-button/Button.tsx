import { useRef, useEffect, useState } from "react";
import S from "./Button.module.css";

export const Button = () => {
  const btnRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);
  const [no, setNo] = useState(0);

  useEffect(() => {
    if (btnRef.current) {
      setSize(btnRef.current.getBoundingClientRect().height / 3);
      setNo(
        Math.floor(
          (btnRef.current.getBoundingClientRect().width / (btnRef.current.getBoundingClientRect().height / 3)) * 3
        )
      );
    }
  }, []);

  return (
    <button className={S.btn}>
      <div className={S.current} ref={btnRef}>
        <p>GO</p>
        <div className={S.sContainer}>
          {new Array(no).fill(null).map((_, i) => (
            <div
              key={i}
              className={S.square}
              style={{
                width: size - 1,
                height: size - 1,
                animation: `${S.fade} ${4 - Math.random() * 2}s infinite ease ${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </button>
  );
};
