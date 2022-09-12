import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <g clip-path="url(#clip0_6953_35583)">
      <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white"/>
      <path d="M19.2766 8.99931L18.7503 7.57545L19.1163 6.75807C19.1393 6.7065 19.1462 6.64922 19.1359 6.59373C19.1257 6.53824 19.0988 6.48712 19.0589 6.44708L18.0638 5.44502C17.8501 5.22908 17.5793 5.07803 17.2828 5.00947C16.9864 4.94092 16.6765 4.95767 16.3892 5.05777L16.1105 5.15429L14.5902 3.51357L12.0114 3.49927H11.9946L9.39906 3.51952L7.87998 5.17335L7.60966 5.07803C7.32052 4.97674 7.00837 4.95971 6.70985 5.02893C6.41134 5.09815 6.13883 5.25076 5.92432 5.46885L4.91121 6.48998C4.87941 6.52189 4.85806 6.56265 4.84994 6.60688C4.84183 6.65111 4.84735 6.69676 4.86576 6.73781L5.24732 7.58617L4.72342 9.00884L5.06192 10.2921L6.60611 16.1401C6.78401 16.8137 7.19328 17.404 7.76276 17.8082C7.76276 17.8082 9.63708 19.1248 11.4863 20.3211C11.6325 20.4374 11.8141 20.5008 12.0012 20.5008C12.1883 20.5008 12.3699 20.4374 12.5161 20.3211C14.5938 18.9652 16.2373 17.8034 16.2373 17.8034C16.8063 17.399 17.2151 16.8088 17.3927 16.1353L18.9286 10.285L19.2766 8.99931Z" fill="url(#paint0_linear_6953_35583)"/>
      <path d="M12.4253 14.0383C12.3269 13.9944 12.2253 13.9578 12.1215 13.9287H11.9385C11.8347 13.9578 11.7331 13.9944 11.6347 14.0383L11.1742 14.229C11.0283 14.2897 10.7938 14.3982 10.6539 14.4673L9.80702 14.9069C9.77635 14.9169 9.74936 14.9357 9.72953 14.961C9.7097 14.9863 9.69793 15.017 9.69575 15.049C9.69356 15.0811 9.70105 15.113 9.71726 15.1408C9.73347 15.1686 9.75765 15.1909 9.78668 15.2048L10.5223 15.7219C10.6515 15.8125 10.8548 15.9722 10.9744 16.0794L11.1814 16.2569C11.301 16.3594 11.4959 16.5298 11.6144 16.6346L11.8105 16.8074C11.8711 16.8577 11.9475 16.8853 12.0264 16.8853C12.1053 16.8853 12.1817 16.8577 12.2423 16.8074L12.4481 16.6287L12.881 16.2522L13.0892 16.0711C13.2088 15.9674 13.4109 15.8077 13.5401 15.7136L14.2757 15.1893C14.3048 15.1754 14.329 15.1531 14.3452 15.1252C14.3613 15.0974 14.3686 15.0653 14.3662 15.0333C14.3637 15.0012 14.3516 14.9706 14.3314 14.9455C14.3112 14.9204 14.2839 14.902 14.253 14.8926L13.4073 14.4649C13.2662 14.3934 13.0318 14.2862 12.8846 14.2266L12.4253 14.0383Z" fill="white"/>
      <path d="M17.6404 9.31747L17.6643 9.24121C17.6657 9.1392 17.6593 9.03723 17.6452 8.93618C17.574 8.7557 17.4825 8.58382 17.3725 8.42383L16.894 7.72441C16.8055 7.59334 16.6548 7.38602 16.5531 7.26329L15.912 6.46379C15.8535 6.38586 15.79 6.31183 15.7218 6.24216H15.7087C15.7087 6.24216 15.5795 6.2648 15.424 6.29459L14.4444 6.48285L14.015 6.56507C13.8724 6.57174 13.7299 6.55111 13.5951 6.5043L12.8212 6.25527C12.6705 6.20642 12.4217 6.13612 12.2674 6.10276C12.1048 6.08554 11.9408 6.08554 11.7782 6.10276C11.6239 6.1385 11.3751 6.20761 11.2244 6.25646L10.4505 6.50668C10.3158 6.55349 10.1732 6.57412 10.0307 6.56745L9.60127 6.48642L8.62045 6.29936C8.46495 6.26957 8.33697 6.24574 8.33577 6.24693H8.32262C8.25444 6.3166 8.19091 6.39063 8.13243 6.46855L7.49251 7.26806C7.39443 7.38721 7.24013 7.5993 7.15161 7.72918L6.67317 8.4286C6.59053 8.54921 6.51505 8.67454 6.4471 8.80393C6.40611 8.94821 6.38439 9.09724 6.38251 9.24717L6.40643 9.32343C6.41795 9.37241 6.43273 9.42058 6.45069 9.4676C6.54997 9.58675 6.71981 9.78455 6.82866 9.90012L8.50323 11.6731C8.55882 11.7377 8.59602 11.8161 8.61095 11.8999C8.62589 11.9837 8.61802 12.0699 8.58815 12.1497L8.31424 12.7967C8.25196 12.9681 8.24734 13.1551 8.30109 13.3293L8.35611 13.4794C8.44601 13.7233 8.60011 13.9385 8.80226 14.1026L9.06541 14.3159C9.13377 14.365 9.21353 14.396 9.29722 14.406C9.38091 14.416 9.46577 14.4047 9.54386 14.3731L10.4792 13.9286C10.6509 13.843 10.8116 13.737 10.9577 13.6129L11.7064 12.9397C11.7363 12.9129 11.7604 12.8803 11.7774 12.8441C11.7943 12.8078 11.8038 12.7685 11.8053 12.7285C11.8067 12.6885 11.8001 12.6486 11.7858 12.6112C11.7715 12.5738 11.7498 12.5396 11.722 12.5107L10.0319 11.3764C9.96788 11.3312 9.9223 11.2646 9.90342 11.1887C9.88455 11.1128 9.89363 11.0327 9.92901 10.963L10.5845 9.73569C10.6218 9.66056 10.6438 9.57885 10.6493 9.49523C10.6549 9.41161 10.6438 9.32772 10.6168 9.24836C10.5354 9.09698 10.404 8.97828 10.2448 8.91235L8.18985 8.13906C8.04153 8.08306 8.0499 8.01991 8.20659 8.01038L9.41348 7.89122C9.60273 7.87924 9.79271 7.89611 9.97685 7.94127L11.027 8.23319C11.1016 8.25558 11.1655 8.30414 11.2068 8.36987C11.2482 8.4356 11.2642 8.51404 11.2519 8.59064L10.8393 10.8355C10.8117 10.9598 10.8048 11.0878 10.8189 11.2144C10.8357 11.268 10.9768 11.3335 11.1311 11.3716L11.771 11.5075C11.9569 11.5415 12.1474 11.5415 12.3332 11.5075L12.9085 11.3776C13.0628 11.3431 13.2028 11.2704 13.2207 11.2168C13.2345 11.0901 13.2272 10.9621 13.1992 10.8378L12.7841 8.59303C12.7719 8.51643 12.7879 8.43799 12.8292 8.37226C12.8706 8.30652 12.9345 8.25796 13.009 8.23557L14.0592 7.94246C14.2433 7.89728 14.4333 7.88041 14.6226 7.89242L15.8295 8.00442C15.9874 8.01872 15.9945 8.0771 15.8474 8.1331L13.7937 8.90878C13.6345 8.97471 13.5031 9.09341 13.4217 9.24479C13.3672 9.40508 13.3788 9.58035 13.454 9.73212L14.1106 10.9594C14.146 11.0292 14.1551 11.1093 14.1362 11.1851C14.1174 11.261 14.0718 11.3276 14.0078 11.3728L12.3189 12.5095C12.2911 12.5384 12.2694 12.5726 12.255 12.61C12.2407 12.6474 12.2341 12.6873 12.2356 12.7273C12.237 12.7673 12.2465 12.8066 12.2635 12.8429C12.2805 12.8792 12.3046 12.9117 12.3344 12.9385L13.0844 13.6117C13.2305 13.7354 13.3912 13.841 13.5628 13.9263L14.4982 14.3695C14.5764 14.4009 14.6613 14.4121 14.745 14.4019C14.8287 14.3917 14.9084 14.3604 14.9766 14.3111L15.2398 14.0966C15.4421 13.9323 15.5963 13.7166 15.6859 13.4723L15.741 13.3222C15.7947 13.1479 15.7901 12.961 15.7278 12.7896L15.4527 12.1426C15.4228 12.0628 15.415 11.9765 15.4299 11.8927C15.4448 11.8089 15.482 11.7306 15.5376 11.666L17.2122 9.89059C17.321 9.77144 17.4897 9.5808 17.589 9.45807C17.6092 9.41239 17.6264 9.36542 17.6404 9.31747Z" fill="white"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_6953_35583" x1="4.7282" y1="12.0007" x2="19.2718" y2="12.0007" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F1562B"/>
      <stop offset="0.3" stop-color="#F1542B"/>
      <stop offset="0.41" stop-color="#F04D2A"/>
      <stop offset="0.49" stop-color="#EF4229"/>
      <stop offset="0.5" stop-color="#EF4029"/>
      <stop offset="0.56" stop-color="#E83E28"/>
      <stop offset="0.67" stop-color="#E13C26"/>
      <stop offset="1" stop-color="#DF3C26"/>
      </linearGradient>
      <clipPath id="clip0_6953_35583">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
