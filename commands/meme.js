const Discord = require("discord.js")
const botconfig = require("../config/config.json")

const randomPuppy = require("random-puppy")

module.exports.run = async (client, message, args) => {
            const subReddits = ["dankmeme", "meme", "me_irl"];
            const random = subReddits[Math.floor(Math.random() * subReddits.length)];



            const img = await randomPuppy(random);
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From the /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)



                        

                                            message.channel.send(embed)
}


module.exports.config = {
    name: "meme",
    description: "",
    usage: "?meme",
    accessableby: "Members",
    aliases: ['m']
}