module.exports = {
 config: {
   name: "obito",
   version: "1.0",
   author: "MR-JISAN",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },
  
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "obito") {
 return message.reply({
 body: "𝗜 𝗹𝗼𝘃𝗲𝗱 𝗵𝗶𝗺 𝗮 𝗹𝗶𝘁𝘁𝗹𝗲 𝗺𝗼𝗿𝗲 𝗯𝘂𝘁 𝗵𝗲 𝘂𝗻𝗱𝗲𝗿𝘀𝘁𝗼𝗼𝗱 𝗺𝘆 𝗹𝗼𝘃𝗲 𝗮 𝗹𝗶𝘁𝘁𝗹𝗲 𝗹𝗮𝘁𝗲 ...! ❤️‍🩹💔😅",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/1lIBht3.mp4")
 });
 }
 }
}
