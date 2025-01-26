module.exports = {
 config: {
   name: "good night",
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
 if (event.body && event.body.toLowerCase() === "good night") {
 return message.reply({
 body: "𝗚𝗢𝗢𝗗 𝗡𝗜𝗚𝗛𝗧 𝗕𝗕𝗬 𝗛𝗔𝗩𝗘 𝗡𝗜𝗖𝗘 𝗡𝗜𝗧𝗚𝗘 😴🌉😘💤",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/5jWfmnrx/anya-sleep.gif")
 });
 }
 }
}
