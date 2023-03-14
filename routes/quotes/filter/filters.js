const { default: axios } = require("axios");
const express = require("express");
const quotesInstance = require("../../../instance/quotesInstance");
const router = express.Router();

router.post("/quotes/filter/topic", async (req, res) => {
  quotesInstance
    .get(`/api/quotes/?filter=${req.topic}`)
    .then((response) => {
      const quotes = response.data;
      res.send(quotes);
    })
    .catch((err) => {
      console.error(err);
      res.send("Error fetching quotes.");
    });
});
module.exports = router;
