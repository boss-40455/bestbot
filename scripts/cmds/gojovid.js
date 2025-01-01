module.exports = {
  config: {
    name: "gojovid",
    version: "1.0",
    author: "Jadid",
    countDown: 20,
    role: 0,
    shortDescription: "get gojo video",
    longDescription: "get random gojo video",
    category: "anime",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "𝗟𝗢𝗔𝗗𝗜𝗡𝗚 𝗥𝗔𝗡𝗗𝗢𝗠 𝗚𝗢𝗝𝗢 𝗩𝗜𝗗𝗘𝗢.....𝗣𝗟𝗘𝗔𝗦𝗘 𝗪𝗔𝗜𝗧🥰",
    });

    const link = [
      "https://i.imgur.com/KEMLTVA.mp4",// video credits xaiko-jadid (tiktok)
         "https://i.imgur.com/THEpgaq.mp4",
      "https://i.imgur.com/jEgidhe.mp4",
      "https://i.imgur.com/UJJM3wy.mp4",
      "https://i.imgur.com/fHpspMq.mp4",
      "https://i.imgur.com/VOfSwDM.mp4",
      "https://i.imgur.com/4RgSbA9.mp4",
      "https://i.imgur.com/aE1L7Ff.mp4",
      "https://i.imgur.com/qglW4X2.mp4",

"https://i.imgur.com/r0wb0no.mp4",

"https://i.imgur.com/2myFkMm.mp4",

"https://i.imgur.com/TwxBlNf.mp4",

"https://i.imgur.com/fnMH3nV.mp4",

"https://i.imgur.com/kSxsvLy.mp4",

"https://i.imgur.com/jMia38Y.mp4",

"https://i.imgur.com/nwdl5V0.mp4",

"https://i.imgur.com/LMiDitG.mp4",

"https://i.imgur.com/6Y5GpNL.mp4",

"https://i.imgur.com/iXGvV1P.mp4",

"https://i.imgur.com/3QPs5zm.mp4",

"https://i.imgur.com/TMX9Su2.mp4",

"https://i.imgur.com/TMX9Su2.mp4",

"https://i.imgur.com/Dig5WZL.mp4",

"https://i.imgur.com/W48CRoY.mp4",

"https://i.imgur.com/5HJmV4q.mp4",

"https://i.imgur.com/Crlcn4j.mp4",

"https://i.imgur.com/bghFXyO.mp4",

"https://i.imgur.com/RdZWyvb.mp4",

"https://i.imgur.com/gHD2DVN.mp4",

"https://i.imgur.com/PhLBUtI.mp4",

"https://i.imgur.com/bHDxh4D.mp4",

"https://i.imgur.com/1NR92Qz.mp4",

"https://i.imgur.com/F5mVPSV.mp4",

"https://i.imgur.com/QyipOt1.mp4",// Add more video links here
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
        body: '[🥰 GOJO VIDEO🥰] ',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
