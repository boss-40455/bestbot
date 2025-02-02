module.exports = {
  config: {
    name: "obitovid",
    version: "1.0",
    author: "MR-JISAN//Dot not author change",
    countDown: 20,
    role: 0,
    shortDescription: "get obito video",
    longDescription: "get random obito video",
    category: "anime",
    guide: "{pn} obitovdo",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "𝙻𝚘𝚊𝚍𝚒𝚗𝚐 𝙾𝚏 𝚛𝚊𝚗𝚍𝚘𝚖 𝚘𝚋𝚒𝚝𝚘 𝚟𝚒𝚍𝚎𝚘...💔⏳",
    });

    const link = [
      "https://i.imgur.com/N2VfafU.mp4",",// video credit (yt)",// video credits xenoz (youtube)
      "https://i.imgur.com/tE6A9Dt.mp4",
      "https://i.imgur.com/K0AyJnx.mp4",
      "https://i.imgur.com/nzFOdzm.mp4",
      "https://i.imgur.com/hDDXXqC.mp4",
      "https://i.imgur.com/b7WAX5C.mp4",
      "https://i.imgur.com/1nNTZ2W.mp4",
      "https://i.imgur.com/JnT7nft.mp4",
      "https://i.imgur.com/mHX3nrl.mp4",
      "https://i.imgur.com/oVEDD1N.mp4",
      "https://i.imgur.com/ajM8YMD.mp4",
      "https://i.imgur.com/Irc0VYi.mp4",
      "https://i.imgur.com/JK16uUn.mp4",
      "https://i.imgur.com/7lMpUKs.mp4",
      "https://i.imgur.com/foFjugz.mp4",
      "https://i.imgur.com/EnoOvGZ.mp4",
      "https://i.imgur.com/u4KnlkS.mp4",
      "https://i.imgur.com/N2VfafU.mp4",
      "https://i.imgur.com/4FzA2cD.mp4",
      "https://i.imgur.com/9iEPtbz.mp4",
      "https://i.imgur.com/hoe6Wjz.mp4",
      "https://i.imgur.com/1iu55g7.mp4",
      "https://i.imgur.com/JTjZtb8.mp4",
      "https://i.imgur.com/7Lu5clA.mp4",
      "https://i.imgur.com/5cLlsbF.mp4",
      "https://i.imgur.com/SsVWsX4.mp4",
      "https://i.imgur.com/qETfRD6.mp4",
      "https://i.imgur.com/PY2cQIb.mp4",
      "https://i.imgur.com/3mULpH6.mp4",
      "https://i.imgur.com/ucwfKiQ.mp4",
      "https://i.imgur.com/ucwfKiQ.mp4",
      "https://i.imgur.com/hfVJoor.mp4",              
"https://i.imgur.com/pEqwPnx.mp4",
"https://i.imgur.com/2YcWdDS.mp4",
"https://i.imgur.com/lISO0Qh.mp4",
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
        body: '𝗟𝗲𝗮𝗿𝗻 𝗳𝗿𝗼𝗺 𝗼𝗯𝗶𝘁𝗼 𝘁𝗼 𝘄𝗵𝗼𝗺 𝗹𝗼𝘃𝗲 𝗶𝘀 𝗯𝗲𝗰𝗮𝘂𝘀𝗲 𝗵𝗲 𝗰𝗼𝘂𝗹𝗱 𝗵𝗮𝘃𝗲 𝗱𝗶𝗲𝗱 𝗳𝗼𝗿 𝗵𝗶𝘀 𝗹𝗼𝘃𝗲..🥀 💔 😅 😥',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
