module.exports = {
    config: {
        name: "🤣",
        version: "1.0",
        author: "Jadid",
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
    if (event.body && event.body.toLowerCase() == "🤣") return message.reply("একটু আস্তে হাসো জান তোমার দাঁত খুলে পড়ে যাবে 🐥🙃..!");
}
};
