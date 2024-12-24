module.exports = {
 config: {
	 name: "obito",
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
 if (event.body && event.body.toLowerCase() === "obito") {
 return message.reply({
 body: "     「THE BEST BROKEN HERO IS A OBITO UCHIHA🙂😅🥰\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆JADID☆\JADID」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/bvs9gV0.mp4")
 });
 }
 }
	 }
