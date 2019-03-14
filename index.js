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
      const victim = data.filter(
        victim => victim.statistical_murder_flag == true
      );
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
app.get("/:caseId", (req, res) => {
  // params is een object met de key caseId
  res.send(req.params.caseId);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
