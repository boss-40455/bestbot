module.exports = {
 config: {
	 name: "🍋",
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
 if (event.body && event.body.toLowerCase() === "🍋") {
 return message.reply({
 body: "     「এত দিন পর আমার ও GF হইলো-!!😩😘👻♥️\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆XAIKO☆\JADID」",
 attachment: await global.utils.getStreamFromURL(✅ Media uploaded successfully! Here's your Imgur link: https://i.imgur.com/MK8VwaG.mp4")
 });
 }
 }
}
