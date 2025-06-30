import { Title, Wrapper } from "./App.styles";
import CoinPriceCard from "./components/CoinPriceCard/CoinPriceCard";

const App = () => {
  return (
    <Wrapper>
      <Title>Coins Price List </Title>

      <CoinPriceCard
        name="Bitcoin"
        image="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
        shortName="BTC"
        currencySymbol="$"
        currentPrice={3200023}
        highestTwentyFourHourPrice={32000.23}
        LowestTwentyFourHourPrice={230099.32}
        twentyFourPriceChangePercentage={{
          isPositive: true,
          percentage: 2.45,
        }}
      />
    </Wrapper>
  );
};

export default App;
