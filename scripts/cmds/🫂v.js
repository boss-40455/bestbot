module.exports = {
 config: {
	 name: "🫂",
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
 if (event.body && event.body.toLowerCase() === "🫂") {
 return message.reply({
 body: "     「সব ভেঙে যাবে কিন্তু বন্ধুত্ব ভাঙবে না পৃথিবীতে সবচেয়ে  সেরা বন্ধুত্ব ..!🥰😇🥀♥️\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆XAIKO☆\JADIDッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/xPU2xzw.mp4")
 });
 }
 }
}
