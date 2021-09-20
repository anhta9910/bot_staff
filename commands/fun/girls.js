const axios = require("axios");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "girl",
  run: async (client, message, args) => {
    const option = {
      method: "GET",
      url: "https://anhth.xyz/346923913717647.json",
    };
    await axios
      .request(option)
      .then((res) => {
        const count = Math.floor(Math.random() * 2144);
        const url = res.data[count].url;
        const embed = new MessageEmbed().setImage(url).setColor("Blue");
        message.channel.send(embed);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
