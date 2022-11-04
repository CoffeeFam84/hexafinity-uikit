import React, { useEffect, useRef, useState } from "react";
import styled, { DefaultTheme } from "styled-components";
import throttle from "lodash/throttle";


// components
import Logo from "./components/Logo";
import UserBlock from "./components/UserBlock";
import Panel from './components/Panel';
import Overlay from "../../components/Overlay/Overlay";
import Footer from "./components/Footer/Footer";

// context
import { MenuContext } from "./context";

// hooks
import { useMatchBreakpoints } from "../../hooks";

// config
import { MENU_HEIGHT, SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_REDUCED } from './config';

// types
import { LangType, NavProps } from "./types";


const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: white;
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT+6}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  max-width: 100%;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? (SIDEBAR_WIDTH_FULL + 40) : (SIDEBAR_WIDTH_REDUCED + 40)}px`};
    margin-right: 40px;
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
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
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  hexaPriceUsd,
  links,
  HexaPriceLabel,
  HexaPriceValue,
  onClick,
  buyHexaLink,
  aboutLinks,
  productLinks,
  serviceLinks,
  footerStatistic,
  children,
}) => {
  const { isMobile } = useMatchBreakpoints();
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState<boolean>(true);

  const refPrevOffset = useRef(
    typeof window === "undefined" ? 0 : window.pageYOffset
  );

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
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if ( currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");


  return (
    <MenuContext.Provider value={{ linkComponent }}>
      <Wrapper>
        <StyledNav showMenu={showMenu}>
          <Logo
            isPushed={isPushed}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
            href={homeLink?.href ?? "/"}
          />
          <UserBlock account={account} login={login} logout={logout} />
        </StyledNav>
        <BodyWrapper>
          <Panel
            isPushed={isPushed}
            isMobile={isMobile}
            showMenu={showMenu}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            hexaPriceUsd={hexaPriceUsd}
            pushNav={setIsPushed}
            links={links}
          />
          <Inner isPushed={isPushed} showMenu={showMenu}>
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
          <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
        </BodyWrapper>
      </Wrapper>
    </MenuContext.Provider>
  );
};

export default Menu;
