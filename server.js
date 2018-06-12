const Discord = require('discord.js');
const client = new Discord.Client();

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login("NDU1NDk5NjI0Mjc1MjQ3MTE1.DgCfNQ.OSNlq8K9bnBvYTHFbupN2kJ14xY");


