const Discord = require("discord.js")
const botconfig = require("../config/config.json")

const randomPuppy = require("random-puppy")

module.exports.run = async (client, message, args) => {
            
            

    
    let count = 5;

                message.channel.send('*Countdown Startet...*')
            .then((msg) => {

                const counter = setInterval(() => {
                    if (count > 0) {
                      msg.edit(count)
                      count--
                    } else {
                      clearInterval(counter)
                    }
                  }, 1000)
          })
               
            

        }
            



module.exports.config = {
    name: "countdown",
    description: "",
    usage: "?countdown",
    accessableby: "Members",
    aliases: ['m']
}

