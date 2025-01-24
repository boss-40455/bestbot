module.exports = {
    config: {
        name: "oii",
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
    if (event.body && event.body.toLowerCase() == "oii") return message.reply("Oii মানে 😾 আমি তোর বড় হই সিরিয়ার দিয়ে কথা বল 🤠");
}
};
