const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")


const fetch = require("node-fetch")
module.exports.run = async (client, message, args) => {
            
            let countries = args[0]

            fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${countries}`)
            .then(res => res.json())
            .then(data => {
                        let country = data.country;
                        let flag = data.countryInfo.flag;
                        let confirmed = data.cases;
                        let todayconfirmed = data.todayCases;
                        let deaths = data.deaths;
                        let todaydeaths = data.todayDeaths;
                        let recovered = data.recovered;
                        let critical = data.critical;
                        let active = data.active;
                        


                        const embed = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setTimestamp(new Date())
                        .setThumbnail(flag)
                        .setAuthor("Coronavirus Zahlen")
                        .addField("Zahlen für ", country)
                        .addField("Bestätigte Fälle: ", confirmed)
                        .addField("Zahlen heute: ", todayconfirmed)
                        .addField("Tode gesamt: ", deaths)
                        .addField("Tode heute: ", todaydeaths)
                        .addField("Geheilte: ", recovered)
                        .addField("Kritische Anzahl: ", critical)
                        .addField("Aktiv: ", active)


                        message.channel.send(embed)
            }) 

       }



module.exports.config = {
    name: "corona",
    description: "",
    usage: "?corona",
    accessableby: "Members",
    aliases: ['rpt']
}



