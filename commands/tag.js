const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")

module.exports.run = async (client, message, args) => {
                    
                let args2 = args[0];

                let date = new Date().getDate() + 1;

                            let date100 = new Date().getDate() - 1;
                        switch(args[0]) {

                            case 'morgen':
                                message.channel.send("Morgen ist der " + date + "te" )
                            break;
                            
                            case 'gestern':
                                message.channel.send("Gestern war der " + date100 + "te")
                                break;
                        }


       }



module.exports.config = {
    name: "tag",
    description: "",
    usage: "?tag",
    accessableby: "Members",
    aliases: ['rpt']
}