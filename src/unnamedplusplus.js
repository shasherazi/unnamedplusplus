// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { getImgUrl } from './modules/redditSender/unixporn.js';
import dotenv from 'dotenv';
dotenv.config();
const token = process.env.TOKEN;


// Create a new client instance
const client = new Client({
    intents: [GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
    ],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

// send a r/unixporn image to a channel every 6 hours
setInterval(async () => {
    const postLink = await getImgUrl();
    const channel = client.channels.cache.get('1053394333807673436');
    channel.send(postLink);
}, 10800 * 1000);

// Log in to Discord with your client's token
client.login(token);