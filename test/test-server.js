var chai = require('chai');
var mocha = require('mocha');
var chaiHttp = require('chai-http');
var server = require('../server');
let passport = require('passport');
var should = chai.should();
var app = server.app;
var request = require('supertest');

var Tour = require('../src/models/tours');
var Vinyl = require('../src/models/vinyl');
let User = require('../src/models/users');

chai.use(chaiHttp);
var agent = chai.request.agent(app)

describe('Live Vinyl', function() {
    it('server is running', function(done) {
        chai.request(app)
            .get('/')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
    });
});

describe('Testing Routes', function() {
    beforeEach(function(done) {
        Vinyl.create({
            title: 'A Moon Shaped Pool',
            country: 'US',
            year: '2016',
            userId: '580132dca1b66f0fb89531d8'
        }, function() {
            Tour.create({
                title: 'Radiohead @ Mr. Smalls in Millvale, PA',
                date: '10-10-16',
                tickets: 'available',
                userId: '580132dca1b66f0fb89531d8'
            }, function() {
                done();
            });
        });
    });
    afterEach(function(done) {
        Vinyl.remove(function() {
            Tour.remove(function() {
                done();
            });
        });
	});
    it('GET route for saved Vinyl', function(done) {
        let user = {
            username: 'ryan',
            password: 'rango'
        }
        agent
            .post('/login', passport.authenticate('local'))
            .send(user)
            .then(function(res) {
                agent
                    .get('/vinyl')
                    .auth('ryan', 'rango')
                    .then(function(err, res) {
                        res.body.should.be.a('array');
                        res.body[0].should.have.property('title');
                        res.body[0].title.should.be.a('string');
                        res.body[0].should.have.property('country');
                        res.body[0].country.should.be.a('string');
                        res.body[0].should.have.property('year');
                        res.body[0].year.should.be.a('string');
                        res.body[0].should.have.property('userId');
                        res.body[0].userId.should.be.a('string');
                        done();
                    });
            });
        done();
    })
    it('POST route for saved Vinyl', function(done) {
        let user = {
            username: 'ryan',
            password: 'rango'
        }
        agent
            .post('/login', passport.authenticate('local'))
            .send(user)
            .then(function(res) {
                agent
                    .post('/vinyl')
                    .auth('ryan', 'rango')
                    .send({
                        title: 'OK Computer',
                        country: 'US',
                        year: '1997',
                        userId: res.body._id
                    })
                .then(function(err, res) {
                    res.should.have.status(201);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.title.should.equal('OK Computer');
                    res.body.country.should.equal('US');
                    res.body.year.should.equal('1997');
                    res.body.userId.should.equal('580132dca1b66f0fb89531d8');
                    done();
                });
            });
        done();
    });
    it('DELETE route for saved Vinyl', function(done) {
        let user = {
            username: 'ryan',
            password: 'rango'
        }
        agent
            .post('/login', passport.authenticate('local'))
            .send(user)
            .then(function (res) {
                agent
                .get('/vinyl')
                .auth('ryan', 'rango')
                .then(function(res) {
                    agent
                    .delete('/vinyl/' + res.body[0]._id)
                    .then(function(err, res) {
                        res.should.be.json;
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
                });
            });
        done();
    });

    it('GET route for saved Tours', function(done) {
        let user = {
            username: 'ryan',
            password: 'rango'
        }
        agent
            .post('/login', passport.authenticate('local'))
            .send(user)
            .then(function(res) {
                agent
                    .get('/tours')
                    .auth('ryan', 'rango')
                .then(function(err, res) {
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body[0].should.be.a('object');
                    res.body[0].should.have.property('title');
                    res.body[0].title.should.be.a('string');
                    res.body[0].should.have.property('date');
                    res.body[0].date.should.be.a('string');
                    res.body[0].should.have.property('tickets');
                    res.body[0].tickets.should.be.a('string');
                    res.body[0].should.have.property('userId');
                    res.body[0].userId.should.be.a('string');
                    done();
                });
            });
        done();
    });
    it('POST route for saved Tours', function(done) {
        let user = {
            username: 'ryan',
            password: 'rango'
        }
        agent
        .post('/login', passport.authenticate('local'))
        .send(user)
        .then(function(res) {
            agent
            .post('/tours')
            .auth('ryan', 'rango')
            .send({
                title: 'Radiohead @ Mr. Smalls',
                date: '10-09-2016',
                tickets: 'Available',
                userId: res.body._id
            })
                .then(function(err, res) {
                    res.should.have.status(201);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.title.should.equal('Radiohead @ Mr. Smalls');
                    res.body.date.should.equal('10-09-2016');
                    res.body.tickets.should.equal('Available');
                    res.body.userId.should.equal('580132dca1b66f0fb89531d8');
                    done();
                });
            });
        done();
    });

    it('DELETE route for saved Tours', function(done) {
        let user = {
            username: 'ryan',
            password: 'rango'
        }
        agent
            .post('/login', passport.authenticate('local'))
            .send(user)
            .then(function(res) {
                agent
                .get('/tours')
                .auth('ryan', 'rango')
                .then(function(res) {
                    agent
                    .delete('/tours/' + res.body[0]._id)
                    .then(function(err, res) {
                        res.should.be.json;
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
                    done();
                });
            });
    });
});
