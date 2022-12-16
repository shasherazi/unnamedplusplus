// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
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
    // send message to a channel
    const channel = client.channels.cache.get('1053381439195979786');
    channel.send('Hello world!');
});


client.on(Events.MessageCreate, message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

// Log in to Discord with your client's token
client.login(token);