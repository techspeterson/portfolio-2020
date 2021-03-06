const express = require("express");
const fetch = require('node-fetch');
global.fetch = fetch;
const Unsplash = require('unsplash-js').default;
const { toJson } = require("unsplash-js");
require("dotenv").config();
const cors = require("cors");
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

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
        author: {
          name: json.user.name,
          url: json.user.links.html
        }
      });
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));