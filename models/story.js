const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  word: {type: String, required: true},
  sentence: {type: String, default: ''},
  image: {type: String, default: ''},
}, {timestamps: true});

const storySchema = new Schema({
  name: {type: String, required: true},
  grade: {type: Number, default: 0},
  words: [wordSchema],
}, {timestamps: true});

module.exports = mongoose.model('Story', storySchema);