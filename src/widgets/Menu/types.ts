import { ElementType, ReactElement, ReactNode } from "react";
import { MenuItemsType } from "../../components/MenuItems/types";
import { SubMenuItemsType } from "../../components/SubMenuItems/types";
import { Colors } from "../../theme/types";
import { Login } from "../WalletModal/types";

export interface Language {
  code: string;
  language: string;
  locale: string;
}

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface LinkStatus {
  text: string;
  color: keyof Colors;
}

export interface NavProps 
  extends HexaPriceProps, FooterAboutLinks, 
  FooterProductLinks, FooterServiceLinks, ConnectMetaProps, 
  FooterStatisticProps 
{
  buyHexaLink: string;
  networkChangeToBSC?: any;
  currentNetwork?: any;
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
  //---------
  linkComponent?: ElementType;
  userMenu?: ReactElement;
  banner?: ReactElement;
  globalMenu?: ReactElement;
  links: Array<MenuItemsType>;
  subLinks: Array<SubMenuItemsType>;
  activeItem: string;
  activeSubItem: string;
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  hexaPriceUsd?: number;
  currentLang: string;
  buyHexaLabel: string;
  setLang: (lang: Language) => void;
  pendingTransactions?: number;
  recentTransaction?: any;
  chainId?: any;
  clearTransaction?: any;
  isSwap?: boolean;
  transactionsForUIKit?: any;
  //---------
  withEvent?: boolean;
  eventCallback?: () => void;
  children?: ReactNode;
  eventButtonLogo?: () => JSX.Element;
}

export interface FooterStatisticProps {
  footerStatistic: Array<FooterStatisticItem>;
}

export interface FooterStatisticItem {
  label: string;
  value: number | string;
}

export interface ConnectMetaProps {
  onClick: () => void;
}

export interface HexaPriceProps {
  HexaPriceLabel: string;
  HexaPriceValue: number;
}

export interface FooterAboutLinks {
  aboutLinks: Array<FooterNavItem>;
}

export interface FooterProductLinks {
  productLinks: Array<FooterNavItem>;
}

export interface FooterServiceLinks {
  serviceLinks: Array<FooterNavItem>;
}

export interface FooterNavItem {
  label: string;
  href: string;
  target?: string;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}

export interface LangType {
  code: string;
  language: string;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
}

export interface MenuEntry {
  label: string;
  icon: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
}
