const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const https = require("https");
const api_key = "37017bba672eb45b94132c5e6f1af6e6";

router.get("/quotes", (req, res) => {
  const options = {
    hostname: "favqs.com",
    path: `/api/quotes/?page=1`,
    headers: {
      Authorization: `Token ${api_key}`,
    },
  };

  https
    .get(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        const quotes = JSON.parse(data).quotes;

        res.send(quotes);
      });
    })
    .on("error", (err) => {
      console.error(err);
      res.status(500).send("Error occurred while fetching quotes");
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
