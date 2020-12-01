const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")

const fetch = require("node-fetch")
module.exports.run = async (client, message, args) => {

                                let ok = args[0]
                                
                                
                                const embed = new Discord.MessageEmbed()
                                .setImage(`https://cataas.com/cat/says/${ok}`)


                                message.channel.send(embed)

}


module.exports.config = {
    name: "katze",
    description: "",
    usage: "?katze",
    accessableby: "Members",
    aliases: ['mia']
}