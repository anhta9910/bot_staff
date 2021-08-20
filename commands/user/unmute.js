const { Message } = require("discord.js");

module.exports = {
  name: "unmute",
  category: "user",
  aliases: ["unm"],
  /**
   * @param {Message} message
   */
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "Mày đéo có quyền đâu. Khóc với sầu dần đi là vừa"
      );
    const Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send("Member not found");

    const role = message.guild.roles.cache.find(
      (r) => r.name.toLowerCase() === "muted"
    );

    await Member.roles.remove(role);

    message.channel.send(`Đã thả Xích ${Member.displayName}`);
  },
};
