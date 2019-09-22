import * as passport from 'passport';
import { Strategy as GoogleStrategy }  from 'passport-google-oauth2';
import { keys } from '../Keys/keys';
// const {User} = require('../models/models');
// const jwt = require('jsonwebtoken');

passport.serializeUser( (user, done) => {
 console.log(user);
  done(null, user.id);
});
passport.deserializeUser((id,done) => {
  done(null ,id);
  // User.findById(id).then((user) => {
  //   done(null, user);
  // })
})
passport.use(
  new GoogleStrategy(
  {
    clientID: keys.clientID,
    clientSecret: keys.client_secret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  (accessToken,refreshToken, profile, done) => {
    console.log(profile);
    done(null, profile);
  }
));