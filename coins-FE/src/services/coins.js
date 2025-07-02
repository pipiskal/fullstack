const BE_URL = import.meta.env.VITE_BE_URL;

const getCoinsMarkets = async (page) => {
  try {
    const jsonRes = await fetch(`${BE_URL}/coins?page=${page}`);

    const res = await jsonRes.json();

    return res.data;
  } catch (error) {
    console.log(error);
    // depending on the error we can do what ever we want and handle specifically with the tanstack query
    throw error;
  }
};

const getCoinDetailsById = async (id) => {
  try {
    const jsonRes = await fetch(`${BE_URL}/coins/${id}`);

    const res = await jsonRes.json();

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const COINS = {
  GET_COINS_MARKETS: getCoinsMarkets,
  GET_COIN_DETAILS_BY_ID: getCoinDetailsById,
};

export default COINS;
