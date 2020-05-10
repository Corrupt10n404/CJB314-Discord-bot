module.exports.run = async (client,message,arguments,config) => {
    var reactmessage
    if(!arguments){
        return("syntax: `react [message id]")
    }
    if(!arguments[1]){
        reactmessage = message;
        arguments = arguments.shift()
    }
    else{
        reactmessage =  await message.channel.fetchMessage(arguments[0].replace(" ",""));
    }
    try{
        reactmessage.react(arguments[1].replace(" ",""))
    }
    catch(err){throw err}
}
module.exports.help = {
    name: "react",
    help: "syntax: `react [message id]"
}
