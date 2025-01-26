module.exports = {
 config: {
   name: "good morning",
   version: "1.0",
   author: "JISAN",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },
  
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "good morning") {
 return message.reply({
 body: "𝗚𝗼𝗼𝗱 𝗺𝗼𝗿𝗻𝗶𝗻𝗴 2 🌄🌞",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/BbCsNdf4/jjk-jujutsu-kaisen.gif")
 });
 }
 }
}
