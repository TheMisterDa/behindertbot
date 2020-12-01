const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")


module.exports.run = async (client, message, args, ops) => {
    
        const ytdl = require("ytdl-core")
        const stream = { seek: 0, volume: 1 }
        



            

        if(message.guild.me.voiceChannel) return message.channel.send("Der Bot ist schon mit dem Channel verbunden")


        if(!args[0]) return message.channel.send("Bitte einen link angeben")

        

        let validate = await ytdl.validateURL(args[0])


        if(!validate) {


                        let commandFile = require("./search.js")


                        return commandFile.run(client, message, args)
        }

        
        
        let info = await ytdl.getInfo(args[0])


        let connection = await message.member.voice.channel.join()

        

        


        let dispatch = await connection.play(ytdl(args[0], {filter : "audioonly"}))
        

            


            const embed = new Discord.MessageEmbed()
            .setTitle("Jetzt wird gespielt")
            .setDescription(`[${info.videoDetails.title}](https://youtube.com${info.url})`)
           message.channel.send(embed)
}


module.exports.config = {
    name: "play",
    description: "",
    usage: "?play",
    accessableby: "Members",
    aliases: ['ni']
}