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

const seila = client.on(Events.MessageCreate, async (msg) => {
  
  await msg.react(client.emojis.cache.find((emoji) => emoji.name == 'ponsone'));
  return msg.channel.name
});

client.login(process.env.TOKEN);

function App() {

  return <div className="App">
    {seila}
  </div>;
}

export default App;
