const axios = require("axios");
const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();

router.get("/latest-rates", async (req, res) => {
  const apiKey = "a63d29a78d2f5a6fe8b9b378a1ff2654";
  //const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}&symbols=USD,AUD,CAD,PLN,MXN`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch latest exchange rates" });
  }
});

module.exports = router;
