import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as passport from 'passport';
import * as cookieParser from 'cookie-parser';
import * as cookieSession from 'cookie-session';
require('./Services/passport');
// import * as path from 'path';
export default class App {
    app: any;
    constructor() {
        this.app = express();
        this.app.use(cookieParser());
        this.app.use(
            cookieSession({
              maxAge: 30 * 24 * 3600 * 1000,
              keys: ['cookieKey']
            })
          );
        this.app.use(bodyParser.json({
        // parameterLimit: 1000000,
        limit: '50mb',
        // extended: true
        }));
        this.app.use(bodyParser.urlencoded({
        parameterLimit: 1000000,
        limit: '50mb',
        extended: true
        }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }
    serve() {
        const port = process.env.PORT || 3000;
        this.app.listen(port, () => console.log(`Server is up and on port ${port}`))
    }
    setRoutes(routes) {
        routes(this.app);
        this.app.use(express.static(__dirname + '/frontend'));
        this.app.get('/*', function (req, res) {
        // res.sendFile(path.join(__dirname + '/frontend', 'index.html'));
        });
    }
}