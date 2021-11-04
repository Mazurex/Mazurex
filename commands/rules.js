module.exports= {
    name: 'rules',
    description: "this is a embed testing command!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#CA1E1E')
        .setTitle('Server Rules')
        .setURL('https://www.youtube.com/channel/UCQgCmVILYg6AfsohPTxrQPg')
        .setDescription('We have a bunch of rules and we only request you to follow them!')
        .addFields(
            {name: '1. **Excessive Swearing**', value: 'In this server we allow swearing as long as its not excessive, we also do not allow direct swearing at any members. We do not allow words that are racist to anybody.'},
            {name: '2. **Toxicity**', value: 'Do not be rude to any member in this server, this rule is also connected to rule 1, also do not be racist to anybody'},
            {name: '3. **Channels**', value: 'Only use channels for their purpose, for example do not talk about coding in testing <#905482326425874554>'},
            {name: '4. **Alts**', value: 'We do not allow alts because they could bypass bans from this server'},
            {name: '5. **Personal Info**', value: 'Do not send/share any personal information in this server, this can include: IPs, passwords, emails etc.'},
            {name: '6. **Advertisement**', value: 'This server was not made for advertising, so dont post any links that could benefit you/anyone else, links like pastebin are ok as long as they are used for coding purposes'},
            {name: '7. **Impersonation**', value: 'Do not pretend to be somebody by changing your name/tag/icon'},
            {name: '8. **Languages**', value: 'We do not allow any other languages because our staff do not know what they might mean'},
            {name: '9. **DEVS**', value: 'The developers are usually busy so do not annoy them by DMing or pinging them'},
            {name: '10. **Begging**', value: 'Dont ask for stuff like "free bots" or "nitro" etc.'},
        )
        .setFooter('Last updated: 03/11/2021 18:00');

        message.channel.send(newEmbed);
    }
}