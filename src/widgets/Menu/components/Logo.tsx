import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import { LogoIcon as LogoWithText } from "../icons";
 
interface Props {
  href: string;
}

import LogoPng from "./Logos/Logo.png";
import LogoTextPng from "./Logos/LogoWithText.png";

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

const Logo: React.FC<Props> = ({ href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <img src={LogoPng} className="mobile-icon" />
      <img src={LogoTextPng} className="desktop-icon" />
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="HexaFinity home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="HexaFinity home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
