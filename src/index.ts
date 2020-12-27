require('dotenv').config();
import Discord from 'discord.js';
import CommandLookup from './utils/CommandLookup';
import EmojiLookup from './utils/EmojiLookup';
import MessageHandler from './controllers/MessageHandler';

const client = new Discord.Client();
const messageHandler = new MessageHandler(process.env.PREFIX);
const emojiLookup = new EmojiLookup();
export { emojiLookup };
const commandLookup = new CommandLookup();
export { commandLookup };

client.on('ready', () => {
  emojiLookup.init(client);
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  messageHandler.handle(msg);
});

client.login(process.env.DISCORD_TOKEN);
