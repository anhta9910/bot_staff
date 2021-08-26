const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const { stripIndent } = require("common-tags");
const dateFormat = require("dateformat");

module.exports = {
  name: "covid",
  category: "feature",
  run: async (client, message, args) => {
    const api = "https://api.covid19api.com/dayone/country/vn";
    let res;
    try {
      res = await axios.get(api);
    } catch (e) {
      return message.channel.send("Lỗi rồi chứ còn gì");
    }
    let count = res.data.pop();
    let date = dateFormat(count.Date, "h:MM:ssTT, dd/mm/yyyy");
    const ember = new MessageEmbed().setColor("RED").addField(
      "Cập nhật tình hình Covid",
      stripIndent`**Tổng Số Ca Nhiễm** : ${count.Confirmed}
    **Số Ca Tử Vong** : ${count.Deaths}
    **Số liệu được cập nhật đến ngày** ${date}
    `
    );
    message.channel.send(ember);
  },
};
