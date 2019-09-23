import {mongoose} from './db';
const { Schema, model } = mongoose;
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
		name: String,
		id: String,
		chatType: String,
		lastmessage: {
			datatype: String,
			data: String,
			timeStamp: String,
			sentBy: String
		},
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
		data: String,
		timeStamp: String,
		sentBy: String
	}]
});

let User = model('user', userSchema);
let Chat = model('chat', chatSchema);
export { User, Chat };