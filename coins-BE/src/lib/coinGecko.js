const axios = require("axios");

const NodeCache = require("node-cache");

const SECONDS_CACHED = 120; // 2 minutes

const cache = new NodeCache({ stdTTL: SECONDS_CACHED });

const getMarkets = async () => {
  try {
    const cached = cache.get("coin-markets");

    if (cached) {
      console.log("I have cached results for the list of markets!");
      return cached;
    }

    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250"
    );

    cache.set("top-coins", data, SECONDS_CACHED);

    return data;
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
      const data = await request(
        `https://api.coingecko.com/api/v3/coins/${id}`
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
