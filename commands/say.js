const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")

module.exports.run = async (client, message, args) => {
                    
                let say = args.slice(0).join(" ")
                
                
                message.channel.send(say)


       }



module.exports.config = {
    name: "say",
    description: "",
    usage: "?say",
    accessableby: "Members",
    aliases: ['rpt']
}