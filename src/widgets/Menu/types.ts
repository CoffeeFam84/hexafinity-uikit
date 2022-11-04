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
  extends PanelProps, HexaPriceProps, FooterAboutLinks, 
  FooterProductLinks, FooterServiceLinks, ConnectMetaProps, 
  FooterStatisticProps 
{
  buyHexaLink: string;
  account?: string;
  login: Login;
  logout: () => void;
  children: React.ReactNode;
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

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  hexaPriceUsd?: number;
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
  links: Array<MenuEntry>;
  linkComponent?: React.ElementType;
}