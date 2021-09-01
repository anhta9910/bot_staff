const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const { stripIndent } = require("common-tags");
const dateFormat = require("dateformat");
const cheerio = require("cheerio");
const request = require("request-promise");
const { find } = require("cheerio/lib/api/traversing");

module.exports = {
  name: "covid",
  category: "feature",
  run: async (client, message, args) => {
    await request(
      {
        url: "https://ncov.moh.gov.vn/",
        rejectUnauthorized: false,
      },
      (error, response, html) => {
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html); // load HTML

          let data = $(".col.text-center")
            .find(".font24")
            .map(function (i, el) {
              return $(this).text();
            })
            .toArray();
          const ember = new MessageEmbed().setColor("RED").addField(
            "Cập nhật tình hình Covid",
            stripIndent`**Tổng Số Ca Nhiễm** : ${data[0]}
            **Số Ca Đang** : ${data[1]}
          **Số Ca Khỏi** : ${data[2]}
          **Số Ca Tử Vong** : ${data[3]}
          `
          );
          message.channel.send(ember);
        } else {
          console.log(error);
        }
      }
    );
  },
};
