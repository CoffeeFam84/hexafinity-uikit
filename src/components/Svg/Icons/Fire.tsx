import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M7.39371 2.09677C8.40066 0.322581 10.0885 0.0537634 10.8373 0C9.83028 1.77419 10.2176 3.54839 11.8442 5.8871C13.4708 8.22581 15.2523 10.9677 14.1679 15.3226C13.3004 18.8065 9.98524 19.8925 8.4361 20C11 18 10.8134 15.3226 7.11932 13.7903C2.5 16 4.5 19 6.11237 20C0.148152 18.5484 -0.00676221 13.4677 0.922727 10.0806C1.66632 7.37097 3.34971 5.94086 4.09846 5.56452C3.55626 7.33871 4.33084 9.43548 5.64761 9.19355C6.96439 8.95161 6.88692 7.58064 6.80946 6.77419L6.80705 6.74911C6.72741 5.92107 6.50943 3.65483 7.39371 2.09677Z"
        fill="#F93B5D"
      />
    </Svg>
  );
};

export default Icon;
