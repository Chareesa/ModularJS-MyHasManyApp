'use strict';

process.env.MONGO_URL = 'mongodb://localhost/movie_actor_test';
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = require('chai').expect;
require('../../server');

var expect = chai.expect;

describe('post, get, put, and delete', function() {
  var id1;
  var actor1 = {name: 'Jasmine Tee',
                gender: 'female',
                moviesFeaturedIn: ['Yamhill']
                };
  var id2;
  var movie = {title: 'Yamhill',
               yearReleased: 1942,
               actorsInMovie: ['Jasmine Tee', 'Brittney Bennett']
              };

  it('should create an actor', function(done) {
    chai.request('http://localhost:3700')
    .post('/api/actors')
    .send(actor1)
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body.name).to.eql('Jasmine Tee');
      expect(res.body).to.have.property('_id');
      id1 = res.body._id;
      done();
    });
  });

  it('should get a movie index', function(done) {
    chai.request('http://localhost:3700')
    .get('/api/movies')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(Array.isArray(res.body)).to.be.true;
      done();
    });
  });

  it('should get a single actor', function(done) {
    chai.request('http://localhost:3700')
    .get('/api/actors/' + id1)
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body.name).to.eql('Jasmine Tee');
      done();
    });
  });

  it('should update an actor', function(done) {
    chai.request('http://localhost:3700')
    .put('/api/actors/' + id1)
    .send(actor1)
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body.name).to.eql('Jasmine Tee');
      done();
    });
  });

  it('should eliminate an actor', function(done) {
    chai.request('http://localhost:3700')
    .delete('/api/actors/' + id1)
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body.msg).to.eql('actor has been deleted');
      done();
    });
  });
});
