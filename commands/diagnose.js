const Discord = require("discord.js")
const botconfig = require("../config/config.json")

const randomPuppy = require("random-puppy")

module.exports.run = async (client, message, args) => {
            
            var st = [`Yaro in den Mund nehmer`, `Hurensohn`, `Syrer`, `Schwuchtell`]

            var st1 = st[Math.floor(Math.random() * st.length)];


                message.channel.send('*diagnose...*')
            .then((msg) => {
              setTimeout(function() {
              msg.edit(`**23%**`);
            }, 4000)
        
               setTimeout(function() {
                msg.edit(`**87%**`);
              }, 5000)

            setTimeout(function() {
                msg.edit(`**Diagnose**: ${st1}`);
              }, 8000)}); 
          }
               
            


            



module.exports.config = {
    name: "diagnose",
    description: "",
    usage: "?diagnose",
    accessableby: "Members",
    aliases: ['m']
}