const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

const filePath = path.join(__dirname, "..", "data", "quotes.json");

function readQuotes() {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

// GET /api/quotes
router.get("/", (req, res) => {
  res.json(readQuotes());
});

// GET /api/quotes/random
router.get("/random", (req, res) => {
  const quotes = readQuotes();
  if (quotes.length === 0) return res.status(404).json({ error: "No quotes" });

  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(pick);
});

module.exports = router;
