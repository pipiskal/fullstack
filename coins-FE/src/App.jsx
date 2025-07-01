/* eslint-disable no-unused-vars */
import { Title, Wrapper } from "./App.styles";
import CoinsList from "./components/CoinsList/CoinsList";
import CoinDetailsModal from "./components/CoinDetailsModal/CoinDetailsModal.jsx";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import COINS from "./services/coins.js";

const App = () => {
  const [selectedCoinId, setSelectedCoinId] = useState(null);
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => COINS.GET_COINS_MARKETS(page),
  });

  const coins = data || [];

  return (
    <Wrapper>
      <Title>Coins Price List </Title>

      <CoinsList
        // Used for the first time fetch, u can add a skeleton or a loading etc..
        areCoinsLoading={isLoading}
        // Doing a actual call in the background, useful for load more button to disable the previous loaded items
        areCoinsFetching={isFetching}
        hasError={isError}
        coins={coins}
        onClickCoinCard={(coinId) => setSelectedCoinId(coinId)}
      />

      <CoinDetailsModal
        coinId={selectedCoinId}
        onClose={() => setSelectedCoinId(null)}
      />
    </Wrapper>
  );
};

export default App;
