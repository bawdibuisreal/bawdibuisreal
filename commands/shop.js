const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - :dollar: ${client.shop[items[i]].cost}\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("Store")
 .setTitle('Bấm vào đây để mua')
 .setURL('https://discord.gg/292ZqPrubj')
 .setDescription(Bán Nitro classic với giá 4m2<:emoji_40:891605292788371488>
  Bán nitro Boost với giá 9m2<:emoji_40:891605292788371488>
  Bán acc netflix giá 2m<:emoji_40:891605292788371488>
  BÁN Spotify 4m<:emoji_40:891605292788371488> Nếu mua năm thì dms giá)
.setColor("PINK")
  .setFooter("Do :?buy <item> to purchase the item.")
  return message.channel.send(embed);
};

exports.help = {
  name: "shop",
  aliases: [],
  usage: `shop`
};
