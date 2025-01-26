module.exports = {
 config: {
	 name: "🙂💔",
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
 if (event.body && event.body.toLowerCase() === "🙂💔") {
 return message.reply({
 body: "     「  কষ্ট কতটুক বলতে পারবো না, \nক্ষত কত বড়ো দেখতে পারবোনা, চোখের দেখায় বুঝতে পারলে বুঝে নাও.....!\n\n চোখের পানি পরেছে কতটুকু গুনতে পারবোনা..!!!💔💔😥\n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝗠𝗥☆\n\n𝗝𝗜𝗦𝗔𝗡 ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/1Gia4ZS.mp4")
 });
 }
 }
}
