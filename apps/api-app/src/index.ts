import express from "express";

const app = express();
app.use(express.json());

const port = Number(process.env.PORT) || 4000;

// In-memory data – real JSON you can see at GET /api/items
const items = [
  { id: "1", name: "Item One", quantity: 10 },
  { id: "2", name: "Item Two", quantity: 5 },
  { id: "3", name: "Item Three", quantity: 12 },
];

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/items", (_req, res) => {
  res.json(items);
});

app.get("/api/items/:id", (req, res) => {
  const item = items.find((i) => i.id === req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
