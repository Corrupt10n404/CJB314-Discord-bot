const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const util = require('util');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: "` is my prefix"}});
});

client.on("message", async message => {
    if(message.isMentioned("686043677986127899")){
        message.react('638087023269380126')
    } 
    if(message.author.bot || message.system) return; // Ignore bots
    
    if(message.channel.type === 'dm') { // Direct Message
        return; //Optionally handle direct messages
    } 
    //console.log(message.content); // Log chat to console for debugging/testing
    if (message.content.indexOf(config.prefix) === 0) { // Message starts with your prefix
        
        let msg = message.content.slice(config.prefix.length); // slice of the prefix on the message

        let args = msg.split(" "); // break the message into part by spaces

        let cmd = args[0].toLowerCase(); // set the first word as the command in lowercase just in case

        args.shift(); // delete the first word from the args

        if (cmd === "eval" && parseInt(message.author.id) === parseInt(config.owner)){ 
          const code = args.join(" ");
          evalCmd(message, code);
        }
        try{
            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(client, message, args, config);
        }
        catch(err){throw err}
    }
});

async function evalCmd(message, code) {
    if(parseInt(message.author.id) !== parseInt(config.owner)) return message.channel.send("You do not have permission to run this command");
    try {
        let evaled = eval(code);
        if (typeof evaled !== "string")
            evaled = util.inspect(evaled);
            message.channel.send(clean(evaled, message), {code:"xl"});
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err, message)}\n\`\`\``);
    }
}
function clean(text, message) {
    try{
    if (typeof(text) !== 'string') {
        text = util.inspect(text, { depth: 0 });
    }
    text = text
        .replace(/`/g, '`' + String.fromCharCode(8203))
        .replace(/@/g, '@' + String.fromCharCode(8203))
        .replace(config.token, 'mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0') //Don't let it post your token
    return text;
    }
    catch (err){
        message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
    }
}

client.login(config.token);
