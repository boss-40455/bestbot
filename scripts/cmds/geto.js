module.exports = {
  config: {
    name: "geto",
    version: "1.0",
    author: "Jadid",
    countDown: 20,
    role: 0,
    shortDescription: "get geto x gojo  video",
    longDescription: "get random geto x gojo video",
    category: "anime",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading  GETO X GOJO video... Please wait! 🫂",
    });

    const link = [
      "https://i.imgur.com/RzwWBdA.mp4",// video credits xenoz (tiktok)
         "https://i.imgur.com/CGIr8jL.mp4",
      "https://i.imgur.com/0vBpTnM.mp4",
      "https://i.imgur.com/tASnuJ7.mp4",
       "https://i.imgur.com/wKmit7B.mp4",// Add more video links here
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
        body: '[GETO X GOJO 🫂🤘] ',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
