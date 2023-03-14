const { default: axios } = require("axios");
const express = require("express");
const quotesInstance = require("../../../instance/quotesInstance");
const router = express.Router();

router.get("/quotes/filter/inspiration", async (req, res) => {
  quotesInstance
    .get("/api//quotes?page=1&filter=inspiration")
    .then((response) => {
      const quotes = response;
      res.send(quotes);
    })
    .catch((err) => {
      console.error(err);
      res.send("Error fetching quotes.");
    });
});

module.exports = router;
