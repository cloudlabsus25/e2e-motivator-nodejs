require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());

const motivatorRoutes = require('./routes/motivatorRoutes');
app.use('/api/motivators', motivatorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get('/', (req, res) => {
  res.send('Motivator App Backend is running!');
});

