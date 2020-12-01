const Discord = require("discord.js")
const botconfig = require("../config/config.json")

const randomPuppy = require("random-puppy")

const fetch = require("node-fetch")


const { error } = require("console")
module.exports.run = async (client, message, args) => {


                
            const lon = args[0];
            const lat = args[1];

            const dat = args[2];


            const link = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${dat}&dim=0.15&api_key=TkWzoZLjGxkYchgIAWoPUozBraeanjeDCOfNQqzj`


                console.log(lon)
            
                

            


            let promise = await fetch(link)


                if(promise.ok) {

                    console.log(link)


                        



                            message.channel.send(link)
                } else if(!promise.ok){

                            console.log("SWDNAKDBKQawdqwq")
                }

           /*.then(() => {

                const embed = new Discord.MessageEmbed()
                .setImage(link)


                message.channel.send(embed)

            }); **/

                        
           
                

                
               


}


module.exports.config = {
    name: "nasa",
    description: "",
    usage: "?nasa",
    accessableby: "Members",
    aliases: ['g']
}