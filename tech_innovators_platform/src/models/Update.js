const mongoose = require('mongoose');

const UpdateSchema = new mongoose.Schema({
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Update', UpdateSchema);