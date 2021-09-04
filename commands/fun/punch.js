const { MessageEmbed } = require("discord.js");
const API = require("anime-images-api");
const images_api = new API();

const { stripIndent } = require("common-tags");

module.exports = {
  name: "punch",
  category: "fun",
  run: async (client, message, args) => {
    const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
    let img = await images_api.sfw.punch();
    const URL = img.response.url;
    embed = new MessageEmbed()
      .setImage(URL)
      .setURL(URL)
      .setColor("RED")
      .setDescription(`${member.displayName} đã bị đấm thật mạnh`);
    message.channel.send(embed);
  },
};
