module.exports.run = async (client,message,arguments,config) => {
    try{
    var reactmessage
    var reactemoji = arguments[0]
    if(!arguments||!arguments[0]){
        return message.channel.send("Syntax: `react <emoji> [message id]")
    }
    if(!arguments[1]){
        if(typeof arguments == "array"){
            reactemoji = arguments[0]
        }
        else{
            reactemoji = arguments
        }
        reactmessage = message
    }
    else{
        reactmessage = await message.channel.fetchMessage(String(arguments[1]))
    }
    //message.channel.send(message.channel.fetchMessage(String(arguments[1])).content)
    reactemoji = reactemoji.replace(" ","");
    if(reactemoji.indexOf("<") !== -1){
        reactemoji = reactemoji.split(":")[2].replace(" ","").replace(">","")
    }
    reactmessage.react(reactemoji);
    }
    catch{
        message.channel.send("Syntax: `react [message id] <emoji>")
    }
}
module.exports.help = {
    name: "react",
    help: "syntax: `react [message id] <emoji>"
}
