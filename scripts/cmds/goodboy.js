module.exports = {
 config: {
   name: "good boy",
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
 if (event.body && event.body.toLowerCase() === "good boy") {
 return message.reply({
 body: "GOOD-BOY 😚✨",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/mZ0MbNZD/kurumi-tokisaki-date-a-live.gif")
 });
 }
 }
}
