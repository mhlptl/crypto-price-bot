import Discord from "discord.js";
import {getPrice} from "./api";

const client = new Discord.Client();

const prefix = "$";

const help = `
These are the commands the Crypto Price Bot knows:
$TICKER will return the current price of the crytocurrency with the ticker Ticker (i.e. $BTC will return the current price of Bitcoin)\n 
`;

client.on("message", async (msg: Discord.Message) => {
	if (msg.author.bot) return;

	if (msg.content.toLowerCase() === "crypto help") {
		msg.channel.send(help);
		return;
	}

	if (!msg.content.startsWith(prefix)) return;

	const commandBody = msg.content.slice(prefix.length);
	const command = commandBody.split(" ").shift()?.toUpperCase();

	if (command === undefined || command.length === 0) {
		msg.reply("Please use a valid tag");
		return;
	}

	const price = await getPrice(command);

	if (price === -1) {
		msg.reply(`Cannot find cryptocurrency with ticker ${command}`);
		return;
	}
	msg.reply(`Cryptocurrency with ticker ${command} has a price of $${price}`);
});

client.login(process.env.BOT_TOKEN);
