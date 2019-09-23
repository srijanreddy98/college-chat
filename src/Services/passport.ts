import * as passport from 'passport';
import { Strategy as GoogleStrategy }  from 'passport-google-oauth2';
import { keys } from '../Keys/keys';
import { User } from "../Models/models";

passport.serializeUser( (user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id,done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
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
    const {id, given_name, family_name, picture, email} = profile;
    if (email.split('@').reverse()[0] !== 'iiits.in') {
      done(null, null);
      return;
    }
    User.find({googleId: profile.id}).then(
      doc => {
        if(doc.length > 0) {
          done(null, doc[0])
        } else {
          let user = new User({
            googleId: id,
            givenName: given_name,
            familyName: family_name,
            fullName: given_name + ' ' + family_name,
            pictureUrl: picture,
            email
          });
          user.save().then(
            doc => done(null, doc),
            err => done(null, null)
          );
        }
      },
      err => done(null, null)
    );
  }
));