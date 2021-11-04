module.exports= {
    name: 'unmute',
    description: "unmutes muted people",
    execute(message, args) {

        if(message.member.roles.cache.some(r => r.name === "moderator")) {
            const target = message.mentions.users.first();
            if(target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
    
                let memberTarget = message.guild.members.cache.get(target.id);
    
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
            } else {
                message.channel.send('Cannot find that muted member!');
            }
        } else {
            message.channel.send('You do not have the permission to unmute people')
        }


    }
}