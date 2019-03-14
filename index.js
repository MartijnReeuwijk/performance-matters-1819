// const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const request = require("request");
const ejsLint = require("ejs-lint");
const compression = require("compression");
const minifyHTML = require("express-minify-html");

// Used to minifyHTML the HTML
app.use(
  minifyHTML({
    override: true,
    exception_url: false,
    htmlMinifier: {
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes: true,
      minifyJS: true
    }
  })
);
// Used to compress with G-zip
app.use(compression());
// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static("static"));
app.get("/", (req, res) => {
  // fix error handel
  request(
    "https://data.cityofnewyork.us/resource/9895-df76.json",
    (error, response, body) => {
      // very important
      const data = JSON.parse(body);
      const victim = dataFilterMurder(data);
      if (response) {
        res.render("pages/index", {
          title: "NYC gun incidents",
          data: data,
          victim: victim
        });
      } else {
        res.send(`<p>The data doesnt work</p>`);
      }
    }
  );
});

app.get("/img", (req, res) => res.send(`<img src="/img/img.jpg" alt="">`));
// de data in de results is mega shit moet ik nog fixen zeker voor performance
app.get("/:caseId", (req, res) => {
  request(
    "https://data.cityofnewyork.us/resource/9895-df76.json",
    (error, response, body) => {
      const data = JSON.parse(body);
      const id = req.params.caseId;
      const victim = victimFilter(data, id);
      if (response) {
        res.render("pages/detail", {
          title: "NYC gun incidents",
          victim: victim
        });
      } else {
        res.send(`<p>The data doesnt work</p>`);
      }
    }
  );
});

// maak dit objects met code
function dataFilterMurder(data) {
  return data.filter(victim => victim.statistical_murder_flag == true);
}

function victimFilter(data, id) {
  return data.filter(victim => victim.incident_key == id);
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
