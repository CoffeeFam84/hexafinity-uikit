import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#1263F1" />
      <path
        opacity="0.48"
        d="M26.3248 10.1614C25.7775 9.64629 25.077 9.39893 24.371 9.39893C23.5763 9.39893 22.7738 9.71225 22.1754 10.3114L21.9186 10.5682L21.6618 10.3106C21.0634 9.71225 20.2609 9.39893 19.4662 9.39893C18.7602 9.39893 18.0598 9.64629 17.5124 10.1614C16.3086 11.2946 16.2874 13.1902 17.448 14.3509L21.9186 18.8215L26.3892 14.3509C27.5498 13.1902 27.5286 11.2946 26.3248 10.1614Z"
        fill="white"
      />
      <path
        d="M30.7129 21.0978C30.0258 20.6321 29.2161 20.764 28.4992 21.1779C27.7822 21.5917 23.6658 25.1113 23.6658 25.1113L19.6138 25.1121C19.4253 25.1121 19.2212 24.9001 19.2212 24.7124C19.2212 24.4917 19.4135 24.3197 19.6138 24.3197H22.0929C22.9606 24.3197 23.932 23.7543 23.932 22.7492C23.932 21.6812 22.9606 21.1786 22.0929 21.1786C20.5875 21.1786 20.2946 21.1849 20.2946 21.1849C19.6915 21.1849 19.0798 21.1488 18.6086 20.8967C17.9804 20.5748 17.2564 20.3926 16.4837 20.3926C15.1864 20.3926 14.025 20.9101 13.2287 21.726L9 25.8895L13.7117 30.6012L15.2822 29.0306H23.2347C24.0263 29.0306 24.7903 28.7401 25.3816 28.2147L30.7663 22.1744C31.0953 21.8822 31.0765 21.3451 30.7129 21.0978Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
