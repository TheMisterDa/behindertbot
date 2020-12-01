const Discord = require("discord.js")
const botconfig = require("../config/config.json")

const randomPuppy = require("random-puppy")

module.exports.run = async (client, message, args) => {
            
            var st = [`Schere`, `Papier`, `Stein`]

            var st1 = st[Math.floor(Math.random() * st.length)];
            
            


            message.channel.send(st1)

}


module.exports.config = {
    name: "spiel",
    description: "",
    usage: "?spiel",
    accessableby: "Members",
    aliases: ['m']
}