module.exports = {
 config: {
	 name: "sukuna",
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
 if (event.body && event.body.toLowerCase() === "sukuna") {
 return message.reply({
 body: "     「 SUKUNA😎😎\n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆JISAN☆\n\nXAIKO ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/fyd7ECl.mp4")
 });
 }
 }
}
