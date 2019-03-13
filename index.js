// const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const request = require("request");
const ejsLint = require("ejs-lint");

// set the view engine to ejs
app.set("view engine", "ejs");

app.use(express.static("static"));

app.get("/", (req, res) => {
  // fix error handel
  request(
    "https://data.cityofnewyork.us/resource/9895-df76.json",
    (error, response, body) => {
      if (response) {
        console.log(body);
        res.render("pages/index", {
          title: "NYC gun incidents",
          data: [body]
        });
      } else {
        res.send(`<img src="/img/img.jpg" alt="">`);
      }
    }
  );
});

app.get("/img", (req, res) => res.send(`<img src="/img/img.jpg" alt="">`));
app.get("/case/:caseId", (req, res) => {
  // params is een object met de key caseId
  res.send(req.params.caseId);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
