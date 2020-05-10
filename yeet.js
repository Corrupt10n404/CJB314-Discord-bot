const Discord = require("discord.js")
module.exports.run = async(client,message,arguments,config) => {
    if(guild.id == "555087033652215830" || guild.id == 555087033652215830){
        message.channel.send("do u use discord.py?");
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
            yesresponses = ["yes","ye","yeah","yea","myes","yep"]
            collector.on('collect', message => {
                if(yesresponses.indexOf(message.content.toLowerCase) !== -1){
                    message.channel.send('git band');
                    collector.stop();
                }
            });
    }
    if(parseInt(message.author.id) !== 686043677986127899 ){
        return
    }
    if(parseInt(message.author.id) !== 686043677986127899 ){
        return
    }
    message.channel.send("Are you sure you want to ban all members in the server?");
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
    collector.on('collect', message => {
        if (message.content.toLowerCase() === "yes") {
            message.channel.send("Ok, banning all members").then((message) => {
                let messages = ["Banning all members... 0%","Banning all members... 17%","Banning all members... 36%","Banning all members... 52%","Banning all members... 69%","Banning all members... 81%","Banning all members... 99%"]
                var i = 0
                setInterval(function(){ message.edit(messages[i]); i++ ; if (i >= messages.length){message.channel.send("nah")
                collector.stop();clearInterval()}}, 3000);
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
