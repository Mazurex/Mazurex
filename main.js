const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '-';

const fs = require('fs');

const memberCounter = require('./counters/member-counter');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})


// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//     const command = require(`./commands/${file}`);

//     client.commands.set(command.name, command);
// }


// client.on(`ready`, () => {
//     console.log(`Pasta2.0 is online!`);
//     memberCounter(client);
// })

// client.on('guildMemberAdd', guildMember => {
//     let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');

//     guildMember.roles.add(welcomeRole);

//     guildMember.guild.channels.cache.get('905572025505050675').send(`Welcome <@${guildMember.user.id}> to our server!`)
// });


// client.on('message', message =>{


//     if(!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();


//     if(command === 'test'){
        
//         client.commands.get('test').execute(message, args, Discord);
//     }


//     if(command === 'embed'){
        
//         client.commands.get('embed').execute(message, args, Discord);
//     }


//     if(command === 'clear'){
        
//         client.commands.get('clear').execute(message, args, Discord);
//     }


//    if(command === 'rules'){
//        
//        client.commands.get('rules').execute(message, args, Discord);
//    }


//     if(command === 'kick'){
        
//         client.commands.get('kick').execute(message, args, Discord);
//     }


// if(command === 'ban'){
        
//     client.commands.get('ban').execute(message, args, Discord);
// }


// if(command === 'mute'){
        
//     client.commands.get('mute').execute(message, args, Discord);
// }


// if(command === 'unmute'){
        
//     client.commands.get('unmute').execute(message, args, Discord);
// }


// if(command === 'reactionrole'){
        
//     client.commands.get('reactionrole').execute(message, args, Discord, client);
// }

// });

//TOKEN
    client.login('ODc0NzQ0NjQyNDUxNjczMTI4.YRLbbg.YOGGh2869PSLgmnC0OM4pKIdIaY');