import { SlashCommandBuilder } from "discord.js";

export const gifCommand = new SlashCommandBuilder()
  .setName("gif")
  .setDescription("Fetch a GIF from GifCities")
  .addStringOption((option) =>
    option
      .setName("search")
      .setDescription("Search term to look up")
      .setRequired(false),
  );
