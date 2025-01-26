module.exports = {
 config: {
   name: "owner card",
   version: "1.0",
   author: "Jisan",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },
  
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "owner card") {
 return message.reply({
 body: "𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 𝗖𝗔𝗘𝗗 𝗜𝗡𝗙𝗢 🪪",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/UKWg01c.png")
 });
 }
 }
}
