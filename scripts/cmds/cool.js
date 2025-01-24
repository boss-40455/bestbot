module.exports = {
    config: {
        name: "cool",
        version: "1.0",
        author: "jisan", //** original author fb I'd : https://XAIKO.JISAN **//
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
    if (event.body && event.body.toLowerCase() == "cool") return message.reply("Relax Cool Jan 🥶🥶🥶");
}
};
