module.exports = {
 config: {
   name: "fdsip",
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
 if (event.body && event.body.toLowerCase() === "jisan") {
 return message.reply({
 body: "জাদিদ বস এর BEST FRIEND হয়-!!🖤💋",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/eHvW1Hf.jpeg")
 });
 }
 }
}
