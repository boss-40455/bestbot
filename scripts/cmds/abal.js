module.exports = {
    config: {
        name: "abal",
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
    if (event.body && event.body.toLowerCase() == "abal") return message.reply("আমার মনে হয় তর নিজের বাল নাই তাহলে তুই মানুষকে আবাল বলিস কেন মাদারচোদ🖕🤬🤬");
}
};
