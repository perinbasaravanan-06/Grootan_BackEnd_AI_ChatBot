const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  query: { type: String, required: true },
  detections: { type: Array, default: [] }, // e.g. [{type:'email', text:'x'}]
  ip: { type: String }, // optional
  createdAt: { type: Date, default: Date.now, index: true }
});

module.exports = mongoose.model('SearchHistory', searchSchema);
