const express = require("express");
const router = express.Router();
const { Album, Music } = require("../models");

router.get("/", (req, res) => {
  Album.findAll({
    attributes: ["id", "albumTitle", "coverImage", "artist"],
  }).then((result) => {
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(401).send("fetching Album Data Failed");
    }
  });
});

router.get("/detailAlbum:id", (req, res) => {
  Album.findOne({
    attributes: [
      "albumTitle",
      "coverImage",
      "artist",
      "albumKinds",
      "genre",
      "style",
      "agency",
      "distributor",
      "playtime",
    ],
    where: {
      id: req.params.id,
    },
    include: {
      model: Music,
      where: {
        AlbumId: req.params.id,
      },
    },
  }).then((result) => {
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(401).send("fetching detailAlbum Data Failed");
    }
  });
});

module.exports = router;
