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
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "bender_modal") {
      // Create the modal
      const modal = new ModalBuilder()
        .setCustomId("myModal")
        .setTitle("My Modal");

      // Add components to modal

      // Create the text input components
      const sauceInput = new TextInputBuilder()
        .setCustomId("favoriteSauce")
        // The label is the prompt the user sees for this input
        .setLabel("What's your favorite sauce ?")
        // Short means only a single line of text
        .setStyle(TextInputStyle.Short);

      const jaajInput = new TextInputBuilder()
        .setCustomId("bestJaaJInput")
        .setLabel("Do you prefer JaaJ or JooJ ?")
        // Paragraph means multiple lines of text.
        .setStyle(TextInputStyle.Paragraph);

      // An action row only holds one text input,
      // so you need one action row per text input.
      const firstActionRow = new ActionRowBuilder().addComponents(sauceInput);
      const secondActionRow = new ActionRowBuilder().addComponents(jaajInput);

      // Add inputs to the modal
      modal.addComponents(firstActionRow, secondActionRow);

      // Show the modal to the user
      await interaction.showModal(modal);
    }
  }
};
