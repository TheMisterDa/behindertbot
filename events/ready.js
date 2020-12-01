const Discord = require("discord.js")

module.exports = client => {
                console.log(`${client.user.username} is online`)
                
                var channel = client.channels.cache.find(channel => channel.id === '699624512559382629')
                setInterval(() => {
                            channel.bulkDelete(90)
                }, 3600000);

                var activ = ['mit Gefühlen', 'mit seinen Eiern', 'Minecraft', 'GTA 6', 'Nitefort']

                var i = activ[(Math.floor(Math.random() * activ.length))]
                client.user.setActivity(i, {type: ""})
}