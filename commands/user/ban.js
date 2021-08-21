const { Message } = require("discord.js");
module.exports = {
  name: "ban",
  category: "user",
  run: async (client, message, args) => {
    // if (!message.member.hasPermission("ADMINISTRATOR"))
    //   return message.channel.send(
    //     "Mày đéo có quyền đâu. Khóc với sầu dần đi là vừa"
    //   );
    const member = message.mentions.members.first();
    args.shift();
    const reason = args.join(" ");
    if (!member) return message.channel.send("Làm gì có thằng này");
    member
      .ban({ days: 7, reason: `${reason}` })
      .then(
        message.channel.send(`Đã Ban ${member.displayName} 7 ngày vì ${reason}`)
      )
      .catch(console.error);
  },
};
