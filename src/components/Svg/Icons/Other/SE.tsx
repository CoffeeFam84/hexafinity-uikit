import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g clipPath="url(#clip0_1754_20593)">
        <circle cx="11.9989" cy="12" r="12" fill="#1EBB95" />
        <path
          d="M9.30241 23.6954L12.9011 11.1V7.49999L15.2525 0.445679C20.3002 1.86321 24.0011 6.49941 24.0011 12C24.0011 18.6274 18.6285 24 12.0011 24C11.0732 24 10.1698 23.8947 9.30241 23.6954Z"
          fill="#FF1C5E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.6819 0.301025L4.80005 14.7771H10.9715L8.64874 23.5261C9.00461 23.6294 9.3673 23.7166 9.73598 23.787L19.6115 9.83993H13.4401L15.7685 0.603966C15.4133 0.48656 15.0509 0.38529 14.6819 0.301025Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1754_20593">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
