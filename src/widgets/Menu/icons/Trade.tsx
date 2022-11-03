import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M3 17L6 14M19 17H3H19ZM3 17L6 20L3 17Z" stroke="white" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M21 7L18 10M5 7H21H5ZM21 7L18 4L21 7Z" stroke="white" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
};

export default Icon;
