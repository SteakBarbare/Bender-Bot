const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    if (message.author.bot) return false;

    const quoi = ["Quoi", "Pourquoi"];

    quoi.forEach((word) => {
      if (message.content.includes(word)) {
        message.reply("Feur");
      }
    });

    message.reply("Feur");
  },
};
