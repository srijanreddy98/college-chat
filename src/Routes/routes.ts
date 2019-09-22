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
          console.log(req.user);
        //   res.send("Wow");
          res.redirect('/api/current_user');
        }
      );
      app.get('/api/current_user', (req, res) => {
        if (req.query.client === "true"){
            res.send(req.user);
        } else {
            res.redirect('/pages/chat');
        }
      });
 }

export {routes};