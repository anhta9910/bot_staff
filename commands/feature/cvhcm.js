const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const { stripIndent } = require("common-tags");

module.exports = {
  name: "cvhcm",
  category: "feature",
  run: async (client, message, args) => {
    const option = {
      method: "GET",
      url: "https://api.ncovvn.xyz/cityvn",
    };
    axios
      .request(option)
      .then((res) => {
        const covidHcm = res.data.find((x) => x.dia_diem === "TP. Hồ Chí Minh");
        const embed = new MessageEmbed().addField(
          `Cập nhật tình hình ${covidHcm.dia_diem} tính đến hôm nay`,
          stripIndent`
        **Tổng Số Ca** : ${covidHcm.tong_ca_nhiem}
        **Tử Vong** : ${covidHcm.tu_vong}`
        );
        message.channel.send(embed);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
