module.exports = {
  config: {
    name: "oggy",
    version: "1.0",
    author: "Jadid",
    countDown: 20,
    role: 0,
    shortDescription: "get oggy video",
    longDescription: "get random oggy video",
    category: "cartoon",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading  OGGY video... Please wait! 🤠",
    });

    const link = [
      "https://i.imgur.com/OcxGVw4.mp4",// video credits xenoz (tiktok)
      "https://i.imgur.com/zAH0mKZ.mp4",
      "https://i.imgur.com/eYEIriP.mp4",
      "https://i.imgur.com/b6Bno52.mp4",
      "https://i.imgur.com/ZkvdktE.mp4",
      "https://i.imgur.com/e0HQRjD.mp4",
      "https://i.imgur.com/EEk5fq7.mp4",
      "https://i.imgur.com/KIz3v0M.mp4",// Add more video links here
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
        body: '[SIGMA OGGY 💣👄] ',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
