import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { LinkStatus } from "./types";
export declare const status: {
    LIVE: LinkStatus;
    SOON: LinkStatus;
    NEW: LinkStatus;
};
export declare const links: ({
    label: string;
    href: string;
    hidden: boolean;
    showNavBadge?: undefined;
    items?: undefined;
    isExtended?: undefined;
    type?: undefined;
    showItemsOnMobile?: undefined;
    icon?: undefined;
    isMobileNav?: undefined;
} | {
    label: string;
    href: string;
    showNavBadge: boolean;
    items: ({
        label: string;
        href: string;
        leftIcon: string;
        description: string;
        badgeType: string;
        badgeTitle: string;
        rightIconFill?: undefined;
    } | {
        label: string;
        leftIcon: string;
        rightIconFill: string;
        description: string;
        href: string;
        badgeType?: undefined;
        badgeTitle?: undefined;
    } | {
        label: string;
        href: string;
        leftIcon: string;
        description: string;
        badgeType?: undefined;
        badgeTitle?: undefined;
        rightIconFill?: undefined;
    })[];
    hidden?: undefined;
    isExtended?: undefined;
    type?: undefined;
    showItemsOnMobile?: undefined;
    icon?: undefined;
    isMobileNav?: undefined;
} | {
    label: string;
    href: string;
    showNavBadge: boolean;
    items: ({
        label: string;
        href: string;
        leftIcon: string;
        description: string;
        badgeType?: undefined;
        badgeTitle?: undefined;
        type?: undefined;
        links?: undefined;
    } | {
        badgeType: string;
        badgeTitle: string;
        label: string;
        href: string;
        leftIcon: string;
        description: string;
        type: DropdownMenuItemType;
        links: {
            label: string;
            href: string;
            linkType: DropdownMenuItemType;
        }[];
    })[];
    hidden?: undefined;
    isExtended?: undefined;
    type?: undefined;
    showItemsOnMobile?: undefined;
    icon?: undefined;
    isMobileNav?: undefined;
} | {
    label: string;
    href: string;
    items: ({
        label: string;
        href: string;
        leftIcon: string;
        description: string;
        target: string;
        mobileTarget: string;
    } | {
        label: string;
        href: string;
        leftIcon: string;
        description: string;
        target?: undefined;
        mobileTarget?: undefined;
    })[];
    hidden?: undefined;
    showNavBadge?: undefined;
    isExtended?: undefined;
    type?: undefined;
    showItemsOnMobile?: undefined;
    icon?: undefined;
    isMobileNav?: undefined;
} | {
    label: string;
    href: string;
    showNavBadge: boolean;
    items: ({
        label: string;
        href: string;
        leftIcon: string;
        description: string;
        type: DropdownMenuItemType;
        target: string;
        mobileTarget: string;
        bannerRenderer?: undefined;
    } | {
        type: DropdownMenuItemType;
        bannerRenderer: (href?: string, target?: string) => JSX.Element;
        href: string;
        label?: undefined;
        leftIcon?: undefined;
        description?: undefined;
        target?: undefined;
        mobileTarget?: undefined;
    })[];
    hidden?: undefined;
    isExtended?: undefined;
    type?: undefined;
    showItemsOnMobile?: undefined;
    icon?: undefined;
    isMobileNav?: undefined;
} | {
    label: string;
    isExtended: boolean;
    items: ({
        label: string;
        leftIcon: string;
        href: string;
        description: string;
        type?: undefined;
    } | {
        label: string;
        leftIcon: string;
        href: string;
        description: string;
        type: DropdownMenuItemType;
    })[];
    href?: undefined;
    hidden?: undefined;
    showNavBadge?: undefined;
    type?: undefined;
    showItemsOnMobile?: undefined;
    icon?: undefined;
    isMobileNav?: undefined;
} | {
    type: "DIVIDER";
    showItemsOnMobile: boolean;
    label?: undefined;
    href?: undefined;
    hidden?: undefined;
    showNavBadge?: undefined;
    items?: undefined;
    isExtended?: undefined;
    icon?: undefined;
    isMobileNav?: undefined;
} | {
    label: string;
    href: string;
    icon: string;
    isMobileNav: boolean;
    showItemsOnMobile: boolean;
    items: {
        label: string;
        href: string;
        leftIcon: string;
        description: string;
        type: DropdownMenuItemType;
    }[];
    hidden?: undefined;
    showNavBadge?: undefined;
    isExtended?: undefined;
    type?: undefined;
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
export declare const TOP_BANNER_HEIGHT = 70;
export declare const TOP_BANNER_HEIGHT_MOBILE = 84;
export declare const MOBILE_EVENT_BUTTON_HEIGHT = 40;
