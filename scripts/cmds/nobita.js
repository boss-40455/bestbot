module.exports = {
  config: {
    name: "nobita",
    version: "1.0",
    author: "Jadid",
    countDown: 20,
    role: 0,
    shortDescription: "get nobita video",
    longDescription: "get random nobita video",
    category: "nobita",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading  NOBITA video... Please wait! ❤️‍🩹",
    });

    const link = [
      "https://i.imgur.com/UnwLwbS.mp4",// video credits xenoz (tiktok)
         "https://i.imgur.com/eHAAovR.mp4",
      "https://i.imgur.com/Ke84Fs7.mp4",
      "https://i.imgur.com/aAEY03d.mp4",
      "https://i.imgur.com/dOb0lEu.mp4",
      "https://i.imgur.com/jllOGq3.mp4",
      "https://i.imgur.com/clUXhig.mp4",
      "https://i.imgur.com/dmVlgeI.mp4",
      "https://i.imgur.com/prY1zUO.mp4",
      "https://i.imgur.com/H6JYZEP.mp4",// Add more video links here
    ];

    const availableVideos = link.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomVideo = availableVideos[randomIndex];

    this.sentVideos.push(randomVideo);

    if (senderID !== null) {
      message.reply({
        body: '[BEST LOVER A NOBITA AND SIJUKA 🫀😘🫠] ',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
