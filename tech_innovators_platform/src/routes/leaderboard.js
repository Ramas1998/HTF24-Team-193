const express = require('express');
const router = express.Router();
const Individual = require('../models/Individual');
const Team = require('../models/Team');

// Individual Registration
router.post('/register/individual', async (req, res) => {
    try {
        const { name, email } = req.body;
        const individual = new Individual({ name, email });
        await individual.save();
        res.status(201).json({ message: "Individual registered successfully" });
    } catch (error) {
        res.status(400).json({ error: "Registration failed" });
    }
});

// Team Registration
router.post('/register/team', async (req, res) => {
    try {
        const { teamName, teamLeader, teamLeaderEmail } = req.body;
        const team = new Team({ teamName, teamLeader, teamLeaderEmail });
        await team.save();
        res.status(201).json({ message: "Team registered successfully" });
    } catch (error) {
        res.status(400).json({ error: "Registration failed" });
    }
});

module.exports = router;