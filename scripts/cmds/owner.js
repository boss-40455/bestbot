const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"Tokodori",// Convert By Goatbot Tokodori 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝐗𝐀𝐈𝐊𝐎-𝐉𝐀𝐃𝐈𝐃 ',
      gender: 'Male',
      age: '17',
      height: '5"1',
      facebookLink: 'https://www.facebook.com/C.E.O.NOBITA.2021',
      nick: '𝐗𝐀𝐈𝐊𝐎💀'
    };

    const bold = 'https://i.imgur.com/o36KBzm.mp4'; 
    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
𝙾𝚆𝙽𝙴𝚁 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽:-🧾
𝙽𝙰𝙼𝙴: ${ownerInfo.name}
𝙶𝙴𝙽𝙳𝙴𝚁: ${ownerInfo.gender}
𝙰𝙶𝙴: ${ownerInfo.age}
𝙷𝙴𝙸𝙶𝙷𝚃: ${ownerInfo.height}
𝙵𝙰𝙲𝙴𝙱𝙾𝙻𝙺: ${ownerInfo.facebookLink}\n𝙽𝙸𝙲𝙺: ${ownerInfo.nick}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
