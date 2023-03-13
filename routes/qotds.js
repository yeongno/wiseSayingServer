const { default: axios } = require("axios");
const express = require("express");
const axios = require("axios");
const router = express.Router();
const https = require("https");
const { default: quotesInstance } = require("../instance/quotesInstance");
const api_key = "37017bba672eb45b94132c5e6f1af6e6";

router.get("/quotes", async () => {
  quotesInstance
    .get("/api/quotes/?page=1", {
      headers: {
        Authorization: `Token ${api_key}`,
      },
    })
    .then((response) => {
      const quotes = response.data.quotes;
      console.log(quotes);
    })
    .catch((err) => {
      console.error(err);
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
