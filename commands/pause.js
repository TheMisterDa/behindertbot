module.exports.run = async (client, message, args, ops) => {
    
      let fetched = ops.active.get(message.guild.id)



                if(!fetched) {


                        return message.reply("okda")
                }


                    fetched.dispatcher.pause()
                
 }




 module.exports.config = {
    name: "pause",
    description: "",
    usage: "?pause",
    accessableby: "Members",
    aliases: ['ni']
}