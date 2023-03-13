const { default: axios } = require("axios");
const express = require("express");
const quotesInstance = require("../instance/quotesInstance");
const router = express.Router();

router.get("/quotes", async (req, res) => {
  quotesInstance
    .get("/api/quotes/?page=1")
    .then((response) => {
      const quotes = response.data.quotes;
      res.send(quotes);
    })
    .catch((err) => {
      console.error(err);
      res.send("Error fetching quotes.");
    });
});

router.get("/qotd", async (req, res) => {
  try {
    const response = await axios.get("https://favqs.com/api/qotd");
    const data = response.data;
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
