const express = require("express");
const fetch = require('node-fetch');
global.fetch = fetch;
const Unsplash = require('unsplash-js').default;
const { toJson } = require("unsplash-js");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
// const PORT = 5000;

const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

app.get("/bg", (req, res) => {
  unsplash.photos.getRandomPhoto({ orientation: "landscape" })
    .then(toJson)
    .then(json => {
      res.json({
        imageURL: json.urls.raw,
        url: json.links.html,
        author: json.user.name
      });
    });
});

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));