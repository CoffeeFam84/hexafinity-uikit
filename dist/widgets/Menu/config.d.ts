import { DropdownMenuItems } from "../../components/DropdownMenu/types";
import { LinkStatus } from "./types";
export declare const status: {
    LIVE: LinkStatus;
    SOON: LinkStatus;
    NEW: LinkStatus;
};
export declare const links: ({
    label: string;
    icon: string;
    href: string;
    items?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    calloutClass: string;
    href?: undefined;
})[];
export declare const socials: ({
    label: string;
    icon: string;
    items: {
        channel: {
            icon: string;
            label: string;
            href: string;
        };
        chats: {
            icon: string;
            label: string;
            href: string;
        }[];
    };
    href?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    items?: undefined;
})[];
export declare const HexaPriceLabel = "HEXA";
export declare const HexaPriceValue = 1234.947;
export declare const footerStatistic: {
    label: string;
    value: number;
}[];
export declare const aboutLinks: {
    label: string;
    href: string;
}[];
export declare const productLinks: {
    label: string;
    href: string;
}[];
export declare const serviceLinks: {
    label: string;
    href: string;
}[];
export declare const userMenulinks: DropdownMenuItems[];
export declare const MENU_HEIGHT = 64;
export declare const MENU_ENTRY_HEIGHT = 48;
export declare const SIDEBAR_WIDTH_FULL = 240;
export declare const SIDEBAR_WIDTH_REDUCED = 56;
