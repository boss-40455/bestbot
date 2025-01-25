module.exports = {
 config: {
   name: "❤️‍🩹",
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
 if (event.body && event.body.toLowerCase() === "❤️‍🩹") {
 return message.reply({
 body: "ভালোবাসবো তো ধোকা খাবো আর বন্ধুত্ব করবো তো গাদ্দারি অভ্যাস হয়ে গেছে 🥹😅❤️‍🩹",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/8e3exQM.mp4")
 });
 }
 }
}
