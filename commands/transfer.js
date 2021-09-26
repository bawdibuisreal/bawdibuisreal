exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let authordata = client.eco.fetchMoney(message.author.id) 
  if (!member) return message.channel.send('Xin hãy ping người bạn muốn chuyển **Hoa**') 
  let amount = args[1]
  if (!amount || isNaN(amount)) return message.channel.send('Xin hãy nhập số **Hoa** muốn chuyển') 
  if(authordata.amount < amount) return message.channel.send('Hình như bạn không có đủ số tiền để chuyển') 
  await client.eco.transfer(message.author.id, member.id, amount) 
  return message.channel.send(`Bạn đã chuyển **Hoa** thành công**${amount}** <:emoji_40:891605292788371488> đến ** ${member.user.tag}**.`)
}
exports.help = {
  name: "transfer",
  aliases: ['give', 'share'],
  usage: `transfer <member> <amount>`
};
