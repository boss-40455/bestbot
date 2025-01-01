const { get } = require('axios');

module.exports = {
        config: {
                name: "gojoai",
                author: "deku",
                version: "2.0",
                cooldowns: 0,
                role: 0,
                shortDescription: {
                        en: "Talk to GOJO AI the blindfolded sorcerer (with continuous conversation)"
                },
                category: "AI",
                guide: {
                        en: "To use this command, type 'gojo' followed by your message. For example: 'gojo hi'"
                }
        },

        onStart: async function ({ api, event, args }) {
                const prompt = args.join(' ');
                const id = event.senderID;

                function sendMessage(msg) {
                        api.sendMessage(msg, event.threadID, event.messageID);
                }

                const url = "http://eu4.diresnode.com:3301";

                if (!prompt) return sendMessage("Missing input!\n\nIf you want to reset the conversation with " + this.config.name + " you can use '" + this.config.name + " clear'");
                sendMessage("🌼-চরিত্র যতটা পবিত্র_ব্যক্তিত্ব ততটাই সুন্দর⎯͢♡🖤  ", "♡তোমার মায়ায় পড়ে গেছি!🩷🌺-♡ ", "—বেডা মানুষের মন অনেক বড়১৩২ জিবি র‍্যাম-|♡(🙂🤝🏻.)", "একটা ভাঙা’চুরা 𝗕𝗙 চাই….! 🥺🫶", "যার মনে আমি নাই🍒তার মনে কুত্তায় মুইতা দিক..!!😏🐸🍒", "বউ ছাড়া👳এতিম ছেলে গুলা কোথায়🍁তোমরা সারা দাও..!!🤭🥴", "^নক না দিলে আইডি খুলছস ক্যান°!😾ননসেন্স বেডা..!🥲🥀", "-যারে দেহি তারেই ভাল্লাগে..!🙈-মনে হয় রুচি বাড়ছে..!😀😋", "আমার গল্প তোমার নানাই সেরা 🫣", "ভুলে যাও Ex কে নক দাও আমাকে 😌🌚", "-যেহেতু তুমি সিঙ্গেল তাই./🙂মানবতার খাতিরে 𝗜 𝗟𝗼𝘃𝗲 𝗬𝗼𝘂./🙂👀", "অর্ধেক খাট, অর্ধেক কম্বলভাড়া দেওয়া হবে🙂", "__ মন মেজাজ ঠিক নাই I love You🥺🐸", "𝗜 𝗟𝗼𝘃𝗲 𝗬𝗼𝘂 😻🙈Ummmmma😘😘 ৬ তানি করলাম 🐸", "সবাই প্রেমে পড়ে🥰আর মুই স্বপ্নে খাট থেকে পড়ি🤧", "★মন ডা খালি বেডা বেডা করে_//🥺💔★🤪🤪🤪", "(🤰)-এই বেডির সর্বনাশ কে করলো_🙂", "_ক..আমি তোর🫵 কী লাগি!> 🔪 😡", "বউ ডাকো আইডি ঘুরে আসবো!🥺🫶");

                try {
                        const response = await get(`${url}/gojo_gpt?prompt=${encodeURIComponent(prompt)}&idd=${id}`);
                        sendMessage(response.data.gojo);
                } catch (error) {
                        sendMessage(error.message);
                }
        },
};
