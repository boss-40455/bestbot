module.exports = {
 config: {
   name: "🖤",
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
 if (event.body && event.body.toLowerCase() === "🖤") {
 return message.reply({
 body: "𝐈𝐦𝐚𝐠𝐢𝐧𝐞 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐬𝐢𝐧𝐠𝐢𝐧𝐠 𝐟𝐨𝐫 𝐲𝐨𝐮 🖤🌼",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/G1PHHX0.mp4")
 });
 }
 }
}
