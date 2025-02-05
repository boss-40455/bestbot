const fs = require("fs");
const { writeFileSync } = require("fs-extra");
const { config } = global.GoatBot;


module.exports = {
    config: {
        name: "wl",
        version: "1.3",
        author: "UPoL/JISAN",
        role: 2,
        description: "Manage whiteList users",
        category: "system",
        usage: "{pn} [add/remove/list/on/off] [@tag/reply/uid]"
    },

    onStart: async function ({ message, args, usersData, event }) {
        let uids = [];

        if (Object.keys(event.mentions).length > 0) {
            uids = Object.keys(event.mentions);
        } else if (event.messageReply) {
            uids.push(event.messageReply.senderID);
        } else {
            uids = args.filter(arg => !isNaN(arg));
        }

        if (["add", "-a"].includes(args[0])) {
            if (uids.length === 0) return message.reply(" Tag, reply, or enter a user ID to add.");
            
            const notAdded = uids.filter(uid => !config.whiteListMode.whiteListIds.includes(uid));
            config.whiteListMode.whiteListIds.push(...notAdded);
            writeFileSync(global.client.dirConfig, JSON.stringify(config, null, 2));

            const names = await Promise.all(notAdded.map(uid => usersData.getName(uid)));
            return message.reply(` ✅ 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗔𝗱𝗱𝗲𝗱 𝘁𝗼 𝘄𝗵𝗶𝘁𝗲𝗹𝗶𝘀𝘁:\n\n${names.map((name, i) => `• ${name} (${notAdded[i]})`).join("\n")}`);
        } 

        else if (["remove", "-r"].includes(args[0])) {
            if (uids.length === 0) return message.reply("Tag, reply, or enter a user ID to remove.");
            
            const toRemove = uids.filter(uid => config.whiteListMode.whiteListIds.includes(uid));
            config.whiteListMode.whiteListIds = config.whiteListMode.whiteListIds.filter(uid => !toRemove.includes(uid));
            writeFileSync(global.client.dirConfig, JSON.stringify(config, null, 2));

            const names = await Promise.all(toRemove.map(uid => usersData.getName(uid)));
            return message.reply(` ✅ 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗥𝗲𝗺𝗼𝘃𝗲𝗱 𝗳𝗿𝗼𝗺 𝘄𝗵𝗶𝘁𝗲𝗹𝗶𝘀𝘁:\n\n${names.map((name, i) => `• ${name} (${toRemove[i]})`).join("\n")}`);
        } 

        else if (["list", "-l"].includes(args[0])) {
            const names = await Promise.all(config.whiteListMode.whiteListIds.map(uid => usersData.getName(uid)));
            return message.reply(`🎀 | 𝗪𝗵𝗶𝘁𝗲𝗹𝗶𝘀𝘁𝗲𝗱 𝗨𝘀𝗲𝗿𝘀:\n${names.map((name, i) => `• ${name} (${config.whiteListMode.whiteListIds[i]})`).join("\n")}`);
        } 

        else if (args[0] === "on") {
            config.whiteListMode.enable = true;
            writeFileSync(global.client.dirConfig, JSON.stringify(config, null, 2));
            return message.reply("𝗪𝗵𝗶𝘁𝗲𝗹𝗶𝘀𝘁 𝗺𝗼𝗱𝗲 𝗲𝗻𝗮𝗯𝗹𝗲𝗱 ✅.");
        } 

        else if (args[0] === "off") {
            config.whiteListMode.enable = false;
            writeFileSync(global.client.dirConfig, JSON.stringify(config, null, 2));
            return message.reply(" 𝗪𝗵𝗶𝘁𝗲𝗹𝗶𝘀𝘁 𝗺𝗼𝗱𝗲 𝗱𝗶𝘀𝗮𝗯𝗹𝗲𝗱 📴.");
        } 

        else {
            return message.reply("⚠ | Invalid command! Use  list to see whitelisted users.");
        }
    }
};
