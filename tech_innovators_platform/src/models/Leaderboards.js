const mongoose = require('mongoose');

const LeaderboardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    score: { type: Number, required: true }
});

module.exports = mongoose.model('Leaderboards', LeaderboardSchema);