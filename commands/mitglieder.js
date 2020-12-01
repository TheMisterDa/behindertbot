const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")


module.exports.run = async (client, message, args) => {
    let myGuild = client.guilds.cache.get('681809587518701579');
    let memberCount = myGuild.memberCount;
    let roleCount = myGuild.rolesCount;
        message.channel.send("**" + memberCount + "**" + " Mitglieder \n" + `**${message.guild.roles.size}**` + " Rollen" );
}


module.exports.config = {
    name: "mitglieder",
    description: "",
    usage: "?mitglieder",
    accessableby: "Members",
    aliases: ['mi']
}