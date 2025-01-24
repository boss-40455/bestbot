module.exports = {
  config: {
    name: "gozovid",
    version: "1.0",
    author: "MR-JISAN",
    countDown: 20,
    role: 0,
    shortDescription: "get gozo video",
    longDescription: "get random gozo video",
    category: "anime",
    guide: "{pn} gozovidvdo",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗥𝗮𝗻𝗱𝗼𝗺 𝗚𝗼𝗷𝗼 𝘃𝗶𝗱𝗲𝗼... 𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁! ⏳",
    });

    const link = [
      "https://i.imgur.com/WZxiu40.mp4",// video credits xenoz (youtube)
      "https://i.imgur.com/iScktN8.mp4",
      "https://i.imgur.com/yuUGsm8.mp4",
      "https://i.imgur.com/tC4CGDR.mp4",
      "https://i.imgur.com/PoyaY3n.mp4",
      "https://i.imgur.com/MH5K184.mp4",
      "https://i.imgur.com/w2U1s8y.mp4",
      "https://i.imgur.com/budVFto.mp4",
      "https://i.imgur.com/AaCW0Ut.mp4",
      "https://i.imgur.com/72rYTVx.mp4",
      "https://i.imgur.com/NolDscd.mp4",
      "https://i.imgur.com/Rfj7234.mp4",
      "https://i.imgur.com/hWfxtLC.mp4",
      "https://i.imgur.com/U5h3miE.mp4",
      "https://i.imgur.com/we3OnZC.mp4",
      "https://i.imgur.com/ptZE3cA.mp4",
      "https://i.imgur.com/2adTPjf.mp4",
      "https://i.imgur.com/eYTdUED.mp4",
      "https://i.imgur.com/tGjlKL1.mp4",
      "https://i.imgur.com/NugcgZc.mp4",
      "https://i.imgur.com/vzFRimn.mp4",
      "https://i.imgur.com/RjzOqab.mp4",
      "https://i.imgur.com/OWaWK0u.mp4",
      "https://i.imgur.com/xiLfjKc.mp4",
      "https://i.imgur.com/Ff6BSmM.mp4",
      "https://i.imgur.com/gMGkbWl.mp4",
      "https://i.imgur.com/cHxlXgi.mp4",
      "https://i.imgur.com/ZNX9mat.mp4",
      "https://i.imgur.com/yIYuURx.mp4",
      "https://i.imgur.com/JJZv19y.mp4",
      "https://i.imgur.com/FldshPX.mp4",
      "https://i.imgur.com/kje5p9P.mp4",              
"https://i.imgur.com/ozDlHVa.mp4",
"https://i.imgur.com/oLZ0l8g.mp4",
"https://i.imgur.com/K3uIYhU.mp4",
"https://i.imgur.com/KmgtnZN.mp4",
      // Add more video links here
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
        body: '𝗣𝗢𝗪𝗘𝗥 𝗢𝗙 𝗚𝗢𝗭𝗢...🔥😎🤙',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
