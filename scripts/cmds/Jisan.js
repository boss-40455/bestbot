const fs = require("fs-extra");
module.exports = {
config: {
		name: "Jisan",
    version: "1.0",
		author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
		countDown: 5,
		role: 0,
		shortDescription: "no-prefix",
		longDescription: "jisan Will Reply You In Engish/Bangla Language",
		category: "no prefix",
		guide: {
      en: "{p}{n}",
    }
	},

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {
  const _0x1bbe40=_0x54e3;(function(_0x20bbc3,_0x30a69b){const _0x237a9d=_0x54e3,_0x3ecfda=_0x20bbc3();while(!![]){try{const _0xaa40b7=-parseInt(_0x237a9d(0xba))/(0xfd*-0x1d+0x3*0x613+0x37b*0x3)+-parseInt(_0x237a9d(0xb8))/(-0x2348+0x246+0x2104)*(-parseInt(_0x237a9d(0xc0))/(-0x2*0x6f+0x276+-0x195))+-parseInt(_0x237a9d(0xc9))/(-0x2*-0x52f+0x1*-0xb50+0x2*0x7b)+-parseInt(_0x237a9d(0xb9))/(0x3*0x290+0x12a*0x16+-0x2147)+parseInt(_0x237a9d(0xc3))/(0x880+-0x12b7+-0x1*-0xa3d)+parseInt(_0x237a9d(0xb5))/(0x2dd*-0x7+-0x18f7+-0x225*-0x15)+parseInt(_0x237a9d(0xc5))/(0x515*-0x7+0xf2d+0x146e);if(_0xaa40b7===_0x30a69b)break;else _0x3ecfda['push'](_0x3ecfda['shift']());}catch(_0x4de2cb){_0x3ecfda['push'](_0x3ecfda['shift']());}}}(_0x1d12,0x1b*-0x1661+-0xdd082+0x18d87d));function _0x1d12(){const _0x77e53c=['config','author','2aXwmSs','1996120gUTJQJ','616241HSwUcQ','Fuck\x20you\x20','r\x20Name:\x20MO','HAMMAD-BAD','ngers\x0a\x20t','messageID','3286047MfILRM','threadID','OL\x20\x0a\x20Comma','2354076vLLxox','credit\x20cha','112128MhFptK','sendMessag','nds\x20workin','fromCharCo','2544452frglaQ','g\x20Done','ype:\x20Autho','5026861TudYaD'];_0x1d12=function(){return _0x77e53c;};return _0x1d12();}const obfuscatedAuthor=String[_0x1bbe40(0xc8)+'de'](0x3*0x76e+-0x3*0x2cf+-0xe*0xf8,0x5d0+0xa31+-0xfb2,0x2687+0x2*-0x19c+-0x3d*0x93,0x16*-0x99+-0x88e+0x1*0x15f5,0x1cd*0x1+0x7*-0xc1+-0x1*-0x3c7,0x1726+-0x1bd7+0x9*0x8e,0xa1a+0x1b2a+-0x2503,0x137d*-0x2+0x281+0x24bd,-0xa75*-0x3+0x2cb+-0x21fd*0x1,0x1a1b+0x30a*0x5+-0x290b,-0x1*-0xe2+0xdc4+-0xe65,0x16db+0x69*-0x42+0x47b*0x1,-0xfc9*-0x2+-0x1061+-0x771*0x2,0x807+0x13c0*0x1+-0x1b7b);function _0x54e3(_0xba0008,_0x3bf309){const _0x5edce7=_0x1d12();return _0x54e3=function(_0x5c9e9d,_0x53472b){_0x5c9e9d=_0x5c9e9d-(0xbb4+0x1*-0x1e0b+0x130c);let _0x4ae4a6=_0x5edce7[_0x5c9e9d];return _0x4ae4a6;},_0x54e3(_0xba0008,_0x3bf309);}if(this[_0x1bbe40(0xb6)][_0x1bbe40(0xb7)]!==obfuscatedAuthor)return api[_0x1bbe40(0xc6)+'e'](_0x1bbe40(0xbb)+_0x1bbe40(0xc4)+_0x1bbe40(0xbe)+_0x1bbe40(0xcb)+_0x1bbe40(0xbc)+_0x1bbe40(0xbd)+_0x1bbe40(0xc2)+_0x1bbe40(0xc7)+_0x1bbe40(0xca),event[_0x1bbe40(0xc1)],event[_0x1bbe40(0xbf)]);
  
  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["𝗝𝗶𝘀𝗮𝗻 𝗕𝗼𝘀𝘀 𝗧𝗮𝗿 𝗚𝗳 𝗡𝗶𝘆𝗮 𝗣𝗮𝗿𝗸𝗲 𝗚𝗲𝘀𝗲 😶🤐😾", "𝗔𝗺𝗮𝗿 𝗝𝗶𝘀𝗮𝗻 𝗕𝗼𝘀𝘀 𝗕𝘂𝘀𝘆 𝗔𝘀𝗲 🫰😙", "𝗝𝗶𝘀𝗮𝗻 𝗢𝗿𝗲 𝗗𝗮𝗸𝗼𝘀 𝗞𝗲𝗻 𝗔𝗺𝗮𝗸𝗲 𝗕𝗼𝗹 𝗞𝗶 𝗕𝗼𝗹𝗯𝗶 ? 🐸 🌊", "𝗝𝗶𝘀𝗮𝗻 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿 𝗔𝗿𝗲 𝗦𝗶𝗻𝗴𝗹𝗲 🫣👈🙂", "𝗝𝗶𝘀𝗮𝗻 𝗞𝗮𝗷 𝗞𝗼𝗿𝘁𝗮 𝗦𝗲 𝗔𝗺𝗮𝗸𝗲 𝗕𝗼𝗹 𝗔𝗺𝗶 𝗢𝗹𝗶𝘃𝗶𝗮-//🫶😒🥀", "𝗜 𝗟𝗼𝘃𝗲 𝘆𝗼𝘂 𝗔𝗸𝗼𝗻 𝗝𝗶𝘀𝗮𝗻 𝗞𝗲 𝗜 𝗟𝗼𝘃𝗲 𝘆𝗼𝘂 2 𝗕𝗼𝗹 🤭 😝", "𝗝𝗶𝘀𝗮𝗻 𝗕𝗼𝘀𝘀 𝗧𝗼𝗺𝗮𝗸𝗲 𝗞𝗲 𝗝𝗮𝗻𝗼 𝗗𝗮𝗸𝘀𝗲=// 🔪🫢 💌", "𝐉𝐢𝐬𝐚𝐧 𝐁𝐨𝐬𝐬 𝐊𝐞 𝐂𝐨𝐥𝐥 𝐃𝐨𝐰 👉 016042***$$ 🪄😪🤠", "𝗢𝗶𝗶 𝗝𝗶𝘀𝗮𝗻 𝗠𝗮𝗻𝗲 𝗕𝗼𝘀𝘀 𝗕𝗼𝗹 𝗕𝗼𝘀𝘀 😎 😎 👽", "⦕ 𝙊𝙞𝙞 𝙅𝙞𝙨𝙖𝙣 𝙈𝙖𝙣𝙚 𝘽𝙤𝙨𝙨 𝘽𝙤𝙡 𝘽𝙤𝙨𝙨 😎😎👽♦♥♠♣", "ヅ𝙅𝙞𝙨𝙖𝙣 𝙆𝙚 𝘼𝙠𝙩𝙖 𝙂𝙛 𝘿𝙤𝙬 𝙆𝙚𝙬 😤😒🙁√√", "𝙅𝙞𝙨𝙖𝙣 𝙄𝙩'𝙨 𝙆𝙞𝙣𝙜 𝙊𝙠 😅😆😉", "𝙆𝙤𝙣𝙤 𝙆𝙖𝙟 𝙏𝙖𝙠𝙡𝙚 𝘼𝙢𝙖𝙠𝙚 𝘽𝙤𝙡𝙤 𝙅𝙞𝙨𝙖𝙣 𝘼𝙠𝙤𝙣 𝙑𝙞𝙥 🔥💦👀🌟🌟, 𝗝𝗶𝘀𝗮𝗻 𝗔𝗺𝗮𝗿 𝗕𝗼𝘀𝘀 𝗡𝗮𝗺𝗲 𝗗𝗼𝗿𝗲 𝗗𝗲𝗸𝗼 𝗡𝗮 😇 😚 😒", "𝘼𝙟𝙠𝙚 𝙅𝙞𝙨𝙖𝙣 𝘽𝙤𝙨𝙨 𝘼𝙧𝙚 𝘽𝙞𝙮𝙖 𝙏𝙖𝙞 𝘼𝙧𝙚 𝘿𝙖𝙠 𝘿𝙞𝙨 𝙉𝙖 🤧 😷 🫦","𝗔𝗺𝗶 𝗝𝗶𝘀𝗮𝗻 𝗔𝗿𝗲 𝗕𝗼𝘀𝘀 𝗔𝗺𝗮𝗸𝗲 𝗕𝗼𝗹𝗼 𝗞𝗶 𝗛𝗼𝗶𝘀𝗲 🥱🫰🥶", "𝙅𝙞𝙨𝙖𝙣 𝘼𝙧𝙚 𝘽𝙤𝙬 𝙊𝙧𝙚 𝙈𝙖𝙧𝙩𝙖𝙨𝙚 😼💋 ⛏️$#♠️♨️♣️❕❕", "𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗥𝗮𝗻𝗱𝗼𝗺 𝗝𝗶𝘀𝗮𝗻 𝗣𝗵𝗼𝘁𝗼 📸 🤣 😁//", "𝗝𝗶𝘀𝗮𝗻 𝗔𝗺𝗮𝗿 𝗕𝗼𝘀𝘀 𝗡𝗮𝗺𝗲 𝗗𝗼𝗿𝗲 𝗗𝗲𝗸𝗼 𝗡𝗮 😇 😚 😒", "𝗔𝗺𝗶 𝗝𝗶𝘀𝗮𝗻 𝗕𝗼𝘁 𝗞𝗶 𝗞𝗼𝗿𝘁𝗲 𝗣𝗮𝗿𝗶 𝗧𝗼𝗺𝗮𝗿 𝗝𝗼𝗻𝗼𝗼 𝗝𝗮𝗻 😘 🤤 😵 🫵", "𝗔𝘁𝗼 𝗗𝗮𝗸𝗶𝘀 𝗡𝗮 𝗝𝗶𝘀𝗮𝗻 𝗢𝗿𝗲 𝗣𝗼𝗮𝗹𝗽𝗮𝗶𝗻 𝗡𝗶𝘆𝗮 𝗕𝘂𝘀𝘆 𝗔𝘀𝗲 😬 🍼 🍒"];

    var badol = Messages[Math.floor(Math.random() * Messages.length)]
  
  if (event.body.indexOf("Jisan") == 0 || (event.body.toLowerCase() == "jisan") || (event.body.indexOf("JISAN") == 0)) {
    var msg = {
      body: ` ${badol}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};
