module.exports = {
    name: 'reactionrole',
    description: "get roles by reacting to the message!",
    async execute(message, args, Discord, client) {
        const channel = '905580176153407528';

        const teamAqua = message.guild.roles.cache.find(role => role.name === "Team Aqua");
        const teamPink = message.guild.roles.cache.find(role => role.name === "Team Pink");
        const teamViolet = message.guild.roles.cache.find(role => role.name === "Team Violet");
        const teamRed = message.guild.roles.cache.find(role => role.name === "Team Red");


        const teamAquaEmoji = '💯';
        const teamPinkEmoji = '🧠';
        const teamVioletEmoji = '🍉';
        const teamRedEmoji = '💤';

        let embed = new Discord.MessageEmbed()
        .setColor('#CA1E1E')
        .setTitle('Choose a **Team**, pick wisely this is **irreversable**!')
        .setDescription('Teams allow you to participate in team events and let you chat with other team members\n\n')
        .addFields(
            {name: '💯', value: 'for the **aqua** team'},
            {name: '🧠', value: 'for the **pink** team'},
            {name: '🍉', value: 'for the **violet** team'},
            {name: '💤', value: 'for the **red** team'},
        )
        .setFooter('Mazurex chose 💯 team aqua');

        let messageEmbed = await message.channel.send(embed);

        messageEmbed.react(teamAquaEmoji);
        messageEmbed.react(teamPinkEmoji);
        messageEmbed.react(teamVioletEmoji);
        messageEmbed.react(teamRedEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === teamAquaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teamAqua);
                }
                if (reaction.emoji.name === teamPinkEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teamPink);
                }
                if (reaction.emoji.name === teamVioletEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teamViolet);
                }
                if (reaction.emoji.name === teamRedEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teamRed);
                }
            } else {
                return;
            }
        
        });
    }

}

//🧠 pink
//💤 red
//🍉 violet
//💯 aqua