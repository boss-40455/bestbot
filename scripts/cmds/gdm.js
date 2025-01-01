module.exports = {
 config: {
	 name: "goddmorning",
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
 if (event.body && event.body.toLowerCase() === "goodmorning") {
 return message.reply({
 body: "     「GOOD MORNING 🌅\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆XAIKO☆\𝗝𝗔𝗗𝗜𝗗」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/LZY2zhR.gif")
 });
 }
 }
}
