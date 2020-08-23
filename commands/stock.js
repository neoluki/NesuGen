const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#60FF0B")
.setFooter('©️ CopyRight Omega™️')
.addField('__STOCK__','\n\n`$spotify`: 0 .\n`$disney`: 0.\n`$hulu`: 0 .\n`$minecraft`: 0 .\n`$nitro`: unlimited .\n`$nordvpn`: 0.\n`$origin` 0.\n`$proxy`: unlimited .\n\n **✩** Remember that you are using the free generator, this accounts may not work !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
