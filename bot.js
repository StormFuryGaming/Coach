const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Serve') {
    	message.reply('Work in Progress');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Njk0MDI5NTIzNTkwNTc4MjE3.XoG0dw.VYUAq7BCEQkK0V4TVfLxmAHy81U);
