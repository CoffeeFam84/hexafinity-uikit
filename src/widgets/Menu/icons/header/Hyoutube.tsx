import React from "react";
import Svg from "../../../../components/Svg/Svg";
import { SvgProps } from "../../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 8C20 8 20 4.28 19.543 2.498C19.292 1.516 18.55 0.742 17.605 0.476C15.896 0 10 0 10 0C10 0 4.107 0 2.395 0.476C1.454 0.738 0.711 1.513 0.457 2.498C0 4.28 0 8 0 8C0 8 0 11.72 0.457 13.502C0.708 14.484 1.45 15.258 2.395 15.524C4.107 16 10 16 10 16C10 16 15.896 16 17.605 15.524C18.546 15.262 19.289 14.487 19.543 13.502C20 11.72 20 8 20 8ZM8 11V5L13 8L8 11Z" fill="#070913" />
    </Svg>
  );
};

export default Icon;
