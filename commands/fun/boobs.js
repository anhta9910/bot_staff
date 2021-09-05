const { MessageEmbed } = require("discord.js");
const API = require("anime-images-api");
const images_api = new API();

const { stripIndent } = require("common-tags");

module.exports = {
  name: "boobs",
  category: "fun",
  run: async (client, message, args) => {
    let img = await images_api.nsfw.boobs();
    const URL = img.response.url;
    embed = new MessageEmbed().setImage(URL).setURL(URL).setColor("PINK");
    message.channel.send(embed);
  },
};
