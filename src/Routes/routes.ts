import * as passport from 'passport';
import { User } from "../Models/models";

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
      app.post('/api/search_user', (req, res) => {
        User.find({ fullName: new RegExp('\\b'+req.body.searchString, 'i')}).then(
          docs => res.send(docs),
          err => res.send(err)
          )
      });
      app.post('/api/chat/new_message', async (req, res) => {
        const {lastMessage} = req.body;
        for (let i of req.body.users) {
          User.find({id: i.id, 'chats.id': req.body.chatId}).then(
            async docs => {
                if (docs.length > 0) {
                  for (let j in docs[0].chats) {
                    if (docs[0].chats[j].id === chatid) {
                        docs[0].chats[j].lastmessage = lastMessage;
                        await User.where({_id: i._id}).update({$set :{chats: docs[0].chats}});
                    }
                  }
                }
            }
          )
        }
      });
 }

export {routes};
