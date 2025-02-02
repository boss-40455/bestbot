module.exports = {    config: {
        name: "tag",
        version: "1.1",
        author: "UPoL SAHA",
        countDown: 5,
        role: 0,
        shortDescription: {
            en: "Tag users by query or mention."
        },
        description: "Tag users by a search query or tag the sender if no query is given.",
        category: "Utility",
        guide: {
            en: "{pn} <query> (optional) [or reply to a message]"
        }
    },

    onStart: async function ({ message, event, args, api, usersData }) {
        let mentionList = [];
        let tagMessage = "👥 Tagged: ";
        let query = args.join(" ").toLowerCase();

        if (event.type === "message_reply") {
            let repliedUserID = event.messageReply.senderID;
            let repliedUser = await usersData.get(repliedUserID);

            mentionList.push({
                id: repliedUserID,
                tag: repliedUser ? repliedUser.name : "User"
            });

            tagMessage += `@${repliedUser ? repliedUser.name : "User"}`;
        } 
        else if (query) {
            let allUsers = await usersData.getAll();
            
            mentionList = allUsers.filter(user => 
                user.name.toLowerCase().includes(query)
            ).map(user => ({
                id: user.userID,
                tag: user.name
            }));

            if (mentionList.length === 0) {
                return message.reply("❌ No users found matching your query.");
            }

            tagMessage += mentionList.map(user => `@${user.tag}`).join(", ");
        } 
        else {
            let senderInfo = await usersData.get(event.senderID);
            mentionList.push({
                id: event.senderID,
                tag: senderInfo ? senderInfo.name : "You"
            });
            tagMessage += `@${senderInfo ? senderInfo.name : "You"}`;
        }

        return message.reply({
            body: tagMessage,
            mentions: mentionList
        });
    }
};
