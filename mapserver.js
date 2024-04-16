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

willhaben.getListings('https://www.willhaben.at/iad/kaufen-und-verkaufen/marktplatz/pc-komponenten/-5882?keyword=rtx&rows=1000').then(json => {
    console.log(json)
    data = json;
})


app.get('/coordinates', (req, res) => {
  // You would fetch your coordinates data from a database or another source
//   const coordinates = [
//     { id: 1, lat: 51.505, lng: -0.09, name: 'Location 1', description: 'This is location 1' },
//     { id: 2, lat: 51.51, lng: -0.1, name: 'Location 2', description: 'This is location 2' },
//     // Add more coordinates with additional information as needed
//   ];
  res.json(data);
});
