const tmi = require('tmi.js');
const dotenv = require('dotenv').config();
const opts = {
    identity: {
      username: process.env.BOT_NAME,
      password: process.env.BOT_TOKEN,
    },
    channels: [process.env.CHANNEL_NAME],
  };


const client = new tmi.client(opts);
client.on("message", recivedMessage);
client.connect();

function recivedMessage(target, context, msg, bot){

    if(bot){
        return;
    }

    if(msg == "!teste")
    {
        client.say(target, "Hello World! 😎");
    } 
}