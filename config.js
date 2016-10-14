var db = process.env.NODE_ENV === 'production' ?
    'mongodb://ryanlynn:rango123@ds027409.mlab.com:27409/heroku_scd828cw' :
    'mongodb://localhost/music';
exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL || db;
exports.PORT = process.env.PORT || 8080;
