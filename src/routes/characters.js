const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

const filePath = path.join(__dirname, "..", "data", "characters.json");

function readCharacters() {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

// GET /api/characters
// Opcional: ?q=vergil (busca por nombre)
router.get("/", (req, res) => {
  const q = (req.query.q || "").toLowerCase();
  const characters = readCharacters();

  const filtered = q
    ? characters.filter(c => c.name.toLowerCase().includes(q))
    : characters;

  res.json(filtered);
});

// GET /api/characters/:id
router.get("/:id", (req, res) => {
  const characters = readCharacters();
  const found = characters.find(c => c.id === req.params.id);

  if (!found) return res.status(404).json({ error: "Character not found" });
  res.json(found);
});

module.exports = router;
