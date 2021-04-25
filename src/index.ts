// import Discord from 'discord.js';

import {getPrice} from "./api";

const data = getPrice();

data.then((data) => {
	const d: APIRequest = data.data;
	console.log(d);
	console.log(d.data["ETH"].quote.USD.price);
});

// const client = new Discord.Client();

// const prefix = '$';

// client.on('ready', () => {
// 	console.log(`Logged in as ${client.user?.username}`);
// });

// client.on('message', (msg: Discord.Message) => {
// 	if(msg.author.bot || !msg.content.startsWith(prefix)) return;

// 	const commandBody = msg.content.slice(prefix.length);
// 	const command = commandBody.split(' ').shift()?.toLowerCase();

// 	if(command === undefined || command.length === 0) {
// 		msg.reply('Please use a valid tag');
// 	}
// 	// call api to get price

// 	msg.reply('Price: ');
// });

// client.login('token');
