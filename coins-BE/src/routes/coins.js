const express = require("express");
const router = express.Router();
const { getTopCoins } = require("../lib/coinGecko");

router.get("/", async (req, res, next) => {
  try {
    const coins = await getTopCoins();
    res.json({
      data: coins,
    });
  } catch (error) {
    // res.status(500).json({ error: "Internal Server Error" });
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const coin = await getCoinDetails(req.params.id);
    if (!coin) {
      return res.status(404).json({ error: "Coin id not found" });
    }
    res.json({
      data: coin,
    });
  } catch (error) {
    next(error);
  }
});
