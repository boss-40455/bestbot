module.exports.config={
name:"lov",
category:"l"
}
module.exports.onStart = async function({}){}
module.exports.onChat = async ({api,event,args}) => {
const input = args.join("");
const axios = require("axios");
const fs = require("fs");
const a6 = event.body
if (a6.includes('love')||a6.includes('❤️')||a6.includes('🖤')||a6.includes('🤍')||a6.includes('💖')) {
try {
    const response = await axios.get("https://a6-video-api.onrender.com/video/love")
    const a6y = response.data
    const videoUrl = a6y.data
    const resp = await axios.get(videoUrl, {responseType: 'arraybuffer'});
      const m = __dirname + "/cache/mostakim.mp4"
      const rm = Buffer.from(resp.data, 'binary')
      fs.writeFileSync(m,rm)
        const URL = fs.createReadStream(m)
    await api.sendMessage({body: "💌", attachment:URL},event.threadID,event.messageID)
    } catch (error) {
    await api.sendMessage(Error:${error.message},event.threadID,event.messageID)
  }
 }
};