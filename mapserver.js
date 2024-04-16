const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 3000;

// Use cors middleware
app.use(cors());

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/coordinates', (req, res) => {
  // You would fetch your coordinates data from a database or another source
  const coordinates = [
    { lat: 51.505, lng: -0.09 },
    { lat: 51.51, lng: -0.1 },
    // Add more coordinates as needed
  ];
  res.json(coordinates);
});
