module.exports = {
 config: {
   name: "allah",
   version: "1.0",
   author: "Jadid",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },
  
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "allah") {
 return message.reply({
 body: "আমরা সবাই আল্লাহর গোলাম-!!🥰💖",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/8BtlofZ.jpeg")
 });
 }
 }
}
