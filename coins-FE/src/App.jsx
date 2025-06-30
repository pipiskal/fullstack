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
        highestTwentyFourHourPrice={3200023}
        LowestTwentyFourHourPrice={23009932}
        twentyFourPriceChangePercentage={{
          isPositive: true,
          percentage: "23",
        }}
      />
    </Wrapper>
  );
};

export default App;
