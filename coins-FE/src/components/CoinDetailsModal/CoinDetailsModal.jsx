/* eslint-disable no-unused-vars */
import { ModalOverlay, ModalContent } from "./CoinDetailsModal.styles";
import CoinFullDetailsCard from "../CoinFullDetailsCard/CoinFullDetailsCard";
import { CURRENCY_SYMBOL } from "../../common/consts";
import { useQuery } from "@tanstack/react-query";
import COINS from "./../../services/coins";

const CoinDetailsModal = ({ onClose, coinFromTheList }) => {
  // The only thing i do not have from the initial call is the Description and the Price change on the last 24 hours, 7 days, 14 days, 1 month, 2 months, 200 days, 1 year

  // Since i do not want to overload the Network with my BE , my BE will simply return only the description and the Price change

  // This can be done with a lot of ways depend on the project needs. I like that cause if just the by ID fails the rest of the results will still be displayed

  // const { data, isLoading, isFetching, isError } = useQuery({
  //   enabled: Boolean(coin.id),
  //   queryKey: ["coin-details-by-id", coin.id],
  //   queryFn: () => COINS.GET_COIN_DETAILS_BY_ID(coin.id),
  //   staleTime: 1000 * 60 * 2,
  // });

  // const coin = {
  //   id: "1",
  // };

  const isOpen = Boolean(coinFromTheList.name);

  return (
    <ModalOverlay $isVisible={isOpen}>
      <ModalContent $isVisible={isOpen} onClick={(e) => e.stopPropagation()}>
        {/* The components can reduce the props size by passing grouped object that make business sense/ For now its ok like that */}

        {/* Now since we use the already fetched data from the list We can handle potential errors only  for the description and the price change */}

        {/* all loading errors or event Error Boundaries just for that small specific part */}

        {/* For production we should handle everything but for now i will simply add a loading message */}

        <CoinFullDetailsCard
          onClose={onClose}
          currentPrice={coinFromTheList.current_price}
          currencySymbol={CURRENCY_SYMBOL}
          name={coinFromTheList.name}
          shortName={coinFromTheList.symbol}
          image={coinFromTheList.image}
          high24h={coinFromTheList.high_24h}
          low24h={coinFromTheList.low_24h}
          twentyFourPriceChangePercentage={Number(
            coinFromTheList.price_change_percentage_24h.toFixed(2)
          )}
          isLoading={true}

          // Add the last 7 days, 14 days, 1 month, 2 months, 200 days, 1 year
          // Add the description
        />
      </ModalContent>
    </ModalOverlay>
  );
};

export default CoinDetailsModal;
