import { ModalOverlay, ModalContent } from "./CoinDetailsModal.styles";
import CoinFullDetailsCard from "../CoinFullDetailsCard/CoinFullDetailsCard";

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

  // Will fetch the results by id.

  return (
    <ModalOverlay $isVisible={isOpen}>
      <ModalContent $isVisible={isOpen} onClick={(e) => e.stopPropagation()}>
        <CoinFullDetailsCard
          onClose={onClose}
          currentPrice={coin.current_price}
          currencySymbol={coin.symbol}
          name={coin.name}
          image={coin.image}
          priceChangePercentage={coin.price_change_percentage_24h}
          high24h={coin.high_24h}
          low24h={coin.low_24h}
        />
      </ModalContent>
    </ModalOverlay>
  );
};

export default CoinDetailsModal;
