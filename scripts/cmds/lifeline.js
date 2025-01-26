module.exports = {
 config: {
   name: "life line",
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
 if (event.body && event.body.toLowerCase() === "life line") {
 return message.reply({
 body: "💚🌺আপনি থেকে তুমি হওয়ার গল্পটা অসাধারণ.! 🖤🥀  - তবে তুমি থেকে আপনি হওয়ার গল্পটা এক পাহাড় সমান অভিমান༎༅🙂",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/L6Qqu9l.mp4")
 });
 }
 }
}
