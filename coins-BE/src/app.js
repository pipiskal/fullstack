const express = require("express");
const coinsRouter = require("./routes/coins");

const app = express();

app.use(express.json());

app.use("/coins", coinsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

module.exports = app;
