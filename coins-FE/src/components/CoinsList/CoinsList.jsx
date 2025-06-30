import { Wrapper } from "./CoinsList.styles";
import CoinPriceCard from "../CoinPriceCard/CoinPriceCard";
import { CURRENCY_SYMBOL } from "../../common/consts";

const CoinsList = ({ coins, onClickCoinCard }) => {
  return (
    <Wrapper>
      {coins.map((coin) => {
        const last24HoursPercentage = Number(
          coin.price_change_percentage_24h.toFixed(2)
        );

        return (
          <CoinPriceCard
            key={coin.id}
            name={coin.name}
            image={coin.image}
            shortName={coin.symbol}
            currencySymbol={CURRENCY_SYMBOL}
            currentPrice={coin.current_price}
            highestTwentyFourHourPrice={coin.high_24h}
            LowestTwentyFourHourPrice={coin.low_24h}
            twentyFourPriceChangePercentage={last24HoursPercentage}
            onClickCard={() => onClickCoinCard(coin.id)}
          />
        );
      })}
    </Wrapper>
  );
};

export default CoinsList;
