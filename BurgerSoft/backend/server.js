const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bonsoirfsociety2015.',
  database: 'food-basket-db',
});

app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await connection.execute('SELECT name FROM products');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching product names:', error);
    res.status(500).json({ error: 'Failed to fetch product names' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
