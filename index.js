const { Client, Collection, Intents } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});
const { token } = require("./token.json");
const { Player } = require("discord-player");
const player = new Player(client, {
  ytdlOptions: { filter: "audioonly" },
});

client.player = player;
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence({
    activity: { name: "_+Lệnh", type: "PLAYING" },
    status: "online",
  });
});

client.player.on("trackStart", (message, track) =>
  message.channel.send(`🎶 Đang chơi bài \`${track.title}\`...`)
);
client.player.on("trackAdd", (message, queue, track) =>
  message.channel.send(`✔️ Đã thêm \`${track.name}\` vào hàng chờ `)
);
client.player.on("playlistAdd", (message, queue, playlist) =>
  message.channel.send(`📝 Đã thêm \`${playlist.tracks.length}\`vào hàng chờ`)
);

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
  if (command) {
    if (command.category === "music" && !message.member.voice.channel)
      return message.channel.send("Vui lòng vào room voice để nghe em hát ");
    command.run(client, message, args);
  }
});

client.login(token);
