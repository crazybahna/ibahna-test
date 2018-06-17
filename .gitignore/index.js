const Discord = require('discord.js');
const bot = new Discord.Client(); 

bot.login(process.env.BOT_TOKEN);

bot.on('message', function (message){
	if(message.content ==='!ibahna'){
		message.reply('Ouiiiiiiii ?');
	} 
	if(message.content ==='!404'){
		message.reply('Tu veux pas apprendre à te débrouiller ?');
	} 
});



