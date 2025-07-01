import {
  Wrapper,
  TitleAndPriceChangePercentage,
  CurrentPriceWrapper,
  TwentyFourHourHighAndLowPrices,
  Label,
  Price,
} from "./CoinPriceCard.styles";

import CoinAvatar from "./../CoinAvatar/CoinAvatar";
import PercentagePriceChangeTag from "../PercentagePriceChangeTag/PercentagePriceChangeTag";
import TwentyFourHoursPriceCard from "../TwentyFourHoursPriceCard/TwentyFourHoursPriceCard";

const CoinPriceCard = ({
  name,
  shortName,
  image,
  currencySymbol,
  currentPrice,
  highestTwentyFourHourPrice,
  LowestTwentyFourHourPrice,
  twentyFourPriceChangePercentage,
  onClickCard,
  isDisabled,
}) => {
  return (
    <Wrapper onClick={onClickCard} $isDisabled={isDisabled}>
      <TitleAndPriceChangePercentage>
        <CoinAvatar image={image} shortName={shortName} name={name} />

        <PercentagePriceChangeTag
          percentage={twentyFourPriceChangePercentage}
        />
      </TitleAndPriceChangePercentage>

      <CurrentPriceWrapper>
        <Label>Current Price</Label>

        <Price>{`${currencySymbol}${currentPrice}`}</Price>
      </CurrentPriceWrapper>

      <TwentyFourHourHighAndLowPrices>
        <TwentyFourHoursPriceCard
          type={"high"}
          currencySymbol={currencySymbol}
          price={highestTwentyFourHourPrice}
        />

        <TwentyFourHoursPriceCard
          type={"low"}
          currencySymbol={currencySymbol}
          price={LowestTwentyFourHourPrice}
        />
      </TwentyFourHourHighAndLowPrices>
    </Wrapper>
  );
};

export default CoinPriceCard;
