module.exports = {
	config: {
		name: "anipro",//this cmd is based on Nepali users lil bit for indian users 
		aliases: [],
		version: "1.0",
		author: "MR-JISAN",
		countDown: 20,
		role: 0,
		shortDescription: "gat sand anime best video",
		longDescription: "bot will send you random video to entertain you",
		category: "fun",
		guide: "{pn}",
	},

	sentVideos: [],

	onStart: async function ({ api, event, message }) {
		const senderID = event.senderID;

		const loadingMessage = await message.reply({
			body: "𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗿𝗮𝗻𝗱𝗼𝗺 𝗮𝗻𝗶𝗽𝗿𝗼 𝘃𝗶𝗱𝗲𝗼..𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗶𝗻𝗴 ✨🪶",
		});

		const link = [
			 "https://i.imgur.com/McWxEgQ.mp4",
      "https://i.imgur.com/9TeQzbu.mp4",
      "https://i.imgur.com/MUnTpTJ.mp4",
      "https://i.imgur.com/bZUbt93.mp4",
      "https://i.imgur.com/vFppYLf.mp4",
      "https://i.imgur.com/Zzxm9ML.mp4",
      "https://i.imgur.com/zABXi7f.mp4",
      "https://i.imgur.com/jbaqTnz.mp4",
      "https://i.imgur.com/wblp8o5.mp4",
      "https://i.imgur.com/o4wn5wk.mp4",
      "https://i.imgur.com/5tlxAMt.mp4",
      "https://i.imgur.com/keoUkI1.mp4",
      "https://i.imgur.com/Yl76hkX.mp4",
      "https://i.imgur.com/3P5hj9K.mp4",
      "https://i.imgur.com/AeacOF3.mp4",
      "https://i.imgur.com/Ql5tiV4.mp4",
      "https://i.imgur.com/TnhYYxk.mp4",
      "https://i.imgur.com/VQFCZ0A.mp4",
      "https://i.imgur.com/tj8gDxf.mp4",
      "https://i.imgur.com/r2KTOpe.mp4",
      "https://i.imgur.com/3P5hj9K.mp4",
      "https://i.imgur.com/TvGBbE3.mp4",
      "https://i.imgur.com/6efYgZS.mp4",
      "https://i.imgur.com/oE9FtbX.mp4",
      "https://i.imgur.com/qMsgkoO.mp4",
      "https://i.imgur.com/A8OSStg.mp4",
      "https://i.imgur.com/59bS3YD.mp4",
      "https://i.imgur.com/ADNWCQF.mp4",
      "https://i.imgur.com/7rXVp8i.mp4",
      "https://i.imgur.com/O6fV8ag.mp4",
      "https://i.imgur.com/rspO0BA.mp4",              
"https://i.imgur.com/ktuXTM8.mp4",
"https://i.imgur.com/vxWO41f.mp4",
"https://i.imgur.com/Lck3XsM.mp4",
"https://i.imgur.com/S5E1CgO.mp4",
"https://i.imgur.com/m94amM2.mp4",
"https://i.imgur.com/rt433cV.mp4",
 //gaysex69 
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
        body: '𝗘𝗡𝗝𝗢𝗬 ❤️💚🩶🖤💜',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 10000);
    }
  },
};
