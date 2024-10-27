const express = require('express');
const router = express.Router();
//const Leaderboard = require('../models/Leaderboard');
const Update = require('../models/Update');
const Leaderboard = require('../models/Leaderboards');

// Fetch Leaderboard
router.get('/leaderboard', async (req, res) => {
    try {
        const leaderboard = await Leaderboard.find().sort({ score: -1 });
        res.json(leaderboard);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve leaderboard" });
    }
});

// Fetch Real-Time Updates
router.get('/updates', async (req, res) => {
    try {
        const updates = await Update.find().sort({ date: -1 });
        res.json(updates);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve updates" });
    }
});

module.exports = router;