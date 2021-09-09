const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const { stripIndent } = require("common-tags");
const { MessageButton } = require("discord-buttons");

module.exports = {
  name: "covid",
  category: "feature",
  run: async (client, message, args) => {
    const option = {
      method: "GET",
      url: "https://static.pipezero.com/covid/data.json",
    };
    axios
      .request(option)
      .then((res) => {
        const totalCaseVn = res.data.total.internal;
        const todayCaseVn = res.data.today.internal;
        const cvHcm = res.data.locations.find(
          (x) => x.name === "TP. Hồ Chí Minh"
        );
        const cvHn = res.data.locations.find((x) => x.name === "Hà Nội");

        const embedVn = new MessageEmbed().addField(
          "Cập Nhật Tình Hình Covid",
          stripIndent`
        **Tổng Số Ca** : ${totalCaseVn.cases} (Hôm nay +${todayCaseVn.cases})
        **Tử Vong** : ${totalCaseVn.death} (Hôm nay +${todayCaseVn.death})
        **Khỏi** : ${totalCaseVn.recovered} (Hôm nay +${todayCaseVn.recovered})`
        );
        const embedHn = new MessageEmbed().addField(
          `Cập Nhật Tình Hình ${cvHn.name}`,
          stripIndent`
        **Tổng Số Ca** : ${cvHn.cases}
        **Tử Vong** : ${cvHn.death}
        **Số Ca Hôm Nay** : ${cvHn.casesToday}`
        );
        const embedHcm = new MessageEmbed().addField(
          `Cập Nhật Tình Hình ${cvHcm.name}`,
          stripIndent`
        **Tổng Số Ca** : ${cvHcm.cases}
        **Tử Vong** : ${cvHcm.death}
        **Số Ca Hôm Nay** : ${cvHcm.casesToday}`
        );
        const buttonHcm = new MessageButton()
          .setStyle("blurple")
          .setLabel("TP HCM")
          .setID("hcm");
        const buttonHn = new MessageButton()
          .setStyle("red")
          .setLabel("HN")
          .setID("hn");
        message.channel.send(embedVn, { buttons: [buttonHcm, buttonHn] });
        client.on("clickButton", async (button) => {
          if (button.id == "hn") {
            message.channel.send(embedHn);
          }
          if (button.id == "hcm") {
            message.channel.send(embedHcm);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
