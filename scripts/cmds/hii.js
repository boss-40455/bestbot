module.exports = {
 config: {
   name: "hii",
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
 if (event.body && event.body.toLowerCase() === "hii") {
 return message.reply({
 body: "𝙷𝙴𝙻𝙻𝙾 𝙸'𝙼 𝙹𝙰𝙳𝙸𝙳-𝚇-𝙱𝙾𝚃,𝙺𝙴𝙽 𝙸 𝙷𝙴𝙻𝙿 𝚈𝙾𝚄 🤞💋",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/wwGNFV0.jpeg")
 });
 }
 }
}
