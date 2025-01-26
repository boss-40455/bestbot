module.exports = {
 config: {
   name: "kiss1",
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
 if (event.body && event.body.toLowerCase() === "kiss1") {
 return message.reply({
 body: "KISS BBY 😘💋",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/tTsyJ6RR/kiss-anime-kiss.gif")
 });
 }
 }
}
