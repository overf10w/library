var passport = require('passport');

module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());
    // determine which user data should be stored in the session
    // result of this method is attached to req.session.passport.user (via done callback)
    passport.serializeUser(function (user, done) {
        done(null, user);   // null is err
    });
    // this func is typically used to retrieve the whole object
    // res of this method is attached to req.user (via done callback)
    passport.deserializeUser(function (user, done) {
        done(null, user);   // null is err
    });

    require('./strategies/local.strategy')();
};

