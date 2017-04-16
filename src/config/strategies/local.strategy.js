var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

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
        var user = {
            username: username,
            password: password
        };
        // verify callback: supply Passport with user that authenticated (read docs)
        done(null, user);
    }));
};
