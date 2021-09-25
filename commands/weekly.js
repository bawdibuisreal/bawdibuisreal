exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1000) + 500;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`Bạn đã nhận số **Hoa** ngày hôm nay,hãy đợi thêm ${addMoney.time.days} Ngày, ${addMoney.time.hours} giờ, ${addMoney.time.minutes} phút & ${addMoney.time.seconds} giây để nhận lần nữa`);
    else return message.reply(`Bạn đã nhận được **${addMoney.amount}** <:hoa:891221416958119936> :P`);
};

exports.help = {
    name: "weekly",
    aliases: [],
    usage: "weekly"
}
