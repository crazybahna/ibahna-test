const Discord = require('discord.js');
const bot = new Discord.Client(); 

bot.login(process.env.BOT_TOKEN);

bot.on('message', function (message){
	if(message.content ==='!ibahna'){
		message.reply('Ouiiiiiiii ?');
	} 
});



