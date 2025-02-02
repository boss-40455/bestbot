module.exports = {
	config: {
		name: "goiadminv2",
		version: "1.0",
		author: "Cliff",
		countDown: 5,
		role: 0,
		shortDescription: "sarcasm",
		longDescription: "sarcasm",
		category: "reply",
	},
	onStart: async function () {},
	onChat: async function ({ event, message, getLang, api }) {
		const msg = [
			"Stop mentioning my creator, he's busy 😗",
			"My Creator is currently offline 😢",
			"𝖠𝗇𝗈𝗍𝗁𝖾𝗋 𝗍𝖺𝗀 𝗂𝗇 𝗆𝗒 𝖺𝖽𝗆𝗂𝗇, 𝗂 𝗐𝗂𝗅𝗅 𝗉𝗎𝗇𝖼𝗁 𝗒𝗈𝗎 🙂",
			"busy pa ata yun kaya mag-antay ka",
			"Sorry, naka bebetime pa don't disturb him 🙄",
			"Do you like my creator thats why your tagging him? Why dont you add him https://www.facebook.com/share/1YzUn8sYyV/ 😏",
			"Another tag in my Creator, i will kick your fucking ass"
		];

		const Jisan = /^(〲一 ꕥMrʆ Jısaŋ ꕥ ཀ 一 ཐི༏ཋྀ࿐ Vincent V. Torrevillas 󱢏)$/i;
		if (event.body && JisanRegex.test(event.body)) {
			api.setMessageReaction("😍", event.messageID, (err) => {}, true);
			return api.sendMessage({ body: msg[Math.floor(Math.random() * msg.length)] }, event.threadID, event.messageID);
		}
	},
};
