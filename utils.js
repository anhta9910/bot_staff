const checkSameRoom = (message) => {
  if (!message.member.voice.channel)
    return message.reply("Bạn phải vào room để có thể sử dụng lệnh này");
  // if (
  //   !message.guild.member.voice.channelID ||
  //   message.guild.member.voice.channelID == message.member.voice.channelID
  // )
  //   return;
  // return message.reply("Phải chung chuồng với em mới sử dụng được lệnh này");
};

const { MessageEmbed } = require("discord.js");

const noMusicember = () =>
  new MessageEmbed()
    .setColor("RED")
    .setDescription("🛑 | Bạn đang không chơi nhạc");

module.exports = {
  checkSameRoom,
  noMusicember,
};
