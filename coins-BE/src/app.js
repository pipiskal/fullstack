const express = require("express");
const cors = require("cors");
const coinsRouter = require("./routes/coins");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    origin: "http://localhost:4173",
  })
);

app.use("/coins", coinsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

module.exports = app;
