const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")


module.exports.run = async (client, message, args) => {
    

            if(message.author.bot) return;

            

             let vc = message.guild.channels.cache.find(channel => channel.id === '681809587518701583')

             if(vc != null) {
                            
                        console.log(vc.name + " wurde gefunden")

                        vc.leave();

             } 

             
}


module.exports.config = {
    name: "leave",
    description: "",
    usage: "?leave",
    accessableby: "Members",
    aliases: ['ni']
}