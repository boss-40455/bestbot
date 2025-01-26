module.exports = {
 config: {
   name: "kiss",
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
 if (event.body && event.body.toLowerCase() === "kiss") {
 return message.reply({
 body: "KISS💋",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/zfj3KT1n/miyamura-hori.gif")
 });
 }
 }
}
