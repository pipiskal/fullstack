import {
  Wrapper,
  TitleAndPriceChangePercentage,
  CurrentPrice,
  TwentyFourHourHighAndLow,
} from "./CoinPriceCard.styles";

import CoinAvatar from "./../CoinAvatar/CoinAvatar";
import TwentyFourHourPriceChangePercentage from "../TwentyFourHourPriceChangeTag/TwentyFourHourPriceChangeTag";
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

        <TwentyFourHourPriceChangePercentage
          isPositive={twentyFourPriceChangePercentage.isPositive}
          percentage={twentyFourPriceChangePercentage.percentage}
        />
      </TitleAndPriceChangePercentage>

      {/* <CurrentPrice>
        <p>{currentPrice.symbol}</p>

        <p>{currentPrice.total}</p>
      </CurrentPrice> */}

      {/* <TwentyFourHourHighAndLow>
        <TitleDescCard title={"24h HIGH"} desc={highestTwentyFourHourPrice} />

        <TitleDescCard title={"24h LOW"} desc={LowestTwentyFourHourPrice} />
      </TwentyFourHourHighAndLow> */}
    </Wrapper>
  );
};

export default CoinPriceCard;
