const { ClientUser } = require('discord.js');
const fs = require('js');

module.exports = (client, Discord) =>{
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for(const file of command_files){
        const command = require(`../commands/${file}`);
        if(command.name){
            ClientUser.commands.set(command.name, command);
        } else {
            continue;
        }
    }
}