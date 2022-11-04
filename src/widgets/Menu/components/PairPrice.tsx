import React from "react";
import styled from "styled-components";
import { SwapHorizontalSolidIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Box/Flex";
import Box from "../../../components/Box/Box";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";

//Config
import { MENU_ENTRY_HEIGHT } from "../config";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

interface Props {
  pair: string;
  price: number;
}

const PairPrice: React.FC<Props> = ({ pair, price }) => (
  <Container>
    <Flex>
      <SwapHorizontalSolidIcon />
      <Box>
        <Text>
          Swap
        </Text>
        <Text>
          08:01:11 AM
        </Text>
      </Box>
    </Flex>
    <Box>
      <Text>
        {pair}
      </Text>
      <Text>
        ${price}
      </Text>
    </Box>
  </Container>
);

export default React.memo(PairPrice, (prev, next) => prev.price === next.price);
