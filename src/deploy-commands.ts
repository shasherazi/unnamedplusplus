import { REST, Routes } from "discord.js";
import { gifCommand } from "./commands/gif.ts";

const token = process.env.TOKEN!;
const clientId = process.env.CLIENT_ID!;
const guildId = process.env.GUILD_ID!; // use for fast testing

const rest = new REST({ version: "10" }).setToken(token);

async function deploy() {
  try {
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: [gifCommand.toJSON()],
    });

    console.log("Slash commands deployed.");
  } catch (error) {
    console.error(error);
  }
}

deploy();
