/* eslint-disable no-unused-vars */
import { ModalOverlay, ModalContent } from "./CoinDetailsModal.styles";
import CoinFullDetailsCard from "../CoinFullDetailsCard/CoinFullDetailsCard";
import { CURRENCY_SYMBOL } from "../../common/consts";
import { useQuery } from "@tanstack/react-query";
import COINS from "./../../services/coins";

const CoinDetailsModal = ({ onClose, coin }) => {
  // The only thing i do not have from the initial call is the Description and the Price change on the last 24 hours, 7 days, 14 days, 1 month, 2 months, 200 days, 1 year

  // Since i do not want to overload the Network with my BE , my BE will simply return only the description and the Price change

  // This can be done with a lot of ways depend on the project needs. I like that cause if just the by ID fails the rest of the results will still be displayed

  // const { data, isLoading, isFetching, isError } = useQuery({
  //   enabled: Boolean(coin.id),
  //   queryKey: ["coin-details-by-id", coin.id],
  //   queryFn: () => COINS.GET_COIN_DETAILS_BY_ID(coin.id),
  //   staleTime: 1000 * 60 * 2,
  // });

  const isOpen = Boolean(coin.id);

  return (
    <ModalOverlay $isVisible={isOpen}>
      <ModalContent $isVisible={isOpen} onClick={(e) => e.stopPropagation()}>
        {/* {!coin && isLoading && <p>Loading...</p>}

        {!coin && !isLoading && <p>Results not found 404</p>}

        {!isLoading && !isFetching && isError && (
          <p>There was an error we check it</p>
        )} */}
        {coin && (
          <CoinFullDetailsCard
            onClose={onClose}
            currentPrice={coin.current_price}
            currencySymbol={CURRENCY_SYMBOL}
            name={coin.name}
            shortName={coin.symbol}
            image={coin.image}
            twentyFourPriceChangePercentage={Number(
              coin.price_change_percentage_24h.toFixed(2)
            )}
            high24h={coin.high_24h}
            low24h={coin.low_24h}
          />
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default CoinDetailsModal;
