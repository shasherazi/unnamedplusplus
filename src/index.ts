import "dotenv/config";
import { Client, GatewayIntentBits, TextChannel } from "discord.js";
import { getGifCities } from "./gifcities.ts";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const channelId = process.env.CHANNEL_ID as string;
const token = process.env.TOKEN as string;

client.once("clientReady", () => {
  console.log("Ready!");
  sendHello();
});

async function sendHello() {
  try {
    const channel = await client.channels.fetch(channelId);

    if (!channel) {
      console.error("Channel not found");
      return;
    }

    if (!channel.isTextBased()) {
      console.error("Channel is not a text channel");
      return;
    }

    const data = await getGifCities();
    await (channel as TextChannel).send(
      `The search term for this gif is: **${data.randomWord}**.\nThe gif is from [this page](${data.gifPageUrl})`,
    );
    await (channel as TextChannel).send(data.gifUrl);
  } catch (error) {
    console.error("Failed to send message:", error);
  }
}

console.log("Logging in...");
client.login(token);
