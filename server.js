'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var app = express();

var url = process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/movie_actor_test';
mongoose.connect(url);

app.use(bodyparser.json());

require('./routes/actor_routes')(app);
require('./routes/movie_routes')(app);

app.set('port', process.env.PORT || 3700);
app.listen(app.get('port'), function() {
  console.log('server running on port: %d', app.get('port'));
});
