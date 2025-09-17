// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { getImgUrl } from './modules/redditSender/unixporn.js';
import { getMemeUrl } from './modules/redditSender/meme.js';
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

// send a r/unixporn image to a channel every 1 hour
setInterval(async () => {
    const postLink = await getImgUrl();
    const channel = client.channels.cache.get('1053394333807673436');
    channel.send(postLink);
    console.log(`Sent a unixporn image: ${postLink}`);
}, 60 * 60 * 1000); // 1 hour in milliseconds

// sent a meme to memes channel every 15 minutes
setInterval(async () => {
    const data = await getMemeUrl();
    const channel = client.channels.cache.get('1055957246158311466');
    channel.send(`From r/${data.subreddit}: ${data.title}`);
    channel.send(data.url);
}, 15 * 60 * 1000); // 15 minutes in milliseconds

// Log in to Discord with your client's token
client.login(token);
