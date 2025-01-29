const axios = require("axios");

module.exports = {
  config: {
    name: "4k",
    aliases: ["upscale"],
    version: "1.1",
    role: 0,
    author: "Fahim_Noob",
    countDown: 5,
    longDescription: "Upscale images to 4K resolution.",
    category: "image",
    guide: {
      en: "${pn} reply to an image to upscale it to 4K resolution."
    }
  },
  onStart: async function ({ message, event }) {
    if (!event.messageReply || !event.messageReply.attachments || !event.messageReply.attachments[0]) {
      return message.reply("Please reply to an image to upscale it.");
    }
    const imgurl = encodeURIComponent(event.messageReply.attachments[0].url);
    const noobs = 'xyz';
    const upscaleUrl = `https://smfahim.${noobs}/4k?url=${imgurl}`;
    
    message.reply("🔄| 𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴... 𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁 𝗮 𝗺𝗼𝗺𝗲𝗻𝘁.", async (err, info) => {
      try {
        const { data: { image } } = await axios.get(upscaleUrl);
        const attachment = await global.utils.getStreamFromURL(image, "upscaled-image.png");

        message.reply({
          body: "✅| 𝗛𝗲𝗿𝗲 𝗶𝘀 𝘆𝗼𝘂𝗿 4𝗞 𝘂𝗽𝘀𝗰𝗮𝗹𝗲𝗱 𝗶𝗺𝗮𝗴𝗲:",
          attachment: attachment
        });
        let processingMsgID = info.messageID;
        message.unsend(processingMsgID);

      } catch (error) {
        console.error(error);
        message.reply("❌| There was an error upscaling your image.");
      }
    });
  }
};
