module.exports = {
	config: {
		name: "goiadmin",
		author: "MR-JISAN",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "100072378825674") {
		var aid = ["100072378825674"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["❁𝗝𝗜𝗦𝗔𝗡𖣘 বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল ❁𝗝𝗜𝗦𝗔𝗡𖣘 রে একটা গফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বাঁলপাঁক্না ❁𝗝𝗜𝗦𝗔𝗡𖣘 প্রচুর বিজি 🥵🥀🤐"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
