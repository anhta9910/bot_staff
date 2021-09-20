const axios = require("axios");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "girl",
  run: async (client, message, args) => {
    const option = {
      method: "GET",
      url: "https://anhth.xyz/girls.json",
    };
    await axios
      .request(option)
      .then((res) => {
        const count = Math.floor(Math.random() * 34018);
        console.log(count);
        const url = res.data[count].url;
        console.log(url);
        const embed = new MessageEmbed().setImage(url).setColor("Blue");
        message.channel.send(embed);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
