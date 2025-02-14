module.exports = {
 config: {
	 name: "olivia",
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
 if (event.body && event.body.toLowerCase() === "olivia") {
 return message.reply({
 body: "     「𝗛𝗘𝗟𝗟𝗢 𝗜'𝗠 𝗢𝗙𝗙𝗦𝗜𝗬𝗔𝗟 𝗕𝗢𝗧 𝗢𝗟𝗶𝗩𝗜𝗔 𝗨𝗦𝗘 𝗬𝗢𝗨𝗥 𝗣𝗥𝗘𝗙𝗜𝗫 {.} 𝗔𝗡𝗗 𝗧𝗔𝗬𝗣 𝗬𝗢𝗨 𝗛𝗘𝗟𝗣 𝗔𝗡𝗗 𝗘𝗡𝗝𝗢𝗬 𝗧𝗛𝗔 𝗖𝗠𝗗 𝗧𝗛𝗔𝗡𝗞𝗨...✨🖤🍁」\n\n𝗠𝗥-𝗝𝗜𝗦𝗔𝗡",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Mcjvt0B.jpeg")
 });
 }
 }
     }
