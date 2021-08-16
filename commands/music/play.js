const { checkSameRoom } = require("../../utils");

module.exports = {
  name: "play",
  aliases: ["p"],
  category: "music",
  description: "Hát từ Zoo tu be",
  run: async (client, message, args) => {
    if (checkSameRoom(message)) return;
    await client.player.play(message, args.join(" "), true);
  },
};
