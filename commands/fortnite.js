const Discord = require("discord.js")
const botconfig = require("../config/config.json")

const randomPuppy = require("random-puppy")

const fetch = require("node-fetch")


module.exports.run = async (client, message, args) => {
            
            
    let countries = args[0]



     let c = args[1];

        switch(c) {

                case "pc":
                     c = "keyboardMouse"
                    break;
                
                case "switch":
                     c = "gamepad"
                    break;
                
                
                case undefined:
                    
                    
                          c = "all"
                   break;
             
            }

    
    fetch(`https://fortnite-api.com/v1/stats/br/v2?name=${countries}&image=${c}`)
    .then(res => res.json())
    .then(data => {
                

                        let img = data.data.image;

                        let name = data.data.account.name;


                          const embed = new Discord.MessageEmbed() 
            
                         .setTitle("Stats für: " + name)
                          .setImage(img)


                           message.channel.send(embed)
    }) 
        



            
            

}


module.exports.config = {
    name: "fortnite",
    description: "",
    usage: "?fortnite",
    accessableby: "Members",
    aliases: ['m']
}