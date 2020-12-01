const Discord = require("discord.js")
const botconfig = require("../config/config.json")

const randomPuppy = require("random-puppy")


const Genius = require("genius-lyrics");
const Client = new Genius.Client("UURLo8aiyeo_gdo2_t7IBKTQ6B-7hNByTp8Cy_DfOua-Wdty9ymx-vTC-kTsdTVr");



module.exports.run = async (client, message, args) => {
            
            

        
    try {


        const name = args.slice(0).join(" ")


        const searches = await Client.songs.search(name);

        // Pick first one
        const firstSong = searches[0];
        
        
        // Ok lets get the lyrics
        const lyrics = await firstSong.lyrics()
        

              


        
           var res = lyrics.substr(1, 2047)



                var res2 = lyrics.substr(2048, res.length)
             
            
            console.log(res2.length)
                
          



             const embed = await new Discord.MessageEmbed() 

                .setTitle(firstSong.title)

                .setDescription(res)

                const embed2 = new Discord.MessageEmbed() 

                .setTitle(" ")

                .setDescription(res2)

                    message.channel.send(embed)
                    message.channel.send(embed2)

                        
                    
          
        
             
            
         
                

        
        


       
        


          

          

          

    }

    catch(e) {

            
            message.channel.send(e)
    }
    
    

         
        

            

}


module.exports.config = {
    name: "lyrics",
    description: "",
    usage: "?lyrics",
    accessableby: "Members",
    aliases: ['m']
}