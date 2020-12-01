const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")



module.exports.run = async (client, message, args) => {
            
                    let number = args[0]

                    message.channel.bulkDelete(number)
                        message.channel.send(`**${number}** Nachrichten wurden gelöscht du kelb`)
                        .then((msg) => {
                            setTimeout(function() {
                                msg.delete()
                    }, 3000)});  
                    
                    

       }



module.exports.config = {
    name: "clear",
    description: "",
    usage: "?clear",
    accessableby: "Members",
    aliases: ['rpt']
}