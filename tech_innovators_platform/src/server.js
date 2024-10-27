const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/registration'));
app.use('/api', require('./routes/leaderboard'));

// Home route
app.get('/', (req, res) => {
    res.send("Welcome to Tech Innovators 2024 API");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});