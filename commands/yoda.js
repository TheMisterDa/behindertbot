const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")


var request = require("request");

module.exports.run = async (client, message, args) => {
    

 
    var options = {
        method: 'POST',
        url: 'https://yodish.p.rapidapi.com/yoda.json',
        qs: {text: 'Master Obiwan has lost a planet.'},
        headers: {
          'x-rapidapi-host': 'yodish.p.rapidapi.com',
          'x-rapidapi-key': '572a535ac5mshb4b1994d8d75872p1daea6jsn40a701571af4',
          'content-type': 'application/x-www-form-urlencoded',
          useQueryString: true
        },
        form: {}
      };
      
      request(options, function (error, response, body) {
          if (error) throw new Error(error);
      
          console.log(body);
      });
    

   

             
}


module.exports.config = {
    name: "yoda",
    description: "",
    usage: "?yoda",
    accessableby: "Members",
    aliases: ['ni']
}