import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    googleId: {
        type: String,
        default: null
    },
    givenName: {
    	type: String,
    	default: null
    },
    familyName: {
    	type: String,
    	default: null
    },
    email: {
    	type: String,
    	default:null
    },
    pictureUrl: {
    	type: String,
    	default: null
    },
    chats: [{
    	type: String,
    	default: null
    }]
});


const chatSchema = new Schema({
	id: {
		type: String,
		default: null
	},
	messages: [{
		datatype: {
			type: String,
			default: "text"
		},
		data: String  
	}]
});

let user = model('user', userSchema);
let chat = model('chat', chatSchema);
export {user, chat};