module.exports = {
  config: {
    name: "sukuna",
    version: "1.0",
    author: "Jadid",
    countDown: 20,
    role: 0,
    shortDescription: "get sukuna video",
    longDescription: "get random sukuna video",
    category: "anime",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading random sukuna video... Please wait! 🕐",
    });

    const link = [
      "https://i.imgur.com/H496E3A.mp4",// video credits xenoz (youtube)
      "https://i.imgur.com/lQGFVxl.mp4",
      "https://i.imgur.com/dCxYUEW.mp4",
      "https://i.imgur.com/1FAVMFo.mp4",
      "https://i.imgur.com/enCVtFY.mp4",
      "https://i.imgur.com/8G2L19u.mp4",
      "https://i.imgur.com/HG4hvc4.mp4",
      "https://i.imgur.com/TIKSrtv.mp4",
      "https://i.imgur.com/REcAAAa.mp4",
      "https://i.imgur.com/hY9Evpf.mp4",
      "https://i.imgur.com/7bIT5Sj.mp4",
      "https://i.imgur.com/4Fs71Vb.mp4",
      "https://i.imgur.com/7nBHxE9.mp4",
      "https://i.imgur.com/P9bkb6n.mp4",
      "https://i.imgur.com/dgUtnbz.mp4",
      "https://i.imgur.com/PiMhtYg.mp4",
      "https://i.imgur.com/g1GljKm.mp4",
      "https://i.imgur.com/HdJf2az.mp4",
      "https://i.imgur.com/NvhMNsp.mp4",
      "https://i.imgur.com/GoQNyi3.mp4",// Add more video links here
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
        body: 'ENJOY..🤍',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
