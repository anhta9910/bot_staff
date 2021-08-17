const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const { stripIndent } = require("common-tags");

module.exports = {
  name: "quote",
  aliases: ["q"],
  category: "fun",
  run: async (client, message, args) => {
    const api = `https://type.fit/api/quotes`;
    let quotes;
    let quote;
    try {
      quotes = await axios.get(api);
    } catch (e) {
      return message.channel.send("Lỗi mẹ rồi");
    }
    if (quotes.data.length > 0) {
      quote = Math.floor(Math.random() * quotes.data.length);
    }
    ember = new MessageEmbed().setColor("GREEN").addField(
      "LEARN ENGLISH EVERYDAY!",
      stripIndent`**Quote** : ${quotes.data[quote].text}
      **Author** : ${quotes.data[quote].author}
    
    `
    );
    message.channel.send(ember);
  },
};
