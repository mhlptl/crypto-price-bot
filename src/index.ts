import Discord from "discord.js";
import {getPrice} from "./api";

const client = new Discord.Client();

const prefix = "$";

client.on("message", async (msg: Discord.Message) => {
	if (msg.author.bot || !msg.content.startsWith(prefix)) return;

	const commandBody = msg.content.slice(prefix.length);
	const command = commandBody.split(" ").shift()?.toUpperCase();

	if (command === undefined || command.length === 0) {
		msg.reply("Please use a valid tag");
		return;
	}
	// call api to get price
	const price = await getPrice(command);

	if (price === -1) {
		msg.reply(`Cannot find cryptocurrency with ticker ${command}`);
		return;
	}
	msg.reply(`Cryptocurrency with ticker ${command} has a price of $${price}`);
});

client.login(process.env.BOT_TOKEN);
