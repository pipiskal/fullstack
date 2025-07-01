import { ModalOverlay, ModalContent } from "./CoinDetailsModal.styles";
import CoinFullDetailsCard from "../CoinFullDetailsCard/CoinFullDetailsCard";
import { CURRENCY_SYMBOL } from "../../common/consts";
import { useQuery } from "@tanstack/react-query";
import COINS from "./../../services/coins";

const CoinDetailsModal = ({ onClose, coinId }) => {
  // const { data, isLoading, isFetching, isError } = useQuery({
  //   enabled: Boolean(coinId),
  //   queryKey: ["coins", coinId],
  //   queryFn: () => COINS.GET_COIN_DETAILS_BY_ID(coinId),
  //   staleTime: 1000 * 60 * 2,
  // });

  const isOpen = Boolean(coinId);

  console.log("isOpen", isOpen);

  // console.log("Will fetch the results by id.", coinId);

  // const coin = data || undefined;

  return (
    <ModalOverlay $isVisible={isOpen}>
      <ModalContent $isVisible={isOpen} onClick={(e) => e.stopPropagation()}>
        <div
          style={{
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            onClose();
            console.log("onClose");
          }}
        >
          CLOSE
        </div>
        {/* {!coin && isLoading && <p>Loading...</p>}

        {!coin && !isLoading && <p>Results not found 404</p>}

        {!isLoading && !isFetching && isError && (
          <p>There was an error we check it</p>
        )} */}
        {/* {coin && (
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
        )} */}
        test
      </ModalContent>
    </ModalOverlay>
  );
};

export default CoinDetailsModal;
