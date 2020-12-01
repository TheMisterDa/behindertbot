const Discord = require("discord.js")
const botconfig = require("../config/config.json")

const randomPuppy = require("random-puppy")

const fetch = require("node-fetch")
module.exports.run = async (client, message, args) => {


                countries = args.slice(0).join(" ")

    fetch(`http://newsapi.org/v2/top-headlines?country=de&apiKey=5c9319122d4245e4ab3cbeb4d731c0b1`)
            .then(res => res.json())
            .then(data => {



                
                const number = args[0];
                

                        let autor = data.articles[0].author;
                        let titel = data.articles[0].title;
                        let bs = data.articles[0].description;


                        let ln = data.articles[0].url;

                        let pc = data.articles[0].urlToImage;



                        let autor2 = data.articles[1].author;
                        let titel2 = data.articles[1].title;
                        let bs2 = data.articles[1].description;


                        let ln2 = data.articles[1].url;

                        let pc2 = data.articles[1].urlToImage;


                        let autor3 = data.articles[2].author;
                        let titel3 = data.articles[2].title;
                        let bs3 = data.articles[2].description;


                        let ln3 = data.articles[2].url;

                        let pc3 = data.articles[2].urlToImage;




                        

                        if(bs == "" || bs == " ") {

                                                bs = "Nichts zu zeigen"
                        }

                        message.channel.createWebhook('News', message.author.displayAvatarURL)
                        .then(w => w.send({embeds: [
                            new Discord.MessageEmbed().setAuthor(autor).setTitle(titel).addField("Genaueres", bs).setThumbnail(pc).setURL(ln),  
                            new Discord.MessageEmbed().setAuthor(autor2).setTitle(titel2).addField("Genaueres", bs2).setThumbnail(pc2).setURL(ln2),
                            new Discord.MessageEmbed().setAuthor(autor3).setTitle(titel3).addField("Genaueres", bs3).setThumbnail(pc3).setURL(ln3),

                        ]}));
                


                        message.channel.send(embed)
            }) 

}


module.exports.config = {
    name: "news",
    description: "",
    usage: "?news",
    accessableby: "Members",
    aliases: ['g']
}