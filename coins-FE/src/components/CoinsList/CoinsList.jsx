import { Wrapper, SimpleText } from "./CoinsList.styles";
import CoinPriceCard from "../CoinPriceCard/CoinPriceCard";
import { CURRENCY_SYMBOL } from "../../common/consts";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import COINS from "./../../services/coins";
import { useState } from "react";

const CoinsList = React.memo(({ onClickCoinCard }) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => COINS.GET_COINS_MARKETS(page),
  });

  const coins = data || [];

  if (isLoading) {
    return <SimpleText>Loading Coins...</SimpleText>;
  }

  if (isError && !isLoading) {
    return <SimpleText>Something went wrong...</SimpleText>;
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
              onClickCard={() =>
                onClickCoinCard({
                  ...coin,
                  current_price: formattedPrice,
                  last24HoursPercentage,
                })
              }
              isDisabled={isFetching}
            />
          );
        })}
      </Wrapper>

      <button onClick={() => setPage(page + 1)}>Load More</button>
    </>
  );
});

export default CoinsList;
