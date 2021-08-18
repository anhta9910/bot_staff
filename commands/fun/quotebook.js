const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const { stripIndent } = require("common-tags");

module.exports = {
  name: "quotebook",
  aliases: ["qb"],
  category: "fun",
  run: async (client, message, args) => {
    const api = `https://api.hamatim.com/quote`;
    let quotes;
    let quote;
    try {
      quotes = await axios.get(api);
    } catch (e) {
      return message.channel.send("Lỗi mẹ rồi");
    }
    ember = new MessageEmbed()
      .setColor("GREEN")
      .addField(
        "QUOTE FROM BOOK",
        stripIndent`**Quote** : ${quotes.data.text}
        **Author** : ${quotes.data.author}
      `
      )
      .setImage(quotes.data.author_img)
      .setAuthor(quotes.data.book);
    message.channel.send(ember);
  },
};
