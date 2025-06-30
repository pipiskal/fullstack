import {
  Wrapper,
  TitleAndPriceChangePercentage,
  CurrentPriceWrapper,
  TwentyFourHourHighAndLow,
  Label,
  Price,
} from "./CoinPriceCard.styles";

import CoinAvatar from "./../CoinAvatar/CoinAvatar";
import PercentagePriceChangeTag from "../PercentagePriceChangeTag/PercentagePriceChangeTag";
import TitleDescCard from "./../TitleDescCard/TitleDescCard";

const CoinPriceCard = ({
  name,
  shortName,
  image,
  currencySymbol,
  currentPrice,
  highestTwentyFourHourPrice,
  LowestTwentyFourHourPrice,
  twentyFourPriceChangePercentage,
}) => {
  return (
    <Wrapper>
      <TitleAndPriceChangePercentage>
        <CoinAvatar
          image={image}
          title={name}
          shortName={shortName}
          name={name}
        />

        <PercentagePriceChangeTag
          hasPriceIncreased={twentyFourPriceChangePercentage.isPositive}
          percentage={twentyFourPriceChangePercentage.percentage}
        />
      </TitleAndPriceChangePercentage>

      <CurrentPriceWrapper>
        <Label> Current Price</Label>

        <Price>{`${currencySymbol}${currentPrice}`}</Price>
      </CurrentPriceWrapper>

      {/* <TwentyFourHourHighAndLow>
        <TitleDescCard title={"24h HIGH"} desc={highestTwentyFourHourPrice} />

        <TitleDescCard title={"24h LOW"} desc={LowestTwentyFourHourPrice} />
      </TwentyFourHourHighAndLow> */}
    </Wrapper>
  );
};

export default CoinPriceCard;
