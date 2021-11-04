module.exports= {
    name: 'kick',
    description: "kicks users from the server",
    execute(message, args) {

        const member = message.mentions.users.first();
        if(message.member.permissions.has("KICK_MEMBERS")) {
            if(member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send("User has been kicked");
            }else{
                message.channel.send('You cant kick that member');
            }
        } else {
            message.channel.send('You dont have permission to kick members!');
        }


    }
}