module.exports = {
 config: {
   name: "bal",
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
 if (event.body && event.body.toLowerCase() === "bal") {
 return message.reply({
 body: "জান এত বাল বাল করো কেন বাল-!!😾🤙",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/K77DxGN.mp4")
 });
 }
 }
  }
