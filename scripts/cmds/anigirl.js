module.exports = {
	config: {
		name: "anigirl",
		aliases: ["animegirl4k"],
		version: "1.0",
		author: "MR-JISAN",
		countDown: 5,
		role: 2,
		shortDescription: "send you pic of 4k anime girl",
		longDescription: "sends u pic of girls anime",
		category: "anime",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.imgur.com/7V33if2.jpeg",
"https://i.imgur.com/Hw21mpb.jpeg",
"https://i.imgur.com/eH0FksU.jpeg",
"https://i.imgur.com/xeW15c3.jpeg",
"https://i.imgur.com/Mic1TuJ.jpeg",
"https://i.imgur.com/yRe4zQX.jpeg",
"https://i.imgur.com/8bg0WKU.jpeg",
"https://i.imgur.com/C10clWC.jpeg",
"https://i.imgur.com/8gVwSJC.jpeg",
"https://i.imgur.com/x9Fqhrs.jpeg",
"https://i.imgur.com/WPeo0T5.jpeg",
"https://i.imgur.com/Gypbauz.jpeg",
"https://i.imgur.com/BcaO38b.jpeg",
"https://i.imgur.com/oTKa9Y3.jpeg",
"https://i.imgur.com/oMkvWSV.jpeg",
"https://i.imgur.com/uGv7R1m.jpeg",
"https://i.imgur.com/5OE6qFB.jpeg",
"https://i.imgur.com/uGv7R1m.jpeg",
"https://i.imgur.com/aRdUZj4.jpeg",
"https://i.imgur.com/McM9NjH.jpeg",
"https://i.imgur.com/4hRD7nx.jpeg",
"https://i.imgur.com/DdYkQuL.jpeg",
"https://i.imgur.com/VDrmCtb.jpeg",
"https://i.imgur.com/wUpEB1u.jpeg",
"https://i.imgur.com/5OE6qFB.jpeg",
"https://i.imgur.com/j4FD94h.jpeg",
"https://i.imgur.com/lZPRz6k.jpeg",
"https://i.imgur.com/nESZqC1.jpeg",
"https://i.imgur.com/ytolIAX.jpeg",
"https://i.imgur.com/HY3fGUi.jpeg",
"https://i.imgur.com/4v0tT6L.jpeg",
"https://i.imgur.com/lVlL1Wa.jpeg",
"https://i.imgur.com/EUohc42.jpeg",
"https://i.imgur.com/zNl8xeC.jpeg",
"https://i.imgur.com/IXYsyTK.jpeg",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '4𝗸 𝗥𝗮𝗻𝗱𝗼𝗺 𝗴𝗶𝗿𝗹 𝗔𝗻𝗶𝗺𝗲 ✅',attachment: await global.utils.getStreamFromURL(img)
})
}
}
