module.exports = {
 config: {
	 name: "goodnight",
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
 if (event.body && event.body.toLowerCase() === "goodnight") {
 return message.reply({
 body: "     「GOOD NIGHT 🌃 \n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆XAIKO☆\𝗝𝗔𝗗𝗜𝗗」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/gpiY243.gif")
 });
 }
 }
}
