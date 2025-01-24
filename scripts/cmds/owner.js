const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "owner",
    aliases: ["hyuga"],
    author: " MR-JISAN ", 
    version: "2.0",
    cooldowns: 5,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "get bot owner info"
    },
    category: "owner",
    guide: {
      en: "{p}{n}"
    }
  },
  onStart: async function ({ api, event }) {
      try {
        const loadingMessage = "𝙻𝙾𝙰𝙳𝙸𝙽𝙶......🤦‍♂️ ";
        await api.sendMessage(loadingMessage, event.threadID);

        const ownerInfo = {
          name: '😉✨ 𝗠𝗥-𝗝𝗜𝗦𝗔𝗡 🍀🎀',
          gender: '𝗕𝗢𝗬',
          hobby: '𝐅𝐨𝐨𝐭𝐛𝐚𝐥𝐥🏈',
          relationship: '❤️‍🩹🫶𝗦𝗜𝗡𝗚𝗟𝗘🙁😩',
          facebookLink: 'ʚɸɞhttps://www.facebook.com/XAIKO.JISAN?mibextid=ZbWKwL.ʚɸɞ',
          bio: '❀𝗢𝗻𝗰𝗲 𝘆𝗼𝘂 𝗹𝗼𝘀𝗲 𝗳𝗮𝗶𝘁𝗵 𝗮𝗻𝗱 𝗯𝗿𝗲𝗮𝘁𝗵, 𝗶𝘁 𝗻𝗲𝘃𝗲𝗿 𝗰𝗼𝗺𝗲𝘀 𝗯𝗮𝗰𝗸 𝗜 𝗵𝗮𝘃𝗲 𝗻𝗼 𝗳𝗮𝗶𝘁𝗵 𝗶𝗻 𝗮𝗻𝘆𝗼𝗻𝗲.🙂💔🌺'
        };

        const videoUrl = 
["https://i.imgur.com/xylAlyY.mp4",
"https://i.imgur.com/4ArgYHR.mp4",]    
          
        const tmpFolderPath = path.join(__dirname, 'tmp');

        if (!fs.existsSync(tmpFolderPath)) {
          fs.mkdirSync(tmpFolderPath);
        }

        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

        fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

        const response = `
          🍁𝗢𝘄𝗻𝗲𝗿 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻🍀:
❍⌇─➭ 
(◍•ᴗ•◍)𝗡𝗔𝗠𝗘 : ${ownerInfo.name}
❍⌇─➭ 
♀𝗚𝗘𝗡𝗥𝗘♂: ${ownerInfo.gender}
❍⌇─➭ 
🏓𝗛𝗢𝗕𝗕𝗬⛹‍♂: ${ownerInfo.hobby}
❍⌇─➭ 
𝗥𝗘𝗟𝗔𝗧𝗢𝗡𝗦𝗛𝗜𝘗💞: ${ownerInfo.relationship}
❍⌇─➭ 
 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞🔗: ${ownerInfo.facebookLink}
❍⌇─➭ 
      ◈ 𝗦𝗧𝗔𝗧𝗨𝗦 ◈: ${ownerInfo.bio} 🇧🇩      `;

        await api.sendMessage({
          body: response,
          attachment: fs.createReadStream(videoPath)
        }, event.threadID);
      } catch (error) {
        console.error('Error in owner command:', error);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
      }
    },
    onChat: async function({ api, event }) {
      try {
        const lowerCaseBody = event.body.toLowerCase();
        
        if (lowerCaseBody === "owner" || lowerCaseBody.startsWith("{p}owner")) {
          await this.onStart({ api, event });
        }
      } catch (error) {
        console.error('Error in onChat function:', error);
      }
    }
            }
