module.exports = {
 config: {
   name: "anime world",
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
 if (event.body && event.body.toLowerCase() === "anime world") {
 return message.reply({
 body: "𝗔𝗡𝗜𝗡𝗘 𝗜𝗧'𝗦 𝗕𝗘𝗦𝗧 𝗘𝗠𝗢𝗧𝗜𝗢𝗡𝗔....❤️‍🩹🫀🥺",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/h1ffmC9.mp4")
 });
 }
 }
}
