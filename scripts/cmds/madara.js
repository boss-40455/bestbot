module.exports = {
  config: {
    name: "madara",
    version: "1.0",
    author: "Jadid",
    countDown: 20,
    role: 0,
    shortDescription: "get madara uchiha video",
    longDescription: "get random madara uchiha video",
    category: "anime",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading  MADAR UCHIHA video... Please wait! ☠️",
    });

    const link = [
      "https://i.imgur.com/4yA8dbV.mp4",// video credits xenoz (tiktok)
         "https://i.imgur.com/cp0EzgM.mp4",
      "https://i.imgur.com/KpbcZ8p.mp4",
      "https://i.imgur.com/stljmwE.mp4",
      "https://i.imgur.com/83e8ZER.mp4",
      "https://i.imgur.com/SeimyFE.mp4",
      "https://i.imgur.com/0EqPcUy.mp4",
      "https://i.imgur.com/QGkCgaS.mp4",
      "https://i.imgur.com/6AjttMo.mp4",
      "https://i.imgur.com/H8Szc39.mp4",// Add more video links here
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
        body: '[GOST UCHIHA ☠️🤘] ',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
