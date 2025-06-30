import { Title, Wrapper } from "./App.styles";
import CoinsList from "./components/CoinsList/CoinsList";

const App = () => {
  return (
    <Wrapper>
      <Title>Coins Price List </Title>

      <CoinsList />
    </Wrapper>
  );
};

export default App;
