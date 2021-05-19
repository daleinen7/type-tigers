const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  word: {type: String, required: true},
  // level: {type: Number, required: true}
}, {timestamps: true});

module.exports = mongoose.model('Word', wordSchema);