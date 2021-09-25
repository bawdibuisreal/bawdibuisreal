module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 20) + 5;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`Bạn hãy đợi thêm ${work.time.minutes} phút & ${work.time.seconds} giây để trông **Hoa** lần nữa.`);
    else return message.reply(`Bạn đã trông hoa chăm chỉ và nhận được **${work.amount}** <:hoa:891221416958119936>.`);
};

module.exports.help = {
    name: "work",
    aliases: [],
    usage: "work"
}
