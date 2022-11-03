import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../../components/Svg";
import Flex from "../../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "../../icons";
import MenuButton from "..//MenuButton";
import { HtelegramIcon, HmailIcon, HyoutubeIcon, HtwitterIcon, HlogoIcon } from "../../icons"

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledSocial = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: #11A9FF;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon />
      <HlogoIcon />
    </>
  );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
      <Flex alignItems='center' justifyContent='space-around' width='200px' style={{ marginLeft: '80px' }}>
        <StyledSocial>
          <HtelegramIcon />
        </StyledSocial>
        <HmailIcon />
        <HyoutubeIcon />
        <HtwitterIcon />
      </Flex>
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
