// const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const request = require("request");
const ejsLint = require("ejs-lint");
const compression = require("compression");
const minifyHTML = require("express-minify-html");

// app.use((req, res, next) => {
//   res.append("Access-Control-Allow-Origin", ["*"]);
//   res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.append("Access-Control-Allow-Headers", "Content-Type");
//   res.append("Cache-Control", "max-age=" + 365 * 24 * 60 * 60);
//   next();
// });

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
  request("https://data.cityofnewyork.us/resource/9895-df76.json",(error, response, body) => {
      // very important
      const data = JSON.parse(body);
      const victim = dataFilterMurder(data);
      if (response) {
        res.render("pages/index", {
          title: "NYC gun incidents",
          theme:"#3fa9f5",
          // this is for non manifest stuff
          data: data,
          victim: victim
        });
      } else {
        res.send(`<p>The New-york city database might be down</p>`);
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
      // const map = getMap(victim)
      if (response) {
        res.render("pages/detail", {
          title: "NYC gun incidents",
          // Will this override idk well test would be logical if the manifest ever fails
          theme: "#ff7bac",
          victim: victim
          // ,
          // map: map
        });
      } else {
        res.send(`<p>The New-york city database might be down</p>`);
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

// function getMap(victim) {
//   var map, infoWindow;
//   console.log(victim);
//
//   var locationVictim = {
//     lat: parseFloat(victim[0].latitude),
//     lng: parseFloat(victim[0].longitude)
//   };
//
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: locationVictim,
//     zoom: 19
//   });
//   var marker = new google.maps.Marker({
//     position: locationVictim,
//     map: map,
//     title: parseFloat(victim[0].incident_key)
//   });
//   infoWindow = new google.maps.InfoWindow();
//
// }



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
