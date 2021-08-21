const { getAudioUrl } = require("google-tts-api");

module.exports = {
  name: "spk",
  category: "fun",
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send("Nhập mẹ mày đi");
    const string = args.join(" ");
    if (string.length > 200) return message.channel.send("200 kí tự thôi");
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply("Vào room thì tao mới nói được");
    const audioUrl = await getAudioUrl(string, {
      lang: "vi",
      slow: false,
      host: "https://translate.google.com",
      timeout: 1000,
    });
    try {
      voiceChannel.join().then((connection) => {
        const dispatcher = connection.play(audioUrl);
        dispatcher.on("finish", () => {
          voiceChannel.leave();
        });
      });
    } catch (e) {
      message.channel.send("Bot lỗi rồi , thử lại đi");
      console.error(e);
    }
  },
};
