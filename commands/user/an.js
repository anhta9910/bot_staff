module.exports = {
  name: "an",
  category: "user",
  aliases: ["a"],
  run: (client, message, args) => {
    message.channel.send(
      "An là chị tao, cũng học lớp Mầm, Trường mầm non Brother"
    );
  },
};
