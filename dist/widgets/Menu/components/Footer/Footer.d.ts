import React from "react";
import { HexaPriceProps, FooterStatisticProps, FooterAboutLinks, FooterProductLinks, FooterServiceLinks } from "../../types";
interface Props extends HexaPriceProps, FooterStatisticProps, FooterAboutLinks, FooterProductLinks, FooterServiceLinks {
    onClick: () => void;
    buyHexaLink: string;
}
declare const Footer: React.FC<Props>;
export default Footer;
