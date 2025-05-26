// index.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

function random4Digits() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

app.get("/api/keluaran", (req, res) => {
  const keluaran = {
    tanggal: new Date().toISOString().slice(0, 10),
    singapore: random4Digits(),
    hongkong: random4Digits(),
    sydney: random4Digits(),
    cambodia: random4Digits(),
    taiwan: random4Digits(),
    china: random4Digits(),
    japan: random4Digits(),
    korea: random4Digits(),
    macau: random4Digits(),
    toto4d: random4Digits(),
  };
  res.json(keluaran);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Togel API running on port ${PORT}`);
});
