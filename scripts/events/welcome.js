const { getTime } = global.utils;
const moment = require('moment-timezone');
const fs = require('fs');
const path = require('path');
const request = require('request');

if (!global.temp.welcomeEvent) global.temp.welcomeEvent = {};

module.exports = {
		config: {
				name: "welcome",
				version: "1.7",
				author: "BisayaXBalls",//Language solve by Team Cxly
				category: "events"
		},

		langs: {
				vi: {
					},
				en: {
						session1: "𝗺𝗼𝗿𝗻𝗶𝗻𝗴",
						session2: "𝗻𝗼𝗼𝗻",
						session3: "𝗮𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻",
						session4: "𝗲𝘃𝗲𝗻𝗶𝗻𝗴",
						welcomeMessage: "━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝙅𝙄𝙎𝘼𝙉 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗙𝗨𝗟𝗟 😘✅\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡:𝙈𝙍-𝙅𝙄𝙎𝘼𝙉\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞:https://www.facebook.com/XAIKO.JISAN?mibextid=ZbWKwL \n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝗪𝗛𝗔𝗧𝗦 𝗔𝗣𝗣: wa.me/+8801314470126\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠: @BDT-JISAN\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━",
						multiple1: "you",
						multiple2: "you guys",
						defaultWelcomeMessage: `🍓𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮 𝐀𝐥𝐚𝐢𝐤𝐮𝐦🍓\n\n 𝐇𝐞𝐥𝐥𝐨 {userName}.\n𝐖𝐞𝐥𝐜𝐨𝐦𝐞 {multiple} 𝐓𝐨 𝐓𝐡𝐚 𝐂𝐡𝐚𝐭 𝐠𝐫𝐨𝐮𝐩: {boxName}\n 𝐇𝐚𝐯𝐞 𝐚 𝐍𝐢𝐜𝐞 {session} \n\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗱𝗮𝘁𝗲 𝗮𝗻𝗱 𝘁𝗶𝗺𝗲: {dateTime}.\n𝗧𝗼𝘁𝗮𝗹 𝗺𝗲𝗺𝗯𝗲𝗿𝘀: {membersCount}.\n𝗧𝗼𝘁𝗮𝗹 𝗮𝗱𝗺𝗶𝗻𝘀: {adminsCount}.🎀 𝐢 𝐡𝐨𝐩𝐞 𝐲𝐨𝐮 𝐰𝐢𝐥𝐥 𝐟𝐨𝐥𝐥𝐨𝐰 𝐨𝐮𝐫 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩 𝐫𝐮𝐥𝐞𝐬 ✨\n\n🐔🥀 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐯𝐞𝐫𝐲 𝐦𝐮𝐜𝐡 𝐟𝐨𝐫 𝐜𝐨𝐦𝐢𝐧𝐠 𝐭𝐨 𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩🩵🌟\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥-➳ᴹᴿ᭄𝙅𝙄𝙎𝘼𝙉☂️☯꧂`
				}
		},

		onStart: async ({ threadsData, message, event, api, getLang, usersData }) => {
				if (event.logMessageType !== "log:subscribe") return;

				const { threadID } = event;
				const { nickNameBot } = global.GoatBot.config;
				const prefix = global.utils.getPrefix(threadID);
				const dataAddedParticipants = event.logMessageData.addedParticipants;

				// If new member is bot
				if (dataAddedParticipants.some(item => item.userFbId === api.getCurrentUserID())) {
						if (nickNameBot) {
								api.changeNickname(nickNameBot, threadID, api.getCurrentUserID());
						}
						return message.send(getLang("welcomeMessage", prefix));
				}

				// Initialize temp data for this thread if not exist
				if (!global.temp.welcomeEvent[threadID]) {
						global.temp.welcomeEvent[threadID] = {
								joinTimeout: null,
								dataAddedParticipants: []
						};
				}

				// Push new members to array and clear/set timeout
				global.temp.welcomeEvent[threadID].dataAddedParticipants.push(...dataAddedParticipants);
				clearTimeout(global.temp.welcomeEvent[threadID].joinTimeout);

				global.temp.welcomeEvent[threadID].joinTimeout = setTimeout(async () => {
						const threadData = await threadsData.get(threadID);
						if (threadData.settings.sendWelcomeMessage === false) return;

						const dataAddedParticipants = global.temp.welcomeEvent[threadID].dataAddedParticipants;
						const dataBanned = threadData.data.banned_ban || [];
						const threadName = threadData.threadName;
						const threadInfo = await api.getThreadInfo(threadID);

						// Filter out banned users
						const validParticipants = dataAddedParticipants.filter(user => !dataBanned.some(ban => ban.id === user.userFbId));
						if (validParticipants.length === 0) return;

						// Ensure the cache folder exists
						const cacheFolder = path.resolve(__dirname, 'cache');
						if (!fs.existsSync(cacheFolder)) {
								fs.mkdirSync(cacheFolder);
						}

						// Fixed background image URL
						const background = "https://i.imgur.com/FinIkCB.png";

						// Function to get session name
						const getSessionName = () => {
								const hours = getTime("HH");
								return hours <= 10 ? getLang("session1") : hours <= 12 ? getLang("session2") : hours <= 18 ? getLang("session3") : getLang("session4");
						};

						// Function to get the ordinal suffix for a number
						const getOrdinalSuffix = (i) => {
								const j = i % 10, k = i % 100;
								if (j == 1 && k != 11) return i + "st";
								if (j == 2 && k != 12) return i + "nd";
								if (j == 3 && k != 13) return i + "rd";
								return i + "th";
						};

						const sendWelcomeMessage = async (user, position) => {
								const userName = user.fullName;
								const userId = user.userFbId;
								const dateTime = moment().tz('Asia/Manila').format('MMMM Do YYYY, h:mm:ss a');
								const membersCount = threadInfo.participantIDs.length;
								const adminsCount = threadInfo.adminIDs.length;

								let welcomeMessage = threadData.data.welcomeMessage || getLang("defaultWelcomeMessage");

								welcomeMessage = welcomeMessage
										.replace(/\{userName\}|\{userNameTag\}/g, userName)
										.replace(/\{boxName\}|\{threadName\}/g, threadName)
										.replace(/\{multiple\}/g, getLang("multiple1"))
										.replace(/\{session\}/g, getSessionName())
										.replace(/\{dateTime\}/g, dateTime)
										.replace(/\{membersCount\}/g, membersCount)
										.replace(/\{adminsCount\}/g, adminsCount)
										.replace(/\{position\}/g, getOrdinalSuffix(position));

								const form = { body: welcomeMessage, mentions: [{ tag: userName, id: userId }] };

								// Fetch user's profile picture using usersData
								const avt = await usersData.getAvatarUrl(userId);
								const url = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(background)}&text1=${encodeURIComponent(userName)}&text2=Welcome%20To%20${encodeURIComponent(threadName)}&text3=Member%20${encodeURIComponent(position)}&avatar=${encodeURIComponent(avt)}`;
								const filePath = path.resolve(cacheFolder, `${userId}.jpg`);

								request(url)
										.pipe(fs.createWriteStream(filePath))
										.on('close', () => {
												form.attachment = [fs.createReadStream(filePath)];
												message.send(form);
										})
										.on('error', (error) => console.error(error));
						};

						// Send welcome messages one by one
						for (const [index, user] of validParticipants.entries()) {
								await sendWelcomeMessage(user, threadInfo.participantIDs.length - validParticipants.length + index + 1);
						}

						delete global.temp.welcomeEvent[threadID];
				}, 1500);
		}
};




















































						
