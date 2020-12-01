const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")


const search = require("yt-search")
module.exports.run = async (client, message, args) => {
    
        search(args.join(" "), function(err, res) {
                    
                if(err) return console.log(err)
                
                
                let videos = res.videos.slice(0, 15);



                let resp = '';


               

                for(var i in videos) {
                                

                            resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;

                }


                                resp += `\n**Wähle eine nummer zwischen \`1-${videos.length}\``;

                                message.channel.send(resp);


                const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;


                const collector = message.channel.createMessageCollector(filter);

                    collector.videos = videos;

                    collector.once('collect', function(m) {

                                        let commandFile = require("./play.js")

                                        commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url])

                                        console.error()
                    });
        });

                   
}


module.exports.config = {
    name: "search",
    description: "",
    usage: "?search",
    accessableby: "Members",
    aliases: ['ni']
}