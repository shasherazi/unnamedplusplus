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

// send a meme immediately at startup
async function sendMeme() {
    const data = await getMemeUrl();
    const channel = client.channels.cache.get('1055957246158311466');
    channel.send(`From r/${data.subreddit}: ${data.title}`);
    channel.send(data.url);
}

// send a unixporn image immediately at startup
async function sendUnixporn() {
    const data = await getImgUrl();
    const channel = client.channels.cache.get('1053394333807673436');
    channel.send(`Title: ${data.title}`);
    channel.send(`<${data.postLink}>`);
    channel.send(data.url);
    console.log(`Sent a unixporn image: ${data.postLink}`);
}

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);

    // call once immediately
    sendMeme();
    sendUnixporn();

    // then schedule repeats
    setInterval(sendMeme, 15 * 60 * 1000);
    setInterval(sendUnixporn, 60 * 60 * 1000);
});

// Log in to Discord with your client's token
client.login(token);
