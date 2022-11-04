import React from "react";
import { HexaPriceProps, FooterStatisticProps } from "../../types";
interface Props extends HexaPriceProps, FooterStatisticProps {
    onClick: () => void;
    buyHexaLink: string;
}
declare const FooterInfo: React.FC<Props>;
export default FooterInfo;
