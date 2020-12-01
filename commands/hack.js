const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")


module.exports.run = async (client, message, args) => {
    message.channel.send('*hacking...*')
  .then((msg) => {
    setTimeout(function() {
    msg.edit('**NASA wurde erfolgreich gehackt**');
  }, 4000)}); 
}


module.exports.config = {
    name: "hack",
    description: "",
    usage: "?hack",
    accessableby: "Members",
    aliases: ['hack']
}