var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongodb = require('mongodb').MongoClient;

module.exports = function () {
    passport.use(new LocalStrategy(
    // JSON obj
    {
        // By default, LocalStrategy expects to find credentials in parameters named username and password.
        // If you prefer to name these fields differently, options are available to change the defaults.
        usernameField: 'userName', // index.ejs - lines 112-113
        passwordField: 'password'
    },
    // func (to verify user credentials)
    function(username, password, done) {
        var url = 'mongodb://localhost:27017/libraryApp';

        mongodb.connect(url, function (err, db) {
            var collection = db.collection('users');
            collection.findOne({
                username: username
            },
            function (err, results) {
                if (results.password === password) {
                    var user = results;
                    done(null, user);
                } else {
                    done(null, false, {message: 'Bad password'});
                }
            });
        });
    }));
};
