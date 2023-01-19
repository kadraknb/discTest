const {
  Client,
  Events,
  GatewayIntentBits: { Guilds, GuildMessages, GuildMessageReactions },
} = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({
  intents: [Guilds, GuildMessages, GuildMessageReactions],
});

client.on(Events.MessageCreate, async (msg) => {
  msg.channel.name
  console.log("🚀 ~ file: index.js:16 ~ client.on ~ msg.channel.name", msg.channel.name)
  
  await msg.react(client.emojis.cache.find((emoji) => emoji.name == 'ponsone'));
});

client.login(process.env.TOKEN);
