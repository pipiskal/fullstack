import { Title, Wrapper } from "./App.styles";
import CoinsList from "./components/CoinsList/CoinsList";
import CoinDetailsModal from "./components/CoinDetailsModal/CoinDetailsModal.jsx";
import { useState } from "react";

const App = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);

  return (
    <Wrapper>
      <Title>Coins Price List </Title>

      <CoinsList onClickCoinCard={(coin) => setSelectedCoin(coin)} />

      {/* We do not want to map the Modal component in each coin card. Thats why it gets rendered here. */}
      {selectedCoin?.id && (
        <CoinDetailsModal
          coinFromTheList={selectedCoin}
          onClose={() => setSelectedCoin(null)}
        />
      )}
    </Wrapper>
  );
};

export default App;
