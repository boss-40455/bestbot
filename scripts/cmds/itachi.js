module.exports = {
  config: {
    name: "itachi",
    version: "1.0",
    author: "Jadid",
    countDown: 20,
    role: 0,
    shortDescription: "get anime video",
    longDescription: "get random amine video",
    category: "anime",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading  Uchiha video... Please wait! 💀🤞🤙",
    });

    const link = [
      "https://i.imgur.com/AVZ3Dxb.mp4",// video credits xenoz (tiktok)
               "https://i.imgur.com/fQ1ApC0.mp4",
      "https://i.imgur.com/bVcV8KN.mp4",
      "https://i.imgur.com/HSUjucE.mp4",
      "https://i.imgur.com/2Ejw83c.mp4",
      "https://i.imgur.com/SkrMb8l.mp4",
      "https://i.imgur.com/z1g58JS.mp4",
      "https://i.imgur.com/YIeLK2v.mp4",
      "https://i.imgur.com/1Ms1jBk.mp4",// Add more video links here
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
        body: '[UCIHA ITACHI UCHIHA VILEAN OFF NARUTO👿🤙]',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
