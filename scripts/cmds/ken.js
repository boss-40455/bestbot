module.exports = {
    config: {
        name: "ken",
        version: "1.0",
        author: "MR-JISAN", //** original author fb I'd : https://XAIKO.JISAN **//
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "ken") return message.reply("এত কেন কেন বুঝি না তুমি আমাকে বিয়ে করবে শেষ কথা 😩😵‍💫🙈");
}
};
