import * as fs from 'fs';
let routes = (app) => {
    app.get('/', (req, res) => {
        res.send('BoilerPlate Ping!');
    });
 }

export {routes};