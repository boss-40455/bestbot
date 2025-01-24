module.exports = {
    config: {
        name: "hm",
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
    if (event.body && event.body.toLowerCase() == "hm") return message.reply("এতো hm hm করিস কেন I Love u এখন বল Hm🤐🐥🙋‍♀️");
}
};
