'use strict';

var mongoose = require('mongoose');

var actorSchema = mongoose.Schema({
  name: { type: String, required: true},
  gender: { type: String, required: true},
  sizes: {
    shirtSize: { type: String },
    shoeSize: { type: Number }
  },
  availableNow: { type: Boolean },
  moviesFeaturedIn: []
});

module.exports = mongoose.model('Actor', actorSchema);
