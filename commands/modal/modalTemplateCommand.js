const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bender_modal")
    .setDescription("Creates a modal that can be filled by an user"),
  async execute(interaction) {}
};
