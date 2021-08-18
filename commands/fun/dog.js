const axios = require("axios");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "dog",
  category: "fun",
  run: async (client, message, args) => {
    const options = {
      method: "GET",
      url: "https://api.thedogapi.com/v1/images/search",
      headers: {
        "x-rapidapi-key": "d91c478d-67ff-40ab-bcf1-a061dfe9e0a9",
      },
    };
    let dogUrl;
    axios
      .request(options)
      .then(function (res) {
        dogUrl = res.data[0].url;
        const dogEmber = new MessageEmbed().setImage(dogUrl).setColor("Blue");
        message.channel.send(dogEmber);
      })
      .catch(function (e) {
        message.channel.send("Lỗi rồi còn đâu nưa mà nhìn");
      });
  },
};
