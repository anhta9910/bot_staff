const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const { stripIndent } = require("common-tags");

module.exports = {
  name: "cvhn",
  category: "feature",
  run: async (client, message, args) => {
    const option = {
      method: "GET",
      url: "https://api.ncovvn.xyz/cityvn",
    };
    axios
      .request(option)
      .then((res) => {
        const covidHn = res.data.find((x) => x.dia_diem === "Hà Nội");
        const embed = new MessageEmbed().addField(
          `Cập nhật tình hình ${covidHn.dia_diem} tính đến hôm nay`,
          stripIndent`
        **Tổng Số Ca** : ${covidHn.tong_ca_nhiem}
        **Tử Vong** : ${covidHn.tu_vong}`
        );
        message.channel.send(embed);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
