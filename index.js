const express = require('express');
const app = express();
const cors = require('cors');
const products = require('./products');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Bored Gamers API');
});

app.get('/products', (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 3001;
app.listen(port, console.log(`Server running on port ${port}`)); 
