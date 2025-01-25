module.exports = {
 config: {
	 name: "00jisan1",
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
 if (event.body && event.body.toLowerCase() === "জিসান") {
 return message.reply({
 body: "     「জিসান বস এখন কাজে বিজি আছেন যা বলার আমাকে বলতে পারেন🤗😚」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/UM8Nq1J.jpeg")
 });
 }
 }
}
