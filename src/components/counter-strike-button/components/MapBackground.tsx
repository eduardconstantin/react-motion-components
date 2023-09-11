import { RANDOM_INT } from "../../helpers";
import S from "../Button.module.css";

const MapBackground = ({ random }: { random: boolean }) => {
  return (
    <svg className={S.background}>
      <filter id="filter">
        <feTurbulence baseFrequency="0.007" numOctaves="2" seed={random ? RANDOM_INT(0, 99999).toString() : "11"} />
        <feComponentTransfer>
          <feFuncA type="discrete" tableValues="1 0 1 0 1 0 1 0 1 0" />
        </feComponentTransfer>
        <feConvolveMatrix kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1" />
        <feColorMatrix
          values="1 1 1 0 0
            1 1 1 0 0
            1 1 1 0 0
            0 0 0 0.1 0"
        />
        <feMorphology operator="dilate" radius="1" />
      </filter>
      <rect width="100%" height="100%" filter="url(#filter)" />
    </svg>
  );
};

export default MapBackground;
