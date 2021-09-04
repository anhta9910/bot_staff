const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const { stripIndent } = require("common-tags");

module.exports = {
  name: "tratu",
  category: "noichu",
  run: async (client, message, args) => {
    const words = args[0];
    const options = {
      method: "GET",
      url: `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`,
    };

    axios
      .request(options)
      .then(function (res) {
        data = res.data[0].meanings[0];
        const wordType = data.partOfSpeech;
        const definitionWord = data.definitions[0];

        const embed = new MessageEmbed().setColor("BLUE").addField(
          `${args[0].toUpperCase()}`,
          stripIndent`
            **Loại từ** : ${wordType}
            **Dịch Nghĩa** : ${definitionWord.definition}
            **Ví Dụ** : ${definitionWord.example}`
        );

        message.channel.send(embed);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
