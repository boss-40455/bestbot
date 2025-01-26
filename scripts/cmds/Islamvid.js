module.exports = {
	config: {
		name: "islam",//this cmd is based on Nepali users lil bit for indian users 
		aliases: [],
		version: "1.0",
		author: "Mr-Jisan",
		countDown: 20,
		role: 0,
		shortDescription: "",
		longDescription: "bot will send you random video to entertain you",
		category: "islam",
		guide: "{pn}",
	},

	sentVideos: [],

	onStart: async function ({ api, event, message }) {
		const senderID = event.senderID;

		const loadingMessage = await message.reply({
			body: "𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗶𝘀𝗹𝗮𝗺𝗶𝗸 𝘃𝗶𝗱𝗲𝗼... 🤲💖",
		});
   const link = [ "https://drive.google.com/uc?id=1607fc8LKeiwjPNIvdY448d5H2_yeQGSy",
    "https://drive.google.com/uc?id=14emH_6vF3fuJe2vmeC52e575TppboHne",
    "https://drive.google.com/uc?id=15APJbSuGLY7zCiZsAgU7HjCJeinYDX9K",
    "https://drive.google.com/uc?id=15ImMIXM_mqPM8hXpQNPLTGCrm9sh0RPS",
    "https://drive.google.com/uc?id=14qUnMm3J3cUqImDDy4ehRjDiv_NeRpMo",
    "https://drive.google.com/uc?id=15ZqanDuEYrC-lHSsiIYAjWagr1h8yZpP",
    "https://drive.google.com/uc?id=155rlKywUHP3xzgJkQ1ztxXpKnDxXtXlb",
    "https://drive.google.com/uc?id=156MaTKck-_ureBfj7NI-iU7_rGut-ssD",
    "https://drive.google.com/uc?id=15l4gxljfoe9-WvQKzffjambLC5Tt1YNd",
    "https://drive.google.com/uc?id=15fauLjjElJ0loxajhUvDeaKTqW4YdskK",
    "https://drive.google.com/uc?id=16IBAHr7AlKM1RR4hiTBuvAn5x27ed6j4",
    "https://drive.google.com/uc?id=15amvNN6WLIKwg17ufgFhs7EqI0EXNxy5",
    "https://drive.google.com/uc?id=15OS5gFi2QGZm5TTStIn6iD3YRUNHw1Zm",
    "https://drive.google.com/uc?id=168qMjWaEyObyBgJrilyTb4vOcvgynQAD",
    "https://drive.google.com/uc?id=15FFHINVpAbr4ykjkhk1_vQ5uDQakTcpy",
    "https://drive.google.com/uc?id=14j501R3TheTH3YLInLZlLTU-oXVvjegw",
    "https://drive.google.com/uc?id=15UmCBW1ddt6Kpt9xytqPpXiJip-05bDG",
    "https://drive.google.com/uc?id=14e0lCDG6vwzGi8apiDcm38Wov911501y",
    "https://drive.google.com/uc?id=15Cbl-YGajKcV0QMp6bDtRT4dI-K6lWR0",
    "https://drive.google.com/uc?id=15hJ9St2amhdLnowAvuDn0BicgZ5Aw0rW",
    "https://drive.google.com/uc?id=15QIjrXblGNjf5b3J6dRQ4XMSV-_j7soB",
    "https://drive.google.com/uc?id=15tgfSnX-ICfO8V5T6vXbb_AwYkfl_EYX",
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
        body: '🤲🤲🤲',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 10000);
    }
  },
};
