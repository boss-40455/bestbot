module.exports = {
 config: {
	 name: "anime",
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
 if (event.body && event.body.toLowerCase() === "anime") {
 return message.reply({
 body: "     「𝗔𝗻𝗶𝗺𝗲 𝗜𝘁'𝘀 𝗡𝗼𝘁 𝗖𝗮𝗿𝘁𝗼𝗻 𝗔𝗻𝗶𝗺𝗲 𝗜𝘁'𝘀 𝗘𝗺𝗼𝘁𝗶𝗼𝗻 𝗔𝗻𝗶𝗺𝗲 𝘁𝗲𝗮𝗰𝗵𝘀 𝘂𝘀 𝘄𝗵𝗮𝘁 𝗶𝘀 𝗿𝗲𝗮𝗹𝗶𝘁𝘆...,🫀💝💝\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝗠𝗥 ☆\n 𝗝𝗜𝗦𝗔𝗡ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/rlLMxcZ.mp4")
 });
 }
 }
}
