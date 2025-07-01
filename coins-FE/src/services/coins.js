const getCoinsMarkets = async (page) => {
  try {
    const jsonRes = await fetch(`http://localhost:4321/coins?page=${page}`);

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
    const jsonRes = await fetch(`http://localhost:4321/coins/${id}`);

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
