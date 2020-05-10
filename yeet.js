function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
const Discord = require("discord.js")
module.exports.run = async (client,message,arguments,config) => {
    message.channel.send("Are you sure you want to ban all members in the server?");
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
    collector.on('collect', message => {
        if (message.content === "yes") {
            message.channel.send("Ok, banning all members").then((message) => {
                let i = 0
                let messages = ["Banning all members... 0%","Banning all members... 17%","Banning all members... 36%","Banning all members... 52%","Banning all members... 69%","Banning all members... 81%","Banning all members... 99%"]
                for (i = 0; i < messages.length; i++){
                    message.edit(messages[i]); 
                };
                collector.stop()
            });
        } else {
            message.channel.send("Canceled")
            collector.stop()
        }
    });
}
module.exports.help = {
    name: "yeet",
    help: "yeet"
}
