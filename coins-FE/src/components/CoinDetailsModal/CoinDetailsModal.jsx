import { ModalOverlay, ModalContent } from "./CoinDetailsModal.styles";
import CoinFullDetailsCard from "../CoinFullDetailsCard/CoinFullDetailsCard";
import { CURRENCY_SYMBOL } from "../../common/consts";

const CoinDetailsModal = ({ isOpen, onClose, coinId }) => {
  if (!isOpen) return null;

  const coin = {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 91591,
    high_24h: 91745,
    low_24h: 91212,
    price_change_percentage_24h: 0.37253,
  };

  console.log("Will fetch the results by id.", coinId);

  return (
    <ModalOverlay $isVisible={isOpen}>
      <ModalContent $isVisible={isOpen} onClick={(e) => e.stopPropagation()}>
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
      </ModalContent>
    </ModalOverlay>
  );
};

export default CoinDetailsModal;
