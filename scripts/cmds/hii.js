module.exports = {
 config: {
   name: "hi",
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
 if (event.body && event.body.toLowerCase() === "hi") {
 return message.reply({
 body: "𝗛𝗘𝗟𝗟𝗢 𝗜'𝗠 𝗢𝗙𝗙𝗦𝗜𝗬𝗔𝗟 𝗕𝗢𝗧 𝗢𝗟𝗜𝗩𝗜𝗔 𝗖𝗔𝗛 𝗛𝗜 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨 ❓",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/KizmOw3.jpeg")
 });
 }
 }
}
