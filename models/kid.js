const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kidSchema = new Schema({
  name: {type: String, required: true},
  coins: {type: Number, required: true, default: 0},
  level: {type: Number, required: true, default: 0},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true});

module.exports = mongoose.model('Kid', kidSchema);