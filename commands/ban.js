module.exports= {
    name: 'ban',
    description: "bans users from the server",
    execute(message, args) {

        const member = message.mentions.users.first();
        if(message.member.permissions.has("BAN_MEMBERS")) {
            if(member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send("User has been banned");
            }else{
                message.channel.send('You cant ban that member');
            }
        } else {
            message.channel.send('You dont have permission to ban members!');
        }


    }
}