var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var id = mongoose.Types.ObjectId();
var jsonParser = bodyParser.json();
var config = require('./config.js');
var bcrypt = require('bcryptjs');
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(express.static('build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('lisa'));
mongoose.connect('mongodb://localhost/music');
// var passport = require('passport') , LocalStrategy = require('passport-local').Strategy;
// passport.use('local', new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//         }
//         passvalidatePassword(password, user.password, function(error){
//             if(error) {
//                 return done(null, false, { message: 'Incorrect password.' });
//             } else {
//                 return done(null, user);
//             }
//         });
//     });
//   }
// ));
// function isLoggedIn(req, res, next) {
//     console.log('isLoggedIn', req.isAuthenticated());
//     if (req.isAuthenticated())
//         return next();
//     res.sendStatus(401);
// }

// =====================================
// Models ==============================
// =====================================

var User = require('./src/models/users');
var Tour = require('./src/models/tours');
var Vinyl = require('./src/models/vinyl');

// =====================================
// Passport ============================
// =====================================

// function passvalidatePassword(password, userpassword, callback) {
//     bcrypt.compare(password, userpassword, function(err, isValid) {
//         if (err) {
//             callback(err);
//             return;
//         }
//         callback(null, isValid);
//     });
// }
// passport.serializeUser(function(user, done) {
//     console.log('SERIALIZE',user);
//   done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//     console.log('ID', id);
//   User.findById(id, function(err, user) {
//       console.log('USER', user);
//     done(err, user);
//   });
// });
//
// app.use(session({ secret: 'lisa' }));
// app.use(passport.initialize());
// app.use(passport.session());

// // =====================================
// // Creating New Users ==================
// // =====================================

// app.post('/users', jsonParser, function(req, res) {
//     if (!req.body) {
//         return res.status(400).json({
//             message: 'No request body'
//         });
//     }
//     if (!('username' in req.body)) {
//         return res.status(422).json({
//             message: 'Missing field: username'
//         });
//     }
//     var username = req.body.username;
//     if (typeof username !== 'string') {
//         return res.status(422).json({
//             message: 'Incorrect field type: username'
//         });
//     }
//     username = username.trim();
//     if (username === '') {
//         return res.status(422).json({
//             message: 'Incorrect field length: username'
//         });
//     }
//     if (!('password' in req.body)) {
//         return res.status(422).json({
//             message: 'Missing field: password'
//         });
//     }
//     var password = req.body.password;
//     if (typeof password !== 'string') {
//         return res.status(422).json({
//             message: 'Incorrect field type: password'
//         });
//     }
//
//     password = password.trim();
//
//     if (password === '') {
//         return res.status(422).json({
//             message: 'Incorrect field length: password'
//         });
//     }
//     bcrypt.genSalt(10, function(err, salt) {
//         if (err) {
//             return res.status(500).json({
//                 message: 'Internal server error'
//             });
//         }
//         bcrypt.hash(password, salt, function(err, hash) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Internal server error'
//                 });
//             }
//             var user = new User({
//                 username: username,
//                 password: hash
//             });
//             user.save(function(err) {
//                 if (err) {
//                     return res.status(500).json({
//                         message: 'Internal server error'
//                     });
//                 }
//                 return res.status(201).json({});
//             });
//         });
//     });
// });
//
// app.post('/login', passport.authenticate('local'), function(req, res) {
//     console.log('LOGIN', req.user);
//     console.log('isLoggedIn /LOGIN', req.isAuthenticated());
//     return res.status(200).json({});
// });

app.post('/tours', function(req, res) {
    Tour.create({
            title: req.body.title,
            date: req.body.date,
            tickets: req.body.tickets
    }, function(err, tour) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(201).json(tour);
        });
})
app.get('/vinyl', function(req, res) {
    Vinyl.find(function(err, vinyl) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        return res.json(vinyl);
    });
});
app.post('/vinyl', function(req, res) {
    console.log(req.body);
    Vinyl.create({
            title: req.body.title,
            country: req.body.country,
            year: req.body.year
    }, function(err, vinyl) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(201).json(vinyl);
        });
})

app.listen(process.env.PORT || 8080, process.env.IP);
