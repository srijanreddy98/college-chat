"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var routes = function (app) {
    app.get('/', function (req, res) {
        res.send('BoilerPlate Ping!');
    });
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    app.get('/auth/google/callback', passport.authenticate('google'), function (req, res) {
        console.log("I am here");
        res.send("Wow");
        //   res.redirect('/api/current_user');
    });
};
exports.routes = routes;
//# sourceMappingURL=routes.js.map