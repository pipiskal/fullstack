import {
  Wrapper,
  PercentageWrapper,
  TrendArrowUp,
  TrendArrowDown,
} from "./PercentagePriceChangeTag.styles";

const PercentagePriceChangeTag = ({ hasPriceIncreased, percentage }) => {
  return (
    <Wrapper hasPriceIncreased={hasPriceIncreased}>
      {hasPriceIncreased ? <TrendArrowUp /> : <TrendArrowDown />}

      <PercentageWrapper
        hasPriceIncreased={hasPriceIncreased}
      >{`+${percentage}%`}</PercentageWrapper>
    </Wrapper>
  );
};

export default PercentagePriceChangeTag;
