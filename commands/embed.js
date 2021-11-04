module.exports= {
    name: 'embed',
    description: "this is a embed testing command!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#CA1E1E')
        .setTitle('Title Test!')
        .setURL('https://www.youtube.com/channel/UCQgCmVILYg6AfsohPTxrQPg')
        .setDescription('Description Test!')
        .addFields(
            {name: 'FIELD TEST 1', value: 'FIELD RESULT 1'},
            {name: 'FIELD TEST 2', value: 'FIELD RESULT 2'},
            {name: 'FIELD TEST 3', value: 'FIELD RESULT 3'},
        )
        .setImage('https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=85&auto=format&fit=max&s=21718fb1379918410ea10054db89f665')
        .setFooter('Footer Test');

        message.channel.send(newEmbed);
    }
}