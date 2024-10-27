const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    teamName: { type: String, required: true },
    teamLeader: { type: String, required: true },
    teamLeaderEmail: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Team', TeamSchema);