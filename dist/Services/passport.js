"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var passport_google_oauth2_1 = require("passport-google-oauth2");
var keys_1 = require("../Keys/keys");
// const {User} = require('../models/models');
// const jwt = require('jsonwebtoken');
passport.serializeUser(function (user, done) {
    console.log(user);
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    done(null, id);
    // User.findById(id).then((user) => {
    //   done(null, user);
    // })
});
passport.use(new passport_google_oauth2_1.Strategy({
    clientID: keys_1.keys.clientID,
    clientSecret: keys_1.keys.client_secret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    done(null, profile);
}));
//# sourceMappingURL=passport.js.map