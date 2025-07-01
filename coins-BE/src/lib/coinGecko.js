const axios = require("axios");
const NodeCache = require("node-cache");

// const SECONDS_CACHED = 120; // 2 minutes

// cache them for 30 minutes just so i wont spam the server
const SECONDS_CACHED = 1800;

// const SECONDS_CACHED = 5;

const ROOT_URL = "https://api.coingecko.com/api/v3/";
const DEMO_URL_KEY = "x_cg_demo_api_key";

const API_KEY = process.env.COINGECKO_API_KEY;

const cache = new NodeCache({ stdTTL: SECONDS_CACHED });

const getMarkets = async (requestedPage, itemsPerPage) => {
  try {
    const cacheKey = `coin-markets-${requestedPage}`;

    const cached = cache.get(cacheKey);

    if (cached) {
      console.log("I have cached results for the list of markets!");
      return cached;
    }

    console.log("I will serve a fresh list of markets!");

    const { data } = await axios.get(
      // The queries can easily get construct better but for the example its ok
      `${ROOT_URL}/coins/markets?${DEMO_URL_KEY}y=${API_KEY}&per_page=${itemsPerPage}&vs_currency=usd&precision=2&page=${requestedPage}`
    );

    const formattedPayload = data.map((coin) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      image: coin.image,
      current_price: coin.current_price,
      high_24h: coin.high_24h,
      low_24h: coin.low_24h,
      price_change_percentage_24h: coin.price_change_percentage_24h,
    }));

    cache.set(cacheKey, formattedPayload, SECONDS_CACHED);

    return formattedPayload;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getCoinDetails = async (id) => {
  try {
    const cacheKey = `coin-details-${id}`;

    const cached = cache.get(cacheKey);

    if (cached) {
      console.log("I have cached results for the coin details!");
      return cached;
    }

    try {
      const { data } = await axios.get(
        // The queries can easily get construct better but for the example its ok
        `${ROOT_URL}/coins/${id}?${DEMO_URL_KEY}=${API_KEY}&vs_currency=usd&localization=false&tickers=false&community_data=false&developer_data=false`
      );

      const formattedPayload = {
        description: data.description.en,
        current_price: data.market_data.current_price.usd,
        high_24h: data.market_data.high_24h.usd,
        low_24h: data.market_data.low_24h.usd,
        // its a bit more clear that way
        price_change_percentage: {
          "24h": data.market_data.price_change_percentage_24h,
          "7d": data.market_data.price_change_percentage_7d,
          "14d": data.market_data.price_change_percentage_14d,
          "30d": data.market_data.price_change_percentage_30d,
          "60d": data.market_data.price_change_percentage_60d,
          "200d": data.market_data.price_change_percentage_200d,
          "1y": data.market_data.price_change_percentage_1y,
        },
      };

      console.log("I will serve a fresh coin details!");

      cache.set(cacheKey, formattedPayload, SECONDS_CACHED);

      return formattedPayload;
    } catch (error) {
      if (error.message.includes("404")) return null;

      throw error;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  getMarkets,
  getCoinDetails,
};
