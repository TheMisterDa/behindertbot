const Discord = require("discord.js");
const client = new Discord.Client;
const config = require("./config/config.json");
const token = config.DISCORD_BOT.BOT_TOKEN;
const PREFIX = config.DISCORD_BOT.PREFIX;



let ownerID = "726949423527231508"
require("./util/eventHandler")(client);

    const fs = require("fs");
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();


    fs.readdir("./commands/", (err, files) => {
            if(err) console.log(err)

            let jsfile = files.filter(f => f.split(".").pop() === "js")
            if(jsfile.length <= 0) {
                        return console.log("[LOGS] Couldn't Find Commands!");
            }

            jsfile.forEach((f, i) => {
                let pull = require(`./commands/${f}`);
                client.commands.set(pull.config.name, pull);
                pull.config.aliases.forEach(alias => {
                    client.aliases.set(alias, pull.config.name)
                });
            });
    });

    

    client.on('message', message => {
            
                let args = message.content.substring(PREFIX.length).split(" ");

                
                switch(args[0]) {
                    
                    case 'rolle':
                                    
                    var erfolg = "da hast du deine rolle jetzt verpiss dich"
                            if(!args[1]) return message.reply('WIE OFT NOCH ALTER DU MUSST EINE ROLLE AUCH ANGEBEN')
                                if(args[1] === "nohomo") {
                                            message.member.roles.add("711210187150852127")
                                            message.reply(erfolg)
                                }

                                if(args[1] === "antivegan") {
                                    message.member.roles.add("728383043928326294")
                                    message.reply(erfolg)
                        }

                        break;

                                    
                }
})



        client.on("message", async message => {
                    if(message.author.bot || message.channel.type === "dm") return;



                    let prefix = PREFIX;
                    let messageArray = message.content.split(" ");
                    let cmd = messageArray[0];
                    let args = messageArray.slice(1);
                    

                    let ops = {

                            ownerID: ownerID
                    }

                    if(!message.content.startsWith(PREFIX)) return;
                    let commandfile = client.commands.get(cmd.slice(PREFIX.length)) || client.commands.get(client.aliases.get(cmd.slice(PREFIX.length)))
                    if(commandfile) commandfile.run(client,message,args,ops)
        })



    

            
    
    let censor = "[Sorry, I Swear]"; /* Replace this with what you want */
    client.on('message', message => {
        if(message.author.bot) return;
        if(message.content === "-stop") {
            let edit = message.content.replace("-stop", "tja loser")
            message.delete();
            message.channel.send(`${message.author.username}: ${edit}`);
        }

        if(message.content === "-pause") {
            let edit = message.content.replace("-pause", "nö")
            message.delete();
            message.channel.send(`${message.author.username}: ${edit}`);
        }

        if(message.content === "-leave") {
            let edit = message.content.replace("-leave", "hoff nicht")
            message.delete();
            const embed = new Discord.MessageEmbed;
            embed.setImage(message.member.user.displayAvatarURL())
            embed.setFooter("hoff nicht kek")

            message.channel.send(embed);
        }

        if(message.content === "?avatar") {
            let args = message.content.substring(PREFIX.length).split(" ")

            if(!args[1]) return message.reply("Namen vom Nutzer eingeben")
            let User = message.mentions.users.first();
            message.delete();
            const embed = new Discord.MessageEmbed;
            embed.setImage(User.displayAvatarURL())
            message.channel.send(embed);
        }
        
    }) 




    let y = process.openStdin()
    
    y.addListener("data", res => {


        let poqwe = res.toString().trim().split(/ +/g)


        client.channels.cache.get("699624512559382629").send(poqwe.join(" "))
    })

    client.login(token)
    console.log(token)