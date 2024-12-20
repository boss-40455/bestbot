module.exports = {
    config: {
        name: "cool",
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
    if (event.body && event.body.toLowerCase() == "cool") return message.reply("জান রাগ কেনো করতাছো 🥹,রাগ না করে আমাকে কিছ দাও 🥹,তুমি রাগ করে থাকলে আমার কষ্টো হয় গো জান🫠রাগ করো না পিলিচছ জান🥹,মাথা ঠান্ডা করো গো সোনা আমার🥹🥹😇");
}
};
