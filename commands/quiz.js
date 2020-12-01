const Discord = require("discord.js")
const client = new Discord.Client;
const botconfig = require("../config/config.json")

const quiz = require('../cmdAssets/quiz.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];


const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};

module.exports.run = async (client, message, args) => {
    let args2 = message.content.split(" ");
    if(args2[1] === "hard") {
        message.channel.send("Du hast 10 Sekunden Zeit")
    message.channel.send(item.question).then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
            .then(collected => {
                message.channel.send(`${collected.first().author} <= Der Idiot konnte es beantworten`);
            })
            .catch(collected => {
                message.channel.send('Dumme Menschen haben halt keine Antworten, kek');
                
            });
    });
    } else {
        message.channel.send("Du hast 30 Sekunden Zeit")
        message.channel.send(item.question).then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    message.channel.send(`${collected.first().author} <= Der Idiot konnte es beantworten`);
                    item = quiz[Math.floor(Math.random() * quiz.length)];
                })
                
                .catch(collected => {
                    message.channel.send('Dumme Menschen haben halt keine Antworten, kek');
                    item = quiz[Math.floor(Math.random() * quiz.length)];
                });
        });
    }
    
}


module.exports.config = {
    name: "quiz",
    description: "",
    usage: "?quiz",
    accessableby: "Members",
    aliases: ['qi']
}