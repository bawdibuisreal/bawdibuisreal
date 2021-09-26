module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 20) + 5;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`Bạn hãy đợi thêm ${work.time.minutes} phút & ${work.time.seconds} giây để trồng **Hoa** lần nữa.`);
    else return message.reply(`Bạn đã trồng hoa chăm chỉ và nhận được **${work.amount}** <:emoji_40:891605292788371488>.`);
};

module.exports.help = {
    name: "work",
    aliases: [],
    usage: "work"
}
