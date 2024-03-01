const {
  ActionRowBuilder,
  Events,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle
} = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isModalSubmit()) return;
    // Get the data entered by the user
    const sauce = interaction.fields.getTextInputValue("favoriteSauce");
    const jaaj = interaction.fields.getTextInputValue("bestJaaJInput");
    console.log({ favoriteColor, hobbies });
  }
};
