module.exports = {
 config: {
   name: "islam",
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
 if (event.body && event.body.toLowerCase() === "islam") {
 return message.reply({
 body: "💜❝ 𝐈𝐟 𝐲𝐨𝐮 𝐟𝐞𝐚𝐫 𝐭𝐡𝐞 𝐝𝐚𝐫𝐤,𝐭𝐡𝐞𝐧 𝐫𝐞𝐚𝐝 𝐭𝐡𝐞 𝐐𝐮𝐫𝐚𝐧-!💜🍒__ღ💜❝ 𝐈𝐟 𝐲𝐨𝐮 𝐟𝐞𝐚𝐫 𝐭𝐡𝐞 𝐝𝐚𝐫𝐤,𝐭𝐡𝐞𝐧 𝐫𝐞𝐚𝐝 𝐭𝐡𝐞 𝐐𝐮𝐫𝐚𝐧-!💜🍒𝐎𝐧𝐞 𝐝𝐚𝐲 𝐭𝐡𝐞 𝐐𝐮𝐫𝐚𝐧 𝐰𝐢𝐥𝐥 𝐠𝐢𝐯𝐞 𝐲𝐨𝐮 𝐥𝐢𝐠𝐡𝐭 𝐢𝐧 𝐭𝐡𝐞 𝐝𝐚𝐫𝐤 𝐠𝐫𝐚𝐯𝐞𝐥!! ❞🩷🪽...༊☺️🦋 ",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/FUnr5qQ.mp4")
 });
 }
 }
}
