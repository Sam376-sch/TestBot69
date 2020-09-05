const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { COLOR } = require("../config.json");
module.exports = {
  name: "help",
  description: "Aʟʟ Tʜᴇ Cᴏᴍᴍᴀᴍᴅs Aʀᴇ Dɪsᴘʟᴀʏᴇᴅ Hᴇʀᴇ.",
  aliases: ["h"],
  category: "Info",
  execute(client, message, args) {
    let info = [];
    let music = [];
    let utility = [];
    let fun = [];
    let action = [];
    let moderation = [];
    let prefix = "+";

    if (args[0]) {
      let command = args[0];
      if (client.commands.has(command)) {
        command =
          client.commands.get(command) ||
          client.commands.get(client.aliases.get(command));
        let embed = new MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setThumbnail(message.guild.iconURL())
          .setTitle("Help!")
          .addField(
            "Command Name",
            `${client.capitalize(command.name) || "No Name"}`,
            true
          )
          .addField(
            "Command Description",
            command.description || "No Description",
            true
          )
          .addField("Command Category", command.category || "No Category", true)
          .setColor("00ffff");
        message.channel.send(embed).catch(console.log);
      }
    } else {
      client.commands
        .filter(cmd => cmd.category === "Info")
        .forEach(cmd => info.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Action")
        .forEach(cmd => action.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Fun")
        .forEach(cmd => fun.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Moderation")
        .forEach(cmd => moderation.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Music")
        .forEach(cmd => music.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Utility")
        .forEach(cmd => utility.push(cmd.name));

      let embed = new MessageEmbed()
        .setAuthor("❝Cᴏᴍᴍᴀɴᴅ Sᴇᴄᴛɪᴏɴ❞", client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(COLOR)
        .setDescription(`♪ Cᴏᴍᴍᴀɴᴅ Lɪsᴛ Oғ ${client.user.username}.`)
        .addField(
          `➳ Iɴғᴏ`,
          "``" + prefix + info.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `➸ Aᴄᴛɪᴏɴ`,
          "``" + prefix + action.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `➸ Fᴜɴ`,
          "``" + prefix + fun.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `➸ Mᴏᴅᴇʀᴀᴛɪᴏɴ`,
          "``" + prefix + moderation.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `➸ Mᴜꜱɪᴄ`,
          "``" + prefix + music.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `➸ Uᴛɪʟɪᴛʏ`,
          "``" + prefix + utility.join("``," + "``" + prefix) + "``",
          true
        );
      message.channel.send(embed).catch(console.log);
    }
  }
};
