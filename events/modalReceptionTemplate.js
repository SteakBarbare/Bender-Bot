const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isModalSubmit()) return;
    // Get the data entered by the user
    const sauce = interaction.fields.getTextInputValue("favoriteSauce");
    const jaaj = interaction.fields.getTextInputValue("bestJaaJInput");
    console.log({ sauce, jaaj });
  }
};
