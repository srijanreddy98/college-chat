import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    googleId: {
        type: String,
        default: null
    },
});

let user = model('user', userSchema);

