import { Wrapper, Title, Description } from "./TwentyFourHoursPriceCard.styles";

const TwentyFourHoursPriceCard = ({ type, price, currencySymbol }) => {
  const title =
    type === "high" ? "24 Hours Highest Price" : "24 Hours Lowest Price";

  return (
    <Wrapper>
      <Title>{title}</Title>

      <Description type={type}>{`${currencySymbol}${price}`}</Description>
    </Wrapper>
  );
};

export default TwentyFourHoursPriceCard;
