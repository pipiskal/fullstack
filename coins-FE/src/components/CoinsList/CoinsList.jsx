import { Wrapper } from "./CoinsList.styles";
import CoinPriceCard from "../CoinPriceCard/CoinPriceCard";
import { CURRENCY_SYMBOL } from "../../common/consts";
import React from "react";

const CoinsList = React.memo(
  ({ coins, onClickCoinCard, areCoinsLoading, areCoinsFetching, hasError }) => {
    if (areCoinsLoading) {
      return <div>Loading...</div>;
    }

    if (hasError) {
      return <div>Something went wrong...</div>;
    }

    return (
      <>
        <Wrapper>
          {coins.map((coin) => {
            const last24HoursPercentage = Number(
              coin.price_change_percentage_24h.toFixed(2)
            );

            const formattedPrice = Intl.NumberFormat("en-US", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(coin.current_price);

            return (
              <CoinPriceCard
                key={coin.id}
                name={coin.name}
                image={coin.image}
                shortName={coin.symbol}
                currencySymbol={CURRENCY_SYMBOL}
                currentPrice={formattedPrice}
                highestTwentyFourHourPrice={coin.high_24h}
                LowestTwentyFourHourPrice={coin.low_24h}
                twentyFourPriceChangePercentage={last24HoursPercentage}
                onClickCard={() => onClickCoinCard(coin.id)}
                isDisabled={areCoinsFetching}
              />
            );
          })}
        </Wrapper>
      </>
    );
  }
);

export default CoinsList;
