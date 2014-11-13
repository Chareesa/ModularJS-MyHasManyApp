'use strict';

var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
  title: { type: String, required: true},
  yearReleased: { type: Number, require: true },
  actorsInMovie: []

});

module.exports = mongoose.model('Movie', movieSchema);
