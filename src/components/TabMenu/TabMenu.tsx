import React, { useState, useEffect } from "react";
import styled, { DefaultTheme } from "styled-components";
import { space, variant } from "styled-system";
import { TabBarProps, tabsScales, tabVariants } from "./types";
import TabBarItem from "./TabBarItem";
import { sliderScaleVariant } from "./theme";

interface StyledTabBarProps extends TabBarProps {
  theme: DefaultTheme;
}

interface BarProps extends TabBarProps {
  onItemClick: (index: number) => void;
}

const StyledTabBar = styled.div<StyledTabBarProps>`
  position: relative;
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  & > button,
  & > a {
    flex: ${({ fullWidth }) => (fullWidth ? 1 : "auto")};
  }

  & > button,
  & a {
    box-shadow: none;
  }
  ${space}
`;

const Selection = styled.div<{
  offset: number;
  width: number;
  scale: string;
  isLight: boolean;
}>`
  width: ${({ width }) => `${width}px`};
  height: 2px;
  position: absolute;
  bottom: 0;
  left: ${({ offset }) => `${offset}px`};
  transition: left 0.3s ease;
  padding: 0 8px;
  z-index: 1;

  ${variant({
    prop: "scale",
    variants: sliderScaleVariant,
  })}
`;

const ColorSection = styled.div<{ isLight: boolean }>`
  width: 100%;
  height: 100%;
  background: ${({ theme, isLight }) =>
    theme.colors[isLight ? "primary" : "warning"]};
`;

const TabMenu: React.FC<BarProps> = ({
  customClass = "",
  activeIndex = 0,
  scale = tabsScales.SM,
  variant = tabVariants.TAB,
  onItemClick,
  disabled,
  fullWidth = false,
  menuTitles = [""],
  ...props
}) => {
  const [widthsArr, setWidthsArr] = useState([]);
  const [blockOffset, setBlockOffset] = useState(0);

  useEffect(() => {
    setBlockOffset(
      widthsArr.slice(0, activeIndex).reduce((sum, elem) => sum + elem, 0)
    );
  }, [widthsArr, activeIndex]);

  const isLight = variant === tabVariants.TAB_LIGHT;

  return (
    <StyledTabBar
      disabled={disabled}
      isLight={isLight}
      fullWidth={fullWidth}
      {...props}
    >
      {!disabled && (
        <Selection
          scale={scale}
          width={widthsArr[activeIndex]}
          offset={blockOffset}
          isLight={isLight}
        >
          <ColorSection isLight={isLight} />
        </Selection>
      )}
      {menuTitles.map((title, index) => (
        <TabBarItem
          key={index.toString()}
          disabled={disabled}
          customClass={customClass}
          isActive={!disabled && activeIndex === index}
          onAction={onItemClick}
          itemIndex={index}
          setWidth={setWidthsArr}
          variant={variant}
          scale={scale}
        >
          {title}
        </TabBarItem>
      ))}
    </StyledTabBar>
  );
};

export default TabMenu;
