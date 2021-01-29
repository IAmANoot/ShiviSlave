var Discord = require('discord.js');
var bot = new Discord.Client();

const fact = require('./Data/facts.json');


bot.on('ready', () => {
    console.log(`${bot.user.username}#${bot.user.discriminator} has been launched.`)
    bot.user.setActivity('Do .help')
    bot.user.setStatus('Online')
});

bot.on("message", message => {
  const prefix = `.`;

  if (message.author.bot) return;
  let msg = message.content.toUpperCase();
  let sender = message.author;
  let args = message.content.substring(prefix.length).split(" ");
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  if (!message.channel.type === "dm") return;

  if (cmd === 'help') {
    message.channel.send('I am shivi\'s slave')
  }
  if (cmd === 'wtf') {
      message.channel.send('Screw yoo')
  }
  if (cmd === 'sexfact') {
    message.channel.sendMessage(fact[Math.floor(Math.random() * 34) +1]);
  }
  if (cmd === 'relationship') {
    message.channel.send('It depends on the situation. ')
  }
})


bot.login(``)
