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
