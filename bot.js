const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592316595339264002")
setInterval(function() {
channel.send(`DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath DragonBreath `);
}, 30)
})

client.login(process.env.BOT_TOKEN);