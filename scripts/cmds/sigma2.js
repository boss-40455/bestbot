module.exports = {
  config: {
    name: "sigma2",
    version: "1.0",
    author: "Jadid",
    countDown: 20,
    role: 0,
    shortDescription: "get sigma video",
    longDescription: "get random sigma2 video",
    category: "sigma",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading  sigma video... Please wait! ☠️",
    });

    const link = [
      "https://i.imgur.com/CR03MlN.mp4",// video credits xenoz (tiktok)
         "https://i.imgur.com/GIJ2sjv.mp4",
      "https://i.imgur.com/BkA5FVj.mp4",
      "https://i.imgur.com/vDnWQYO.mp4",
      "https://i.imgur.com/pczrx5t.mp4",
      "https://i.imgur.com/Ps9n8ID.mp4",
      "https://i.imgur.com/G90xE73.mp4",
      "https://i.imgur.com/NIyah1V.mp4",
      "https://i.imgur.com/KF7fxEm.mp4",
      "https://i.imgur.com/bNWWamW.mp4",// Add more video links here
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
        body: '[BEST VELAN A SIGMA BOY 👿👿🤟] ',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
