import React, { useEffect, useRef, useState } from "react";
import styled, { DefaultTheme } from "styled-components";
import throttle from "lodash/throttle";


// components
import Logo from "./components/Logo";
import Flex from "../../components/Box/Flex";
import UserBlock from "./components/UserBlock";
import MenuItems from "../../components/MenuItems";
import Overlay from "../../components/Overlay/Overlay";
import Footer from "./components/Footer/Footer";

// context
import { MenuContext } from "./context";

// hooks
import { useMatchBreakpoints } from "../../hooks";

// config
import { 
  MENU_HEIGHT,
  MOBILE_EVENT_BUTTON_HEIGHT,
  TOP_BANNER_HEIGHT,
  TOP_BANNER_HEIGHT_MOBILE,
} from './config';

// types
import { LangType, NavProps } from "./types";


const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ menuBg: boolean;}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  padding-left: 8px;
  padding-right: 16px;
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.sm} {
    background-color: ${({ theme, menuBg }) =>
      menuBg ? "white" : "transparent"};
  };
`;

const FixedContainer = styled.div<{ showMenu: boolean; height: number }>`
  position: fixed;
  top: ${({ showMenu, height }) => (showMenu ? 0 : `-${height}px`)};
  left: 0;
  transition: top 0.2s;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  z-index: 20;
`;

const TopBannerContainer = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};
  min-height: ${({ height }) => `${height}px`};
  max-height: ${({ height }) => `${height}px`};
  width: 100%;
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
  padding-top: 64px;
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  linkComponent = "a",
  banner,
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  setLang,
  currentLang,
  hexaPriceUsd,
  links,
  subLinks,
  activeItem,
  activeSubItem,
  HexaPriceLabel,
  HexaPriceValue,
  onClick,
  buyHexaLink,
  aboutLinks,
  productLinks,
  serviceLinks,
  footerStatistic,
  children,
  withEvent,
}) => {
  const { isMobile } = useMatchBreakpoints();
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [menuBg, setMenuBg] = useState<boolean>(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState<boolean>(false);

  const refPrevOffset = useRef(
    typeof window === "undefined" ? 0 : window.pageYOffset
  );

  const topBannerHeight = isMobile
    ? TOP_BANNER_HEIGHT_MOBILE
    : TOP_BANNER_HEIGHT;

  const topMenuWithBannerHeight = banner
    ? MENU_HEIGHT + topBannerHeight
    : MENU_HEIGHT;
  
  const totalTopMenuHeight =
    withEvent && isMobile
      ? topMenuWithBannerHeight + MOBILE_EVENT_BUTTON_HEIGHT
      : topMenuWithBannerHeight;

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage =
        window.document.body.clientHeight ===
        currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
        setMenuBg(false);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if ( 
          currentOffset < refPrevOffset.current ||
          currentOffset <= totalTopMenuHeight  
        ) {
          // Has scroll up
          setShowMenu(true);
          setMenuBg(true);
        } else {
          // Has scroll down
          setShowMenu(false);
          setMenuBg(true);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [totalTopMenuHeight]);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");


  return (
    <MenuContext.Provider value={{ linkComponent }}>
      <Wrapper>
        <FixedContainer
          showMenu={showMenu}
          height={isMobileMenuOpened ? 0 : totalTopMenuHeight}
        >
          {banner && (
            <TopBannerContainer height={topBannerHeight}>
              {banner}
            </TopBannerContainer>
          )}
          <StyledNav menuBg={menuBg}>
            <Flex>
              <Logo href={homeLink?.href ?? "/"} />
              <MenuItems
                items={links}
                activeItem={activeItem}
                activeSubItem={activeSubItem}
                isMobileMenuOpened={isMobileMenuOpened}
                mobileMenuCallback={setIsMobileMenuOpened}
                ml="24px"
              />
            </Flex>
            <UserBlock account={account} login={login} logout={logout} />
          </StyledNav>
        </FixedContainer>
        <BodyWrapper>
          <Inner showMenu={showMenu}>
            {children}
            <Footer
              HexaPriceLabel={HexaPriceLabel}
              HexaPriceValue={HexaPriceValue}
              footerStatistic={footerStatistic}
              onClick={onClick}
              buyHexaLink={buyHexaLink}
              aboutLinks={aboutLinks}
              productLinks={productLinks}
              serviceLinks={serviceLinks}
            />
          </Inner>
        </BodyWrapper>
      </Wrapper>
    </MenuContext.Provider>
  );
};

export default Menu;
