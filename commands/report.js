const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")


module.exports.run = async (client, message, args) => {
       message.delete()

       let target = message.mentions.members.first() || message.guild.members.cache.get(args[0])




       if(!target) return message.reply("Nenn auch einen echten Nutzer du idiot wie kann man nur so dumm sein").then(m => m.delete(15000))


       let reason = args.slice(1).join(" ")


       if(!reason) return message.channel.send("Grund angeben... omg benutz etwas von deinem Gehirn").then(m => m.delete(15000))


       let sChannel = message.guild.channels.cache.find(x => x.name === "moderation")


       message.channel.send("Deine Meldung wurde weitergeleitet und jetzt hdf ich bin beschäftigt").then(m => m.delete(15000))       
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp(new Date())
        .setThumbnail("https://images.vexels.com/media/users/3/153978/isolated/preview/483ef8b10a46e28d02293a31570c8c56-warning-sign-colored-stroke-icon-by-vexels.png")
        .addField(`Sender der Meldung:`, `${message.author.username}`, false)
        .addField(`Gemeldeter:`, `${target.user.username}`)
        .addField(`Grund:`, `${reason}`, false)
                    sChannel.send(embed);
       }



module.exports.config = {
    name: "report",
    description: "",
    usage: "?report",
    accessableby: "Members",
    aliases: ['rpt']
}