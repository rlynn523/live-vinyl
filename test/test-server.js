var chai = require('chai');
var mocha = require('mocha');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
var app = server.app;

var Tour = require('../src/models/tours');
var Vinyl = require('../src/models/vinyl');

chai.use(chaiHttp);

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
    it('connect to search route', function(done) {
        chai.request(app)
            .get('/#/search')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
    });
    it('connect to saved route', function(done) {
        chai.request(app)
            .get('/#/saved')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
    });
    it('connect to sign in route', function(done) {
        chai.request(app)
            .get('/#/sign-in')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
    });
    it('connect to create user route', function(done) {
        chai.request(app)
            .get('/#/create-user')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
    });
});

describe('Testing Routes', function() {
    before(function(done) {
        Vinyl.create({
            title: 'A Moon Shaped Pool',
            country: 'US',
            year: '2016'
        }, function() {
            Tour.create({
                title: 'Radiohead @ Mr. Smalls in Millvale, PA',
                date: '10-10-16',
                tickets: 'available'
            }, function() {
                done();
            });
        });
    });
    after(function(done) {
        Vinyl.remove(function() {
            Tour.remove(function() {
                done();
            });
        });
    });
    it('GET route for saved Vinyl', function(done) {
        chai.request(app)
            .get('/vinyl')
            .end(function(err, res) {
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.be.a('object');
                res.body[0].should.have.property('title');
                res.body[0].title.should.be.a('string');
                res.body[0].should.have.property('country');
                res.body[0].country.should.be.a('string');
                res.body[0].should.have.property('year');
                res.body[0].year.should.be.a('string');
                done();
            });
        });
    it('POST route for saved Vinyl', function(done) {
    chai.request(app)
        .post('/vinyl')
        .send({
            title: 'OK Computer',
            country: 'US',
            year: '1997'
        })
        .end(function(err, res) {
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.title.should.equal('OK Computer');
            res.body.country.should.equal('US');
            res.body.year.should.equal('1997');
            done();
        });
    });
    it('GET route for saved Tours', function(done) {
        chai.request(app)
            .get('/tours')
            .end(function(err, res) {
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.be.a('object');
                res.body[0].should.have.property('title');
                res.body[0].title.should.be.a('string');
                res.body[0].should.have.property('date');
                res.body[0].date.should.be.a('string');
                res.body[0].should.have.property('tickets');
                res.body[0].tickets.should.be.a('string');
                done();
            });
        });
    it('POST route for saved Tours', function(done) {
    chai.request(app)
        .post('/tours')
        .send({
            title: 'Radiohead @ Mr. Smalls',
            date: '10-09-2016',
            tickets: 'Available'
        })
        .end(function(err, res) {
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.title.should.equal('Radiohead @ Mr. Smalls');
            res.body.date.should.equal('10-09-2016');
            res.body.tickets.should.equal('Available');
            done();
        });
    });
});
