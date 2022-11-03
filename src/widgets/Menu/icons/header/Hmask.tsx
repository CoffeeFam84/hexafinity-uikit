import React from "react";
import Svg from "../../../../components/Svg/Svg";
import { SvgProps } from "../../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <rect width="50" height="50" rx="12" fill="#11A9FF" />
    </Svg>
  );
};

export default Icon;
