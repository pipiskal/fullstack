import {
  Wrapper,
  PercentageWrapper,
  TrendArrowUp,
  TrendArrowDown,
} from "./PercentagePriceChangeTag.styles";

const PercentagePriceChangeTag = ({ hasPriceIncreased, percentage }) => {
  const arithmeticSign = hasPriceIncreased ? "+" : "";

  return (
    <Wrapper hasPriceIncreased={hasPriceIncreased}>
      {hasPriceIncreased ? <TrendArrowUp /> : <TrendArrowDown />}

      <PercentageWrapper
        hasPriceIncreased={hasPriceIncreased}
      >{`${arithmeticSign}${percentage}%`}</PercentageWrapper>
    </Wrapper>
  );
};

export default PercentagePriceChangeTag;
