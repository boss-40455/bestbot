module.exports = {
 config: {
	 name: "😅",
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
 if (event.body && event.body.toLowerCase() === "😅") {
 return message.reply({
 body: "     রাতের ঘুমটা স্বার্থপর হয়ে গেল কবে প্রতিষ্ঠিত হবো..!😅💔🥀♥️\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆JISAN☆\nXAIKOッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/CI9rBXQ.mp4")
 });
 }
 }
}
