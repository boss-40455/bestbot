module.exports = {
 config: {
   name: "fdsip",
   version: "1.0",
   author: "Mr-Jisan",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },
  
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "jadid") {
 return message.reply({
 body: "𝗝𝗶𝘀𝗮𝗻'𝘀 𝗯𝗲𝘀𝘁 𝗳𝗿𝗶𝗲𝗻𝗱..🫂🫀_______________________________জিসানের বেস্ট ফ্রেন্ড ❤️😌",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/j8s93Ze.jpeg")
 });
 }
 }
}
