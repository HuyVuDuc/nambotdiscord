var Discord = require("discord.js");
var config = require("./config.json");
var fs = require('fs');
var func = require('./func.js');

var client = new Discord.Client();
var prefix = config.prefix;

client.on("ready", function () {
    console.log("I am ready!");
});

client.on("message", function (message) {
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;
    console.log('receiving message from user %s with %s', message.author.username, message.content);

//    if (message.content.startsWith(prefix + "ping")) {
//        if (message.author.id !== config.ownerID)
//            return;
//        message.channel.send("pong!");
//    } else
//    if (message.content.startsWith(prefix + "foo")) {
//        message.channel.send("bar!");
//    }

    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();

    switch (command) {
        case 'ping':
            message.channel.send("pong!");
            break;
        case 'ava':
            message.channel.send({embed: {
                    title: message.author.username,
                    color: 3447003,
                    description: message.author.avatarURL
                }});
            break;
        case 'testarg':
            console.log(args);
            break;
        case 'mention':
            console.log(message.mentions.users.first().id);
            var userid = message.mentions.users.first().id;
            message.reply("<@" + userid + ">");
            break;
        case 'say':
            var text = args.join(" ");
            message.delete();
            message.channel.send(text);
            break;
    }
});
client.login(config.secret);