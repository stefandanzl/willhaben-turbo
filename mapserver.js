const express = require('express');
const cors = require('cors');
const willhaben = require('willhaben')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

let data = {};

willhaben.getListings('https://www.willhaben.at/iad/gebrauchtwagen/motorrad/motorradboerse?MC_MODEL/MAKE=7771&keyword=exc%20f&YEAR_MODEL_FROM=2012&PRICE_TO=7000&rows=1000').then(json => {
    console.log(json)
    data = json;
})


app.get('/coordinates', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.json(data);
});
