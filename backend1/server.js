require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const productRoutes = require('./routes/products');
const formRoutes = require('./routes/form');


const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/form', formRoutes);


const PORT = process.env.PORT || 5000;

console.log('Starting server...');
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
