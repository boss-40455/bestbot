module.exports = {
    config: {
        name: "🐸",
        version: "1.0",
        author: "jisan", //** original author fb I'd : XAIKO.JISAN **//
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
    if (event.body && event.body.toLowerCase() == "🐸") return message.reply("কাকে ব্যাং দেখাও আমি ব্যাং দেখে ভয় নাই না-!!🌚🤣");
}
};
