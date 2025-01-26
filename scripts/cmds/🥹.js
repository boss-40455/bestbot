module.exports = {
 config: {
	 name: "🥹",
	 version: "1.0",
	 author: "JISAN",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "🥹") {
 return message.reply({
 body: "     「  😅💔🙂\n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆JISAN☆\n\nXAIKO ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/MUGYnT5.mp4")
 });
 }
 }
}
