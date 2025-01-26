module.exports = {
 config: {
   name: "💔💔",
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
 if (event.body && event.body.toLowerCase() === "💔💔") {
 return message.reply({
 body: "When the outside smiles, the inside decays......!! 🙂😞 The story can be told.....!! 🥀not a feeling...!! 💔😓",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/YQSFYvl.mp4")
 });
 }
 }
}
