const Discord = require("discord.js")
const botconfig = require("../config/config.json")

const randomPuppy = require("random-puppy")

module.exports.run = async (client, message, args) => {
            
            var st = [`GTA 5`, `VALORANT`, `Schwuchtelnite`, `Warzone`]

            var st1 = st[Math.floor(Math.random() * st.length)];

                var an = [`Es wird ${st1} gespielt egal ob ihr wollt oder nicht`, `Farid hat gesprochen: Er will dass ihr ${st1} spielt`, `Hdf bin beschäftigt`, `Ich hab gesagt ich bin beschäftigt du bastard`, `JUNGE FUCK NICHT AB`, `Spielt ${st1} du kelb`, '!play']


                var an10 = an[Math.floor(Math.random() * an.length)]
                if(an10 === "!play") {
                    const ytdl = require("ytdl-core")
        const stream = { seek: 0, volume: 1 }
        

             let vc = message.guild.channels.cache.find(channel => channel.id === '681809587518701583')

             if(vc != null) {
                            
                        console.log(vc.name + " wurde gefunden")

                        vc.join()
                        .then(connection => {
                                        
                                                console.log("Ok")


                                        const stream = ytdl('https://youtu.be/ivc_9PJycTc', { filter: "audioonly"});

                                        const dispatch = connection.play(stream, stream)

                        })
                        .catch();

             } else {
                    message.reply("Gut dass du auch in einem Channel bist du kek")
             }
                } else {
                    message.channel.send(an10)
                }
            


            

}


module.exports.config = {
    name: "game",
    description: "",
    usage: "?game",
    accessableby: "Members",
    aliases: ['m']
}