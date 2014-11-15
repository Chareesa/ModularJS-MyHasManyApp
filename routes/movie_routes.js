'use strict';

var Movie = require('../models/movie.js');

module.exports = function(app) {

  //creates a movie
  app.post('/api/movies', function(req, res) {
    var movie = new Movie(req.body);
    movie.save(function(err, data) {
      if (err) return res.status(500).send('there was an error!');
      res.json(data);
    });
  });

  //updates a movie
  app.put('/api/movies/:movieId', function(req, res) {
    var movie = req.body;
    delete movie._id;
    Movie.findOneAndUpdate({_id: req.params.movieId}, movie, function(err, data) {
      if (err) return res.status(500).send('there was an error!!');
      res.json(data);
    });
  });

  //displays all movies created
  app.get('/api/movies', function(req, res) {
    Movie.find({}, function(err, data) {
      if (err) return res.status(500).send('there was an error');
      res.json(data);
    });
  });

  //displays a movie
  app.get('/api/movies/:movieId', function(req, res) {
    Movie.findOne({_id: req.params.movieId}, function(err, data) {
      if (err) return res.status(500).send('there was an error');
      res.json(data);
    });
  });

  //deletes a movie
  app.delete('/api/notes/:movieId', function(req, res) {
    Movie.remove({_id: req.params.movieId}, function(err) {
      if (err) return res.status(500).send('there was an error');
      res.json({msg: 'moviehas been deleted'});
    });
  });
};
