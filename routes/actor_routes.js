'use strict';

var Actor = require('../models/actor.js');

module.exports = function(app) {

  app.post('/api/actors', function(req, res) {
    var actor = new Actor(req.body);
    actor.save(function(err, data) {
      if (err) return res.status(500).send('there was an error!');
      res.json(data);
    });
  });

  app.put('/api/actors/:actorId', function(req, res) {
    var actor = req.body;
    delete actor._id;
    Actor.findOneAndUpdate({_id: req.params.actorId}, actor, function(err, data) {
      if (err) return res.status(500).send('there was an error!!');
      res.json(data);
    });
  });

  app.get('/api/actors', function(req, res) {
    Actor.find({}, function(err, data) {
      if (err) return res.status(500).send('there was an error');
      res.json(data);
    });
  });

  app.get('/api/actors/:actorId', function(req, res) {
    Actor.findOne({_id: req.params.actorId}, function(err, data) {
      if (err) return res.status(500).send('there was an error');
      res.json(data);
    });
  });

  app.delete('/api/actors/:actorId', function(req, res) {
    Actor.remove({_id: req.params.actorId}, function(err) {
      if (err) return res.status(500).send('there was an error');
      res.json({msg: 'actor has been deleted'});
    });
  });
};
