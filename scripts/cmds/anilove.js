module.exports = {
  config: {
    name: "anilove",
    version: "1.0",
    author: "MR-JISAN",
    countDown: 20,
    role: 0,
    shortDescription: "get anilove video",
    longDescription: "get random anime love video",
    category: "anime",
    guide: "{pn} anilovevdo",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗟𝗼𝘃𝗲 𝗩𝗶𝗱𝗲𝗼...🌿❣️",
    });

    const link = [
      "https://i.imgur.com/KEMLTVA.mp4",// video credits xenoz (youtube)
      "https://i.imgur.com/THEpgaq.mp4",
      "https://i.imgur.com/jEgidhe.mp4",
      "https://i.imgur.com/aE1L7Ff.mp4",
      "https://i.imgur.com/qglW4X2.mp4",
      "https://i.imgur.com/r0wb0no.mp4",
      "https://i.imgur.com/2myFkMm.mp4",
      "https://i.imgur.com/UJJM3wy.mp4",
      "https://i.imgur.com/fHpspMq.mp4",
      "https://i.imgur.com/VOfSwDM.mp4",
      "https://i.imgur.com/4RgSbA9.mp4",
      "https://i.imgur.com/EBkMt4j.mp4",
      "https://i.imgur.com/F5mVPSV.mp4",
      "https://i.imgur.com/QyipOt1.mp4",
      "https://i.imgur.com/jIL7Y3c.mp4",
      "https://i.imgur.com/5ary7RR.mp4",
      "https://i.imgur.com/gHD2DVN.mp4",
      "https://i.imgur.com/PhLBUtI.mp4",
      "https://i.imgur.com/bHDxh4D.mp4",
      "https://i.imgur.com/1NR92Qz.mp4",
      "https://i.imgur.com/5HJmV4q.mp4",
      "https://i.imgur.com/Crlcn4j.mp4",
      "https://i.imgur.com/bghFXyO.mp4",
      "https://i.imgur.com/RdZWyvb.mp4",
      "https://i.imgur.com/3QPs5zm.mp4",
      "https://i.imgur.com/TMX9Su2.mp4",
      "https://i.imgur.com/Dig5WZL.mp4",
      "https://i.imgur.com/W48CRoY.mp4",
      "https://i.imgur.com/nwdl5V0.mp4",
      "https://i.imgur.com/6Y5GpNL.mp4",
      "https://i.imgur.com/iXGvV1P.mp4",
      "https://i.imgur.com/TwxBlNf.mp4",              
"https://i.imgur.com/fnMH3nV.mp4",
"https://i.imgur.com/kSxsvLy.mp4",
"https://i.imgur.com/jMia38Y.mp4",
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
        body: '𝗘𝗡𝗝𝗢𝗬 💞',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
