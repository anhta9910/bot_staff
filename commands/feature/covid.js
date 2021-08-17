const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const { stripIndent } = require("common-tags");

module.exports = {
  name: "covid",
  category: "feature",
  run: async (client, message, args) => {
    const api =
      "https://data.vietnam.opendevelopmentmekong.net/vi/api/3/action/datastore_search?resource_id=713b046b-6594-43bd-acff-7cb344b047c9";
    let res;
    try {
      res = await axios.get(api);
    } catch (e) {
      return message.channel.send("Lỗi rồi chứ còn gì");
    }
    let covidObjHN = res.data.result.records[71];
    let covidObjHCM = res.data.result.records[62];
    let indexHN = Object.values(covidObjHN);
    let indexHCM = Object.values(covidObjHCM);
    ember = new MessageEmbed().setColor("GREEN").addField(
      "TÌNH HÌNH COVID - 19",

      stripIndent`
      **Tỉnh** :${indexHN[1]}  **Số ca mới** :${indexHN[4]}  **Tổng số ca** :${indexHN[2]}
      **Tỉnh** :${indexHCM[1]}  **Số ca mới** :${indexHCM[4]}  **Tổng số ca** :${indexHCM[2]}
      ** Cập nhận đến ngày : ${indexHN[5]}**
      
    
    `
    );
    message.channel.send(ember);
  },
};
