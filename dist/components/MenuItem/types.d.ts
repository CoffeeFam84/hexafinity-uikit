import { Colors } from "../../theme";
export declare type MenuItemVariant = "default" | "subMenu";
export interface MenuItemProps {
    isActive?: boolean;
    href?: string;
    variant?: MenuItemVariant;
    statusColor?: keyof Colors;
    showNavBadge?: boolean;
    children?: any;
}
export declare type StyledMenuItemProps = {
    $isActive?: boolean;
    $variant?: MenuItemVariant;
    $statusColor?: keyof Colors;
    showNavBadge?: boolean;
    children?: any;
};
