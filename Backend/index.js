const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
var nodemailer = require("nodemailer");
// const { json } = require("express");
const mongoClient = require("mongodb").MongoClient;
const rp = require("request-promise");
const cheerio = require("cheerio");
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/dummyarray", async(req, res) => {

  res.status(200).json({data:[
    {
      '1. symbol': 'B',
      '2. name': 'Barnes Group Inc',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-04',
      '8. currency': 'USD',
      '9. matchScore': '1.0000'
    },
    {
      '1. symbol': 'B.TRV',
      '2. name': 'BCM Resources Corp',
      '3. type': 'Equity',
      '4. region': 'Toronto Venture',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'CAD',
      '9. matchScore': '0.5000'
    },
    {
      '1. symbol': 'B02.FRK',
      '2. name': 'NUEV.EXP.TEX.INH.EO-016',
      '3. type': 'Equity',
      '4. region': 'Frankfurt',
      '5. marketOpen': '08:00',
      '6. marketClose': '20:00',
      '7. timezone': 'UTC+02',
      '8. currency': 'EUR',
      '9. matchScore': '0.3333'
    },
    {
      '1. symbol': 'B04.FRK',
      '2. name': 'BOKU INC. REG S DL-0001',
      '3. type': 'Equity',
      '4. region': 'Frankfurt',
      '5. marketOpen': '08:00',
      '6. marketClose': '20:00',
      '7. timezone': 'UTC+02',
      '8. currency': 'EUR',
      '9. matchScore': '0.3333'
    },
    {
      '1. symbol': 'B0F.FRK',
      '2. name': 'PAXMAN AB',
      '3. type': 'Equity',
      '4. region': 'Frankfurt',
      '5. marketOpen': '08:00',
      '6. marketClose': '20:00',
      '7. timezone': 'UTC+02',
      '8. currency': 'EUR',
      '9. matchScore': '0.3333'
    },
    {
      '1. symbol': 'B0M.FRK',
      '2. name': 'ALPINA HOLDINGS',
      '3. type': 'Equity',
      '4. region': 'Frankfurt',
      '5. marketOpen': '08:00',
      '6. marketClose': '20:00',
      '7. timezone': 'UTC+02',
      '8. currency': 'EUR',
      '9. matchScore': '0.3333'
    },
    {
      '1. symbol': 'B0R.FRK',
      '2. name': 'Bathurst Resources Ltd',
      '3. type': 'Equity',
      '4. region': 'Frankfurt',
      '5. marketOpen': '08:00',
      '6. marketClose': '20:00',
      '7. timezone': 'UTC+02',
      '8. currency': 'EUR',
      '9. matchScore': '0.3333'
    },
    {
      '1. symbol': 'B0T.FRK',
      '2. name': 'PROMIMIC AB',
      '3. type': 'Equity',
      '4. region': 'Frankfurt',
      '5. marketOpen': '08:00',
      '6. marketClose': '20:00',
      '7. timezone': 'UTC+02',
      '8. currency': 'EUR',
      '9. matchScore': '0.3333'
    },
    {
      '1. symbol': 'B0Z.FRK',
      '2. name': 'REDELFI SPA',
      '3. type': 'Equity',
      '4. region': 'Frankfurt',
      '5. marketOpen': '08:00',
      '6. marketClose': '20:00',
      '7. timezone': 'UTC+02',
      '8. currency': 'EUR',
      '9. matchScore': '0.3333'
    },
    {
      '1. symbol': 'B00:BE',
      '2. name': 'null',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-04',
      '8. currency': 'USD',
      '9. matchScore': '0.2857'
    }
  ]});

})


app.get("/suggestion", async(req, res) => {
  var keywordurl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${req.query.keyword}&apikey=QLS2K62A5P4W9UWA`;

  const response = await axios.get(keywordurl);

  // console.log(response.data);

  // clg(response.data);

  res.status(200).json({"data":response.data})
  // request.get(
  //   {
  //     url: keywordurl,
  //     json: true,
  //     headers: { "User-Agent": "request" },
  //   },
  //   (err, res, data) => {
  //     if (err) {
  //       console.log("Error:");
  //     } else if (res.statusCode !== 200) {
  //       console.log("Status:");
  //     } else {
  //       response.send(data);
  //       // console.log(data.bestMatches[0]['2. name']);
  //     }
  //   }
  // );


});

app.get("/getCompanyName", async(req, res) => {
  // var options = {
  //   method: "GET",
  //   url: "https://twelve-data1.p.rapidapi.com/symbol_search",
  //   params: { symbol: `${req.query.keyword}`, outputsize: "7" },
  //   headers: {
  //       "x-rapidapi-host": "twelve-data1.p.rapidapi.com",
  //       "x-rapidapi-key": "b697060cf2msh9dbece726f614b4p19ab64jsn16551bb4d43f",
  //     },
  //   };
    
  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         const data = response.data.data.map((c) => {
  //           return {
  //             symbol: c.symbol,
  //             instrument_name: c.instrument_name,
  //             exchange: c.exchange,
  //           };
  //         });
  //         // console.log(data);
  //         res.json(data);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
      // console.log("here");
    
      const axios = require('axios');

      const options = {
        method: 'GET',
        url: 'https://stocksearch.p.rapidapi.com/api/stocks',
        params: {
          query: 'Apple',
          size: '5'
        },
        headers: {
          'X-RapidAPI-Key': '156d21299dmsh86c6faa73d57da5p1fb822jsnc82fc7d0bf5a',
          'X-RapidAPI-Host': 'stocksearch.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
});

app.post("/contactData", (req, res) => {
  //console.log(req.body);
  res.status(200).send("data received");
  const URL = "mongodb://localhost:27017/helputrade";

  mongoClient.connect(URL, async (err, client) => {
    if (err) {
      throw err;
    }
    let dataBase = client.db("helputrade");

    let collection = dataBase.collection("contactData");
    collection.insertOne(req.body, async (error, res) => {
      if (error) {
        throw error;
      }
      console.log("one document inserted");
      client.close();
    });
  });
});

function SendMail(myGmail) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "vspatil8123@gmail.com",
      pass: "xqqhxthncggkurbn",
    },
  });

  var mailOptions = {
    from: "vspatil8123@gmail.com",
    to: myGmail,
    subject: "WELCOME TO STOCK WORLD",
    text: `YOU ARE SUCCESSFULLY SUSCRIBED TO STOCK MARKET.
    "When it comes to investing and stock trading, news and reaction time can make or break an investor. This is the best site for up-to-date financial news."
    THANK YOU FOR SUBSCRIBING.
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

app.post("/subscribe", (req, res) => {
  SendMail(req.body.email);
  const URL = "mongodb://localhost:27017/helputrade";
  mongoClient.connect(URL, async (err, client) => {
    if (err) {
      throw err;
    }
    let dataBase = client.db("helputrade");

    let collection = dataBase.collection("subscribers");

    collection.findOne({ email: req.body.email }, (err, Res) => {
      if (err) {
        throw err;
      }
      if (Res === null) {
        let date = new Date();
        let data = {
          email: req.body.email,
          subscriberDate:
            "" +
            date.getDate() +
            "/" +
            date.getMonth() +
            "/" +
            date.getFullYear(),
        };

        collection.insertOne(data, async (error, result) => {
          if (error) {
            throw error;
          }
          console.log("one document inserted");
          client.close();
        });

        res.status(200).json({ success: true, msg: "subscribed" });
      } else {
        res.status(200).json({ success: false, msg: "alread subscribed" });
      }
    });
  });
});

app.get("/getScrapedData", (req, response) => {
  // console.log(req.query.cName);

  let scrapingUrl = `https://www.screener.in/company/${req.query.cName}`;

  (async () => {
    try {
      let res = await rp({
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
      }).on("response", function (response) {
        global.sattusCode = response.statusCode;
      });
      if (global.sattusCode === 200) {
        let $ = cheerio.load(res);
        let MarketCapSelector =
          "#top-ratios > li:nth-child(1) > span.nowrap.value > span";
        let CurrentPriceSelector =
          "#top-ratios > li:nth-child(2) > span.nowrap.value > span";
        let HighSelector =
          "#top-ratios > li:nth-child(3) > span.nowrap.value > span:nth-child(1)";
        let LowSelector =
          "#top-ratios > li:nth-child(3) > span.nowrap.value > span:nth-child(2)";
        let Stock_PESelector =
          "#top-ratios > li:nth-child(4) > span.nowrap.value > span";
        let BookValueSelector =
          "#top-ratios > li:nth-child(5) > span.nowrap.value > span";
        let DividendYieldSelector =
          "#top-ratios > li:nth-child(6) > span.nowrap.value > span";
        let ROCESelector =
          "#top-ratios > li:nth-child(7) > span.nowrap.value > span";
        let ROESelector =
          "#top-ratios > li:nth-child(8) > span.nowrap.value > span";
        let FaceValueSelector =
          "#top-ratios > li:nth-child(9) > span.nowrap.value > span";

        let MarketCap = $(MarketCapSelector);
        let CurrentPrice = $(CurrentPriceSelector);
        let High = $(HighSelector);
        let Low = $(LowSelector);
        let Stock_PE = $(Stock_PESelector);
        let BookValue = $(BookValueSelector);
        let DividendYield = $(DividendYieldSelector);
        let ROC = $(ROCESelector);
        let ROE = $(ROESelector);
        let FaceValue = $(FaceValueSelector);

        let data = {
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
        response.send(data);
      }
    } catch (er) {
      console.log(er);
      response.status(500).send({
        error: "data not found",
      });
    }
  })();
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
