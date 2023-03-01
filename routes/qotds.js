const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

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
