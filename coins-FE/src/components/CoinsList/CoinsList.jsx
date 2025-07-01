import { Wrapper, SimpleText } from "./CoinsList.styles";
import CoinPriceCard from "../CoinPriceCard/CoinPriceCard";
import { CURRENCY_SYMBOL } from "../../common/consts";
import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import COINS from "./../../services/coins";
import { getFormattedPrice } from "./../../common/helpers";

const CoinsList = React.memo(({ onClickCoinCard }) => {
  // From here

  const {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    isError,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["coins"],
    queryFn: ({ pageParam = 1 }) => COINS.GET_COINS_MARKETS(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      // Return next page number if we want to keep loading
      // Since we don't know total pages, we'll just increment forever
      return allPages.length + 1;
    },
    keepPreviousData: true,
  });

  const coins = data?.pages?.flatMap((page) => page) || [];

  // To here, You can encapsulate this logic in a custom hook if you want. But the file is already small enough so no need.

  if (isLoading && coins.length === 0) {
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

          const formattedPrice = getFormattedPrice(coin.current_price);

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

      {hasNextPage && (
        <button
          isDisabled={isFetching || isLoading}
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          Load More
        </button>
      )}
    </>
  );
});

export default CoinsList;
