module.exports = {
	config: {
		name: "sura",//this cmd is based on Nepali users lil bit for indian users 
		aliases: [],
		version: "1.0",
		author: "MR-JISAN",
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
			body: "𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝘄𝗶𝘁𝗵 𝗦𝘂𝗿𝗮... 🖤🤲",
		});
const link = [ 
"https://drive.google.com/uc?id=1Ml6znasS_cajYJVS8OJ19DQO6aaLzWkc",

"https://drive.google.com/uc?id=1NKyRitWSGriX3TG23YTLj0tgfySwn6Q-",

"https://drive.google.com/uc?id=1N-sbqx4LjEc-OOEa0MXhM2crzyvn3ynj",

"https://drive.google.com/uc?id=1N9AzB4zAWlz2bG3UesZ7GawyJykRO79s",

"https://drive.google.com/uc?id=1MrLaZG9NyfSDLjZvCRK69L0nnepV6R7U",

"https://drive.google.com/uc?id=1N7W-i_Xr3lxM0cvv4dQlGUvsFGoyHnIl",

"https://drive.google.com/uc?id=1Mn8JXddjoYKHkNcgAdnw8dnwhr2Ems6s",

"https://drive.google.com/uc?id=1NLbrtpig80X1_NTlRHmeKG7ZQPtTmdTJ",

"https://drive.google.com/uc?id=1NFnzqXl8aC_9tpngoKcfeWEyyT3DNdGW",

"https://drive.google.com/uc?id=1NAkALvze0fkzkRvzDSTQvt-nqCIqqQBv",

"https://drive.google.com/uc?id=1NFrEbcdP3CnZ1ZB1KKDCDa6gpV5x4W4t",

"https://drive.google.com/uc?id=1MpowaaCScbWY-vEGtfLX5xPzKCQineHl",
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
        body: '𝗙𝗘𝗘𝗟 𝗧𝗛𝗔 𝗦𝗨𝗥𝗔..🤍',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 10000);
    }
  },
};
