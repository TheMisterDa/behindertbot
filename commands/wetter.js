const Discord = require("discord.js")
const botconfig = require("../config/config.json")

const randomPuppy = require("random-puppy")
const fetch = require("node-fetch")
const { count } = require("console")


module.exports.run = async (client, message, args) => {




let country = args[0]



            if(country == "Koeln" || country == "Köln") {

                            country = "cologne"
            }
     try {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=6460c922f5b7de515fdb9c03fd75e217&units=metric&lang=de`)
        .then(res => res.json())
        .then(data => {
    
            
                let country2 = data.name;
                let actw = data.weather[0].description;
                let tempm = data.main.temp_max;
                var tempm5 = Math.round(tempm)
                let tempmn = data.main.temp_min;
                var tempmn1 = Math.round(tempmn)
                let tmpnow = data.main.temp;
                var tmp = Math.round(tmpnow)
                let hm = data.main.humidity;
                
                const embed = new Discord.MessageEmbed()
                .setTitle("Wetter für: " +  country2)
                .addField("Wetter gerade: ", actw)
                .setColor("RANDOM")
                .addField("Temperatur jetzt: ", tmp)
                .addField("Max. Temperatur: ", tempm5)
                .addField("Min. Temperatur: ", tempmn1)
                .addField("Luftfeuchtigkeit: ", hm)
    
    
                            message.channel.send(embed)
    
    
        })
     } catch(e) {

            message.reply("Land nicht gefunden.")
     }       
    

}


module.exports.config = {
    name: "wetter",
    description: "",
    usage: "?wetter",
    accessableby: "Members",
    aliases: ['m']
}