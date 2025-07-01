import { Wrapper, Title, Description } from "./TwentyFourHoursPriceCard.styles";

const TwentyFourHoursPriceCard = ({
  type,
  price,
  currencySymbol,
  align = "left",
}) => {
  const title = type === "high" ? "24H High" : "24H Low";

  return (
    <Wrapper $align={align}>
      <Title>{title}</Title>

      <Description type={type}>{`${currencySymbol}${price}`}</Description>
    </Wrapper>
  );
};

export default TwentyFourHoursPriceCard;
