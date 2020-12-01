const Discord = require("discord.js")
const botconfig = require("../config/config.json")

const randomPuppy = require("random-puppy")

const fetch = require("node-fetch")



const hook = new Discord.WebhookClient("782564152807391244", "s1sBaduSJ8nzi5nSJxe6izF5TdAWr-8mdKMnbeYNKqir9iQicjymf4hx1A47JlC8rJft");


module.exports.run = async (client, message, args) => {
            
            
    let countries = args[0]

         

    
    fetch(`https://fortnite-api.com/v2/shop/br`)
    .then(res => res.json())
    .then(data => {
                

  

        

                for (var n = 0; n < data.data.daily.entries.length; n++) {

                    let img = [
                        data.data.daily.entries[n].items[0].images.smallIcon
            
                      ]
            
                               
                    let rar = [
            
                        data.data.daily.entries[n].items[0].rarity.value,
            
                    ]


                    if(rar[0] == "rare" || rar[1] == "rare" || rar[2] == "rare") {

                        var color = " ";
    
                            color = "BLUE";
             } else if (rar[0] == "epic" || rar[1] == "epic" || rar[2] == "epic") {
    
    
                         color = "PURPLE";
    
             }
    
             else if (rar[0] == "legendary" || rar[1] == "legendary" || rar[2] == "legendary") {
    
    
                 color = "ORANGE";
    
    }
    
    
    
    
                     let price = [
    
                        data.data.daily.entries[n].finalPrice

                     ]
                        let titel = [
    
    
    
                                data.data.daily.entries[n].items[0].name
    
                        ];
    
                            let desc = [
    
    
                                data.data.daily.entries[n].items[0].description
                            ]
    
    
    

                            
                            
                            let embeds = []
    
                                 embeds.push(
    
                                    new Discord.MessageEmbed().setTitle(titel[0]).setColor(color).addField("Genaueres", desc[0]).addField("Preis: ", price[0]).setImage(img[0])
    
                                    
                                    
                                 )

             
                                
                                   hook.send(embeds)
                                 

                                        
                }
            
                
                



         
                        
    }) 
        

   

            
            

}


module.exports.config = {
    name: "shop",
    description: "",
    usage: "?shop",
    accessableby: "Members",
    aliases: ['m']
}