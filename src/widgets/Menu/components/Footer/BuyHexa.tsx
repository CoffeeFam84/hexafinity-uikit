import React from "react";
import Button from "../../../../components/Button/Button";

export interface Props {
  buyHexaLink: string;
}

const BuyHexa: React.FC<Props> = ({ buyHexaLink }) => {
  return (
    <Button as="a" href={buyHexaLink} variant="danger" scale="md">
      Buy HEXA
    </Button>
  );
};

export default BuyHexa;
