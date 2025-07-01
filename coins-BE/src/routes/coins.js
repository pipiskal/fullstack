const express = require("express");
const router = express.Router();
const { getMarkets, getCoinDetails } = require("../lib/coinGecko");

router.get("/", async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const itemsPerPage = 50;

    // For simplicity, we are not implementing full pagination in our API as well we will coin Gecko pagination
    // But we need to get the next 50 results to implement the load them on the ui

    // We could get a huge chunk for example all 250 that are permitted and and our own pagination on top.

    const coins = await getMarkets(page, itemsPerPage);

    res.json({
      data: coins,
    });
  } catch (error) {
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

module.exports = router;
