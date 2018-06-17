const Discord = require('discord.js');
const bot = new Discord.Client(); 

bot.login('NDU2MTM0Mzc1MTI2NDY2NTcw.DgGfTg.vRPpghEw02PQQWhzHy60KqP3Oeo');

bot.on('message', function (message){
	if(message.content ==='!ibahna'){
		message.reply('Ouiiiiiiii ?');
	} 
});



