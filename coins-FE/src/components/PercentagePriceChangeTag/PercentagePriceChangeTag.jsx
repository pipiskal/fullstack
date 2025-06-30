import {
  Wrapper,
  PercentageWrapper,
  TrendArrowUp,
  TrendArrowDown,
} from "./PercentagePriceChangeTag.styles";

const getPercentageChangeMetric = (priceChangePercentage) => {
  if (priceChangePercentage > 0) return "positive";
  if (priceChangePercentage < 0) return "negative";

  return "neutral";
};

const CHART_LINES = {
  positive: <TrendArrowUp />,
  negative: <TrendArrowDown />,
  neutral: null,
};

const PercentagePriceChangeTag = ({ percentage }) => {
  const percentageChange = getPercentageChangeMetric(percentage);

  const hasPriceIncreased = percentageChange === "positive";

  const arithmeticSign = hasPriceIncreased ? "+" : "";

  return (
    <Wrapper $percentageChange={percentageChange}>
      {CHART_LINES[percentageChange]}

      <PercentageWrapper
        $percentageChange={percentageChange}
      >{`${arithmeticSign}${percentage}%`}</PercentageWrapper>
    </Wrapper>
  );
};

export default PercentagePriceChangeTag;
