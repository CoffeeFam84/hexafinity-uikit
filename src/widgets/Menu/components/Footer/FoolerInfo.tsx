import React from "react";
import styled from "styled-components";
import { HexaPriceProps, FooterStatisticProps } from "../../types";
import { formatSpacingAmount } from "../../../../util/formatSpacingAmount";

import HexaPrice from "./HexaPrice";
import ConnectMetamask from "./ConnectMetamask";
import BuyHexa from "./BuyHexa";

interface Props extends HexaPriceProps, FooterStatisticProps {
  onClick: () => void;
  buyHexaLink: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.dark600};
  margin-bottom: 24px;
  grid-area: footer-info;

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.xll} {
    flex-direction: row;
    justify-content: initial;
  }
`;

const LeftInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  ${({ theme }) => theme.mediaQueries.xll} {
    flex-direction: column;
    justify-content: space-between;
    width: 142px;
    min-width: 142px;
    margin-right: 24px;
    margin-bottom: 0;
  }
`;
const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InfoList = styled.div`
  flex-grow: initial;

  ${({ theme }) => theme.mediaQueries.xll} {
    flex-grow: 1;
  }
`;
const InfoListItem = styled.div`
  display: flex;
  align-items: center;
  line-height: 18px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
const InfoListLabel = styled.span`
  font-size: 12px;
  width: 140px;
  min-width: 140px;
  color: ${({ theme }) => theme.colors.gray900};
  font-weight: bold;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 120px;
    min-width: 120px;
  }
`;
const InfoListValue = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  padding-left: 4px;
  font-weight: bold;
`;

const FooterInfo: React.FC<Props> = ({
  HexaPriceLabel,
  HexaPriceValue,
  onClick,
  footerStatistic,
  buyHexaLink,
}) => {
  return (
    <Wrapper>
      <LeftInfo>
        <HexaPrice HexaPriceLabel={HexaPriceLabel} HexaPriceValue={HexaPriceValue} />
        <FlexWrap>
          <ConnectMetamask onClick={onClick} />
          <BuyHexa buyHexaLink={buyHexaLink} />
        </FlexWrap>
      </LeftInfo>
      <InfoList>
        {footerStatistic.map((item, index) => (
          <InfoListItem key={index.toString()}>
            <InfoListLabel>{item.label}</InfoListLabel>
            <InfoListValue>{formatSpacingAmount(item.value)}</InfoListValue>
          </InfoListItem>
        ))}
      </InfoList>
    </Wrapper>
  );
};

export default FooterInfo;
