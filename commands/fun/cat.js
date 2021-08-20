const axios = require("axios");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "cat",
  category: "fun",
  run: async (client, message, args) => {
    const options = {
      method: "GET",
      url: "https://api.thecatapi.com/v1/images/search",
      headers: {
        "x-rapidapi-key": "d91c478d-67ff-40ab-bcf1-a061dfe9e0a9",
      },
    };
    let catUrl;
    axios
      .request(options)
      .then(function (res) {
        catUrl = res.data[0].url;
        const catEmber = new MessageEmbed().setImage(catUrl).setColor("Blue");
        message.channel.send(catEmber);
      })
      .catch(function (e) {
        message.channel.send("Lỗi rồi còn đâu nưa mà nhìn");
      });
  },
};
