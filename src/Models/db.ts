import * as mongoose from 'mongoose';

(<any>mongoose).Promise = global.Promise;
mongoose.connect('mongodb://srijan:srijan98@ds040167.mlab.com:40167/college-chat', { useNewUrlParser: true, useUnifiedTopology: true });

export {mongoose};