const { IntegrationApplication } = require("discord.js");

module.exports= {
    name: 'clear',
    description: "clears messages!",
    async execute(message, args) {
        if(!args[0]) return message.reply("please write the amount of messages you want to clear `-clear [1 - 100]`");
        if(isNaN(args[0])) return message.reply ("please enter a real number! `-clear [1 - 100]`");

        if(args[0] > 100) return message.reply("you cannot exceed over the maximum limit, `1 - 100` messages!");
        if(args[0] < 1) return message.reply("please enter a number higher than `0`!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}