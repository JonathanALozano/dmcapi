const path = require("path");
const express = require("express");

const charactersRouter = require("./routes/characters");
const gamesRouter = require("./routes/games");
const quotesRouter = require("./routes/quotes");

const app = express();
const PORT = process.env.PORT || 3000;

// Parsear JSON (por si luego agregas endpoints POST)
app.use(express.json());

// Servir frontend estático
app.use(express.static(path.join(__dirname, "..", "public")));

// API routes
app.use("/api/characters", charactersRouter);
app.use("/api/games", gamesRouter);
app.use("/api/quotes", quotesRouter);

// Health check simple
app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "dmc-fan-api" });
});

app.listen(PORT, () => {
  console.log(`Servidor listo en http://localhost:${PORT}`);
});
