const { Message } = require("discord.js");
module.exports = {
  name: "khen",
  category: "user",
  run: (client, message, args) => {
    const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
    if (!member) return message.channel.send("Làm gì có thằng này");
    message.channel.send(`Bạn ${member.displayName} giỏi cực kì nhé`);
  },
};
