const axios = require("axios");
const NodeCache = require("node-cache");

// const SECONDS_CACHED = 120; // 2 minutes

// cache them for 30 minutes just so i wont spam the server
const SECONDS_CACHED = 1800;

const ROOT_URL = "https://api.coingecko.com/api/v3/";
const DEMO_URL_KEY = "x_cg_demo_api_key";
const CACHE_KEY_FOR_MARKETS = "coin-markets";

const API_KEY = process.env.COINGECKO_API_KEY;

const cache = new NodeCache({ stdTTL: SECONDS_CACHED });

const getMarkets = async () => {
  try {
    const cached = cache.get(CACHE_KEY_FOR_MARKETS);

    if (cached) {
      console.log("I have cached results for the list of markets!");
      return cached;
    }

    console.log("I will serve a fresh list of markets!");

    const { data } = await axios.get(
      `${ROOT_URL}/coins/markets?${DEMO_URL_KEY}y=${API_KEY}&per_page=250&vs_currency=usd&precision=2`
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

    cache.set(CACHE_KEY_FOR_MARKETS, formattedPayload, SECONDS_CACHED);

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
      console.log(`I have cached results for ${id}!`);
      return cached;
    }

    try {
      const { data } = await axios.get(
        `${ROOT_URL}/coins/${id}?${DEMO_URL_KEY}=${API_KEY}&vs_currency=usd`
      );

      cache.set(cacheKey, data, SECONDS_CACHED);

      return data;
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
