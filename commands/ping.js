const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")

module.exports.run = async (client, message, args) => {
                    
                    var ping = Date.now()-message.createdTimestamp;
                    message.channel.send("Dein Ping ist `" + `${ping}` + " ms`");


       }



module.exports.config = {
    name: "ping",
    description: "",
    usage: "?ping",
    accessableby: "Members",
    aliases: ['rpt']
}