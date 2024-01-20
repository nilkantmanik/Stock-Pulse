// routes.js
const express = require("express");
const router = express.Router();
const Contacts = require("./models/contactmodel");
const Subscriber = require("./models/subscribemodel");
const { SendMail } = require("./models/Mailer");
const rp = require("request-promise");
const cheerio = require("cheerio");
const axios = require("axios");

router.get("/dummyarray", async (req, res) => {
  // Your /dummyarray route logic
  let d=[
    {
      "1. symbol": "B",
      "2. name": "Barnes Group Inc",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": "1.0000",
    },
    {
      "1. symbol": "B.TRV",
      "2. name": "BCM Resources Corp",
      "3. type": "Equity",
      "4. region": "Toronto Venture",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-05",
      "8. currency": "CAD",
      "9. matchScore": "0.5000",
    },
    {
      "1. symbol": "B02.FRK",
      "2. name": "NUEV.EXP.TEX.INH.EO-016",
      "3. type": "Equity",
      "4. region": "Frankfurt",
      "5. marketOpen": "08:00",
      "6. marketClose": "20:00",
      "7. timezone": "UTC+02",
      "8. currency": "EUR",
      "9. matchScore": "0.3333",
    },
    {
      "1. symbol": "B0R.FRK",
      "2. name": "Bathurst Resources Ltd",
      "3. type": "Equity",
      "4. region": "Frankfurt",
      "5. marketOpen": "08:00",
      "6. marketClose": "20:00",
      "7. timezone": "UTC+02",
      "8. currency": "EUR",
      "9. matchScore": "0.3333",
    },
  ]
  res.status(200).json({
    success: true,
    data: {bestMatches:d}
  });
});

router.get("/suggestion", async (req, res) => {
  // Your /suggestion route logic
  try {
    var keywordurl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${req.query.keyword}&apikey=QLS2K62A5P4W9UAW`;

    const response = await axios.get(keywordurl);

    res.status(200).json({ data: response.data });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

router.get("/getCompanyName", async (req, res) => {
  // Your /getCompanyName route logic
  const options = {
    method: "GET",
    url: "https://stocksearch.p.rapidapi.com/api/stocks",
    params: {
      query: "Apple",
      size: "5",
    },
    headers: {
      "X-RapidAPI-Key": "156d21299dmsh86c6faa73d57da5p1fb822jsnc82fc7d0bf5a",
      "X-RapidAPI-Host": "stocksearch.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post("/contactData", async (req, res) => {
  // Your /contactData route logic

  try {
    const contact = await Contacts.create(req.body);

    res.status(201).json({
      success: true,
      contact,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
});

router.post("/subscribe", async (req, res) => {
  // Your /subscribe route logic
  

  try {
    const existingSubscriber = await Subscriber.findOne({
      email: req.body.email,
    });

    if (!existingSubscriber) {
      const date = new Date();
      const newSubscriber = await Subscriber.create(req.body);

      SendMail(req.body.email);
      console.log("New subscriber added");

      res.status(200).json({ success: true, msg: "subscribed" });
    } else {
      res.status(200).json({ success: false, msg: "already subscribed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

router.get("/getScrapedData", async (req, res) => {
  // Your /getScrapedData route logic
  try {
    const scrapingUrl = `https://www.screener.in/company/${req.query.cName}`;
    const response = await rp({
      uri: scrapingUrl,
      headers: {
        "content-encoding": "gzip",
        vary: "Accept-Encoding",
        vary: "Cookie",
        "x-content-type-options": "nosniff",
        "x-content-type-options": "nosniff",
        "x-frame-options": "DENY",
        "x-frame-options": "SAMEORIGIN",
      },
      gzip: true,
    });

    if (response.statusCode === 200) {
      const $ = cheerio.load(response);

      const MarketCapSelector =
        "#top-ratios > li:nth-child(1) > span.nowrap.value > span";
      const CurrentPriceSelector =
        "#top-ratios > li:nth-child(2) > span.nowrap.value > span";
      const HighSelector =
        "#top-ratios > li:nth-child(3) > span.nowrap.value > span:nth-child(1)";
      const LowSelector =
        "#top-ratios > li:nth-child(3) > span.nowrap.value > span:nth-child(2)";
      const Stock_PESelector =
        "#top-ratios > li:nth-child(4) > span.nowrap.value > span";
      const BookValueSelector =
        "#top-ratios > li:nth-child(5) > span.nowrap.value > span";
      const DividendYieldSelector =
        "#top-ratios > li:nth-child(6) > span.nowrap.value > span";
      const ROCESelector =
        "#top-ratios > li:nth-child(7) > span.nowrap.value > span";
      const ROESelector =
        "#top-ratios > li:nth-child(8) > span.nowrap.value > span";
      const FaceValueSelector =
        "#top-ratios > li:nth-child(9) > span.nowrap.value > span";

      const MarketCap = $(MarketCapSelector);
      const CurrentPrice = $(CurrentPriceSelector);
      const High = $(HighSelector);
      const Low = $(LowSelector);
      const Stock_PE = $(Stock_PESelector);
      const BookValue = $(BookValueSelector);
      const DividendYield = $(DividendYieldSelector);
      const ROC = $(ROCESelector);
      const ROE = $(ROESelector);
      const FaceValue = $(FaceValueSelector);

      const data = {
        MarketCap: MarketCap.text(),
        CurrentPrice: CurrentPrice.text(),
        High: High.text(),
        Low: Low.text(),
        BookValue: BookValue.text(),
        Stock_PE: Stock_PE.text(),
        DividendYield: DividendYield.text(),
        ROC: ROC.text(),
        ROE: ROE.text(),
        FaceValue: FaceValue.text(),
      };
      res.status(200).json(data);
    } else {
      res.status(response.statusCode).send({
        error: "Data not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
});

router.get('/', (req, res) => {
  return res.send('Welcome to Node js, express js in Docker , Kepp going');
});

module.exports = router;
