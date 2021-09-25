module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`Bạn đã nhận số **Hoa** ngày hôm nay,hãy đợi thêm ${addMoney.time.hours} giờ, ${addMoney.time.minutes} phút & ${addMoney.time.seconds} giây để nhận thêm.`);
    else return message.reply(`Bạn đã nhận được **${addMoney.amount}** <:hoa:891221416958119936>.`);
};

module.exports.help = {
    name: "daily",
    aliases: [],
    usage: "daily"
}
