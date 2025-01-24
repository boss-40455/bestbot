module.exports = {
  config: {
    name: "nobita",
    version: "1.0",
    author: "MR-JISAN",
    countDown: 20,
    role: 0,
    shortDescription: "get nobita video",
    longDescription: "get random nobita video",
    category: "𝗖𝗔𝗥𝗧𝗢𝗡",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙾𝙵 𝙽𝙾𝙱𝙸𝚃𝙰 𝚅𝙸𝙳𝙴𝙾 𝚆𝙰𝙸𝚃 𝙿𝙻𝙴𝙰𝚂𝙴 😅💛",
    });

    const link = [
      "https://i.imgur.com/UnwLwbS.mp4",// video credits xenoz (tiktok)
         "https://i.imgur.com/eHAAovR.mp4",
      "https://i.imgur.com/aAEY03d.mp4",
      "https://i.imgur.com/jllOGq3.mp4",
      "https://i.imgur.com/clUXhig.mp4",
      "https://i.imgur.com/prY1zUO.mp4",
      "https://i.imgur.com/H6JYZEP.mp4",
"https://i.imgur.com/WzYd1m9.mp4",
"https://i.imgur.com/bZx4IjL.mp4",
"https://i.imgur.com/Bdar4SH.mp4",
"https://i.imgur.com/QBpKZmu.mp4",
"https://i.imgur.com/IPlibDo.mp4",
"https://i.imgur.com/sCfk0nW.mp4",
"https://i.imgur.com/tHyTL2z.mp4",
"https://i.imgur.com/tuuRAZw.mp4",
"https://i.imgur.com/b9HyJjy.mp4",
"https://i.imgur.com/iitDsAz.mp4",
"https://i.imgur.com/n5AJpOq.mp4",
"https://i.imgur.com/hXX7LLd.mp4",
"https://i.imgur.com/2jZ2VVs.mp4",
"https://i.imgur.com/Hx3dwF1.mp4",
"https://i.imgur.com/eQG8n61.mp4",
"https://i.imgur.com/ZauKBp5.mp4",
"https://i.imgur.com/rckJber.mp4",
"https://i.imgur.com/Y0nyO6M.mp4",
"https://i.imgur.com/veB1A1v.mp4",
"https://i.imgur.com/EtpZTym.mp4",
"https://i.imgur.com/91XnpEW.mp4",
"https://i.imgur.com/eHAAovR.mp4",
"https://i.imgur.com/Sb6frpR.mp4",
"https://i.imgur.com/A26BMMr.mp4",
"https://i.imgur.com/dAtYEUP.mp4"

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
        body: '[𝗧𝗛𝗔 𝗕𝗘𝗦𝗧 𝗟𝗢𝗩𝗘 𝗢𝗙 𝗡𝗢𝗕𝗜𝗧𝗔 𝗦𝗜𝗭𝗢𝗞𝗔 💛 🩷 🥀] ',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
