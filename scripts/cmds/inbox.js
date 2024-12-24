module.exports = {
    config: {
        name: "inbox",
        version: "1.0",
        author: "Jadid", //** original author fb I'd : https://C.E.O.NOBITA.2021 **//
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
    if (event.body && event.body.toLowerCase() == "inbox") return message.reply("- শা/লার inbox ta.!
_______ পদ্মা নদীর বালুচর হয়ে গেছে,🤧
 ~ কেউ ভুল করেও এই রাস্তায় আসতে চায় না.!🥴");
}
};
