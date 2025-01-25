module.exports = {
    config: {
        name: "voda",
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
    if (event.body && event.body.toLowerCase() == "voda") return message.reply("এত ভোদা ভোদা করবা না বিয়ে হোক তারপর খাইও 🤥🫦🫶🥵");
}
};
