const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const { stripIndent } = require("common-tags");

module.exports = {
  name: "instagram",
  aliases: ["insta"],
  category: "fun",
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send("Vui lòng nhập tên instagram");
    } else {
      return message.channel.send("Bot lỗi rồi từ từ tao sửa");
    }
    // const instagram_id = args.join(" ");
    // const url = `https://instagram.com/${instagram_id}/channel/?__a=1`;
    // let res;
    // try {
    //   res = await axios.get(url);
    // } catch (e) {
    //   return message.channel.send("Tên instagram của bạn không hợp lệ");
    // }
    // const account = res.data.graphql.user;
    // const embed = new MessageEmbed()
    //   .setColor("RANDOM")
    //   .setTitle("account.full_name")
    //   .setURL(`https://www.instagram.com/${instagram_id}/`)
    //   .setThumbnail(account.profile_pic_url_hd)
    //   .addField(
    //     "Thông tin cá nhân",
    //     stripIndent`**-Tên người dùng :** ${account.username}
    //   **-Tên đầy đủ :** ${account.full_name}
    //   **-Bio :** ${
    //     account.biography.length == 0 ? "Không có" : account.biography
    //   }
    //   **-Số  bài đăng : ** ${account.edge_owner_to_timeline_media.count}
    //   **-Số  người theo dõi : **${account.edge_followed_by.count}
    //   **-Số người dõi theo : **${account.edge_follow.count}
    //   **-Tài khoản private ? : ** ${account.is_private ? "Có" : "Không"} `
    //   );
    // message.channel.send(embed);
  },
};
