import * as passport from 'passport';
let routes = (app) => {
    app.get('/', (req, res) => {
        res.send('BoilerPlate Ping!');
    });
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
      })
      );
      app.get(
        '/auth/google/callback',
         passport.authenticate('google'),
        (req, res) => {
          console.log("I am here");
          res.send("Wow");
        //   res.redirect('/api/current_user');
        }
      );
 }

export {routes};