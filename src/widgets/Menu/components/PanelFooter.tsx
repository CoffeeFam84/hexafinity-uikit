import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import { PanelProps, PushedProps } from "../types";

//Components
import IconButton from "../../../components/Button/IconButton";
import { Text } from "../../../components/Text";
import PairPrice from "./PairPrice";

interface Props extends PanelProps, PushedProps { }

const Container = styled.div`
  padding: 8px 4px;
  margin: 0px 20px;
  background-color: #020E2E;
  border-radius: 20px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
}) => {
  if (!isPushed) {
    return (
      <IconButton variant="text" onClick={() => pushNav(true)}>
        <CogIcon />
      </IconButton>
    );
  }

  return (
    <Container>
      <Text>Live Trading Deals</Text>
      <PairPrice pair="ETH/WBNB" price={3888.75}/>
      <PairPrice pair="WBNB/BUSD" price={3888.75}/>
    </Container>
  );
};

export default PanelFooter;
