const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

const filePath = path.join(__dirname, "..", "data", "games.json");

router.get("/", (req, res) => {
  const raw = fs.readFileSync(filePath, "utf-8");
  const games = JSON.parse(raw);
  res.json(games);
});

module.exports = router;
