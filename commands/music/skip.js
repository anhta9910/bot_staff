const { checkSameRoom, noMusicember } = require("../../utils");
module.exports = {
  name: "skip",
  description: "Bỏ qua bài hát",
  category: "music",
  run: async (client, message, args) => {
    if (checkSameRoom(message)) return;
    if (!client.player.isPlaying(message))
      return message.channel.send(noMusicember());
    await client.player.skip(message);
    await message.react("⏭️");
  },
};
