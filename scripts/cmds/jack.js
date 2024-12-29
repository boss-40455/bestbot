module.exports = {
  config: {
    name: "jack",
    version: "1.0",
    author: "Jadid",
    countDown: 20,
    role: 0,
    shortDescription: "get jack video",
    longDescription: "get random jack video",
    category: "cartoon",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading JACK video... Please wait! 😎",
    });

    const link = [
      "https://i.imgur.com/tRVLXIo.mp4",// video credits xenoz (tiktok)
      "https://i.imgur.com/gkE9RId.mp4",
      "https://i.imgur.com/kBF5h0x.mp4",
      "https://i.imgur.com/4LFkSL2.mp4",
      "https://i.imgur.com/LftQURc.mp4",
      "https://i.imgur.com/iFBonNE.mp4",
      "https://i.imgur.com/jTQlhs9.mp4",
      "https://i.imgur.com/6V8ySGt.mp4",
      "https://i.imgur.com/DmtWTwA.mp4",
      "https://i.imgur.com/kDmMuVP.mp4",// Add more video links here
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
        body: '[I'M JACK THIS FATHER OF COOKROS 😤😎🤠] ',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
