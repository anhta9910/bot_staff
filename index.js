const { Client, Message, MessageEmbed, Collection } = require("discord.js");
const client = new Client();
const { token } = require("./token.json");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence({
    activity: { name: "Vẽ Hộ Thảo Real", type: "WATCHING" },
    status: "online",
  });
});

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  const prefix = "_";
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args);
});

client.login(token);
