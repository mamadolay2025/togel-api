const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

let keluaranHariIni = null;
let lastGeneratedDate = '';

function getTodayStr() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function generateAngka() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

function getKeluaranHariIni() {
  const today = getTodayStr();
  if (today !== lastGeneratedDate) {
    keluaranHariIni = {
      tanggal: today,
      singapore: generateAngka(),
      hongkong: generateAngka(),
      sydney: generateAngka()
    };
    lastGeneratedDate = today;
  }
  return keluaranHariIni;
}

app.get('/api/keluaran', (req, res) => {
  const result = getKeluaranHariIni();
  res.json(result);
});

app.listen(port, () => {
  console.log(`API Togel jalan di http://localhost:${port}`);
});
