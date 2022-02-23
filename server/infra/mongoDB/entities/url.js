const mongoose = require('mongoose');
const db = require('../db')
const Schema = mongoose.Schema;

const shortUrl = new Schema(
  {
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, unique: true},
    count: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }
);
const ShortUrl = db.model('ShortUrl', shortUrl);

module.exports = ShortUrl;