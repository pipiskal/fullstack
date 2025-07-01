import { ModalOverlay, ModalContent } from "./CoinDetailsModal.styles";
import CoinFullDetailsCard from "../CoinFullDetailsCard/CoinFullDetailsCard";
import { CURRENCY_SYMBOL } from "../../common/consts";
import { useQuery } from "@tanstack/react-query";
import COINS from "./../../services/coins";

const CoinDetailsModal = ({ onClose, coinFromTheList }) => {
  // The only thing i do not have from the initial call is the Description and the Price change on the last 24 hours, 7 days, 14 days, 1 month, 2 months, 200 days, 1 year

  //My BE could  simply return only the description and the Price change but lets say the having a fresh data is more important. i will return the current price and high and low again

  // This can be done with a lot of ways depend on the project needs. I like that cause if just the by ID fails the rest of the results will still be displayed

  const { data, isLoading } = useQuery({
    enabled: Boolean(coinFromTheList.id),
    queryKey: ["coin-details-by-id", coinFromTheList.id],
    queryFn: () => COINS.GET_COIN_DETAILS_BY_ID(coinFromTheList.id),
    // Fetch after 2 minutes
    staleTime: 1000 * 60 * 2,
  });

  const isOpen = Boolean(coinFromTheList.id);

  // console.log("data", data);

  // Can also handle errors with isError and more.

  const pricesChangesPercentage = Object.entries(
    data?.price_change_percentage || {}
  ).map(([key, value]) => ({
    name: key,
    value: Number(value.toFixed(2)),
  }));

  console.log("pricesChangesPercentage", pricesChangesPercentage);

  return (
    <ModalOverlay $isVisible={isOpen}>
      <ModalContent $isVisible={isOpen} onClick={(e) => e.stopPropagation()}>
        {/* The components can reduce the props size by passing grouped object that make business sense/ For now its ok like that */}

        {/* Now since we use the already fetched data from the list We can handle potential errors only  for the description and the price change */}

        {/* all loading errors or event Error Boundaries just for that small specific part */}

        {/* For production we should handle everything but for now i will simply add a loading message */}

        <CoinFullDetailsCard
          onClose={onClose}
          currentPrice={data?.current_price || 0}
          currencySymbol={CURRENCY_SYMBOL}
          name={coinFromTheList.name}
          shortName={coinFromTheList.symbol}
          image={coinFromTheList.image}
          high24h={data?.high_24h || 0}
          low24h={data?.low_24h || 0}
          twentyFourPriceChangePercentage={Number(
            coinFromTheList.price_change_percentage_24h.toFixed(2)
          )}
          isLoading={isLoading}
          description={data?.description}
          prices_changes_percentage={pricesChangesPercentage}

          // Add the last 7 days, 14 days, 1 month, 2 months, 200 days, 1 year
          // Add the description
        />
      </ModalContent>
    </ModalOverlay>
  );
};

export default CoinDetailsModal;
