module.exports = {
  config: {
    name: "animix",
    version: "1.0",
    author: "MR-JISAN/dot author change)",
    countDown: 20,
    role: 0,
    shortDescription: "get animix video",
    longDescription: "get random animix video",
    category: "anime",
    guide: "{pn} animixvdo",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐫𝐚𝐧𝐝𝐨𝐦 𝐀𝐧𝐢𝐦𝐢𝐱 𝐯𝐢𝐝𝐞𝐨... 𝐏𝐥𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭! 🕕 🔖",
    });

    const link = [
      "https://i.imgur.com/RXO9A0O.mp4",// MR-JISAN (youtube)
      "https://i.imgur.com/8fN0IUj.mp4",
      "https://i.imgur.com/16g5s0t.mp4",
      "https://i.imgur.com/vtIsthM.mp4",
      "https://i.imgur.com/GeCQyBC.mp4",
      "https://i.imgur.com/01fjtWz.mp4",
      "https://i.imgur.com/NkWwJrZ.mp4",
      "https://i.imgur.com/DfG99Nw.mp4",
      "https://i.imgur.com/RONx85H.mp4",
      "https://i.imgur.com/itqwsMV.mp4",
      "https://i.imgur.com/R9uouvf.mp4",
      "https://i.imgur.com/nJk0b3I.mp4",
      "https://i.imgur.com/7UtNIEN.mp4",
      "https://i.imgur.com/sgMF3gt.mp4",
      "https://i.imgur.com/cg2Ekj8.mp4",
     "https://i.imgur.com/5Pv3EJO.mp4",
      "https://i.imgur.com/G1iNixZ.mp4",
      "https://i.imgur.com/eYicjKd.mp4",
      "https://i.imgur.com/QnNagn3.mp4",
      "https://i.imgur.com/PsK8TcE.mp4",
      "https://i.imgur.com/HRIUtFQ.mp4",
      "https://i.imgur.com/FW6ZxNH.mp4",
      "https://i.imgur.com/fzcGU9u.mp4",
      "https://i.imgur.com/8FDTH8u.mp4",
      "https://i.imgur.com/gPGTHa3.mp4",
      "https://i.imgur.com/y8nBIR3.mp4",
      "https://i.imgur.com/fYUfiqw.mp4",
      "https://i.imgur.com/JGBRHoT.mp4",
      "https://i.imgur.com/OwU3CvT.mp4",
      "https://i.imgur.com/6p41mHb.mp4",
      "https://i.imgur.com/ej0dWyt.mp4",
      "https://i.imgur.com/Z0v2EZk.mp4",              
"https://i.imgur.com/CLCDfKd.mp4",
"https://i.imgur.com/mSGjukm.mp4",
"https://i.imgur.com/SzXaKOT.mp4",
"https://i.imgur.com/7ieUR1n.mp4",
"https://i.imgur.com/dBmR9v6.mp4",
"https://i.imgur.com/CCK8TQQ.mp4",
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
        body: '𝗘𝗡𝗝𝗢𝗬 𝗧𝗛𝗔 𝗔𝗡𝗜𝗠𝗜𝗫 4𝗞 𝗩𝗜𝗗𝗘𝗢 𝗙𝗘𝗘𝗟 𝗧𝗛𝗔 𝗔𝗡𝗜𝗡𝗘 🖤😌🍂',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
