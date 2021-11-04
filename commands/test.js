module.exports= {
    name: 'test',
    description: "this is a testing command!",
    execute(message, args) {
        message.channel.send('commands work!!');
    }
}