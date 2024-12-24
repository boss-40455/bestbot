module.exports = {
  config: {
    name: "sigma",
    version: "1.0",
    author: "Jadid",
    countDown: 20,
    role: 0,
    shortDescription: "get sigma video",
    longDescription: "get random sigma video",
    category: "sigma",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading  sigma video... Please wait! 💀🤞🤙",
    });

    const link = [
      "https://i.imgur.com/BgCvHts.mp4",// video credits xenoz (tiktok)
         "https://i.imgur.com/JWvZNMc.mp4",
      "https://i.imgur.com/4nnAEE2.mp4",
      "https://i.imgur.com/GSy6Roa.mp4",
      "https://i.imgur.com/4x9E1KI.mp4",
      "https://i.imgur.com/4cs4dPd.mp4",
      "https://i.imgur.com/K4hu7BT.mp4",
      "https://i.imgur.com/tEsoTgP.mp4",
      "https://i.imgur.com/9m51f9J.mp4",
      "https://i.imgur.com/u1lyvVg.mp4",// Add more video links here
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
        body: '[SIGMA IS A NOT NAME BRO IT'S A BRAND OKAY ☠️💀]',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
