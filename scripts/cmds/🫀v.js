module.exports = {
 config: {
	 name: "🫀",
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
 if (event.body && event.body.toLowerCase() === "🫀") {
 return message.reply({
 body: "     「দুনিয়া চাহে যবি কাহে দ্যাসতিমে হে আসলি মাজা..!💯❤️‍🩹🥀♥️\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆XAIKO☆\JADID」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/ImPJMnb.mp4")
 });
 }
 }
}
