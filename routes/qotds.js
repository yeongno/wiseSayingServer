const { default: axios } = require("axios");
const express = require("express");
const quotesInstance = require("../instance/quotesInstance");
const router = express.Router();
const { translateText } = require("../common/translate");

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

// 번역할 텍스트와 번역할 언어 코드를 입력합니다.
translateText("Hello, World!", "es")
  .then((translation) => {
    console.log(`Translated text: ${translation}`);
  })
  .catch((error) => {
    console.error(error);
  });
router.get("/qotd", async (req, res) => {
  try {
    const response = await axios.get("https://favqs.com/api/qotd");
    const data = response.data.body;
    translateText(data, "ko")
      .then((translation) => {
        console.log(`Translated text: ${translation}`);
        res.send(data);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
