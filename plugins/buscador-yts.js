import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] INSERTA EL NOMBRE DE UN VIDEO DE YOUTUBE O EL LINK*'
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
✍️ *${v.title}* (${v.url})
⏳ Duración: ${v.durationH}
📆 Publicado ${v.publishedTime}
👀️ ${v.view} VISTAS
`.trim()
case 'channel': return `
✍️ *${v.channelName}* (${v.url})
🧑‍🤝‍🧑 _${v.subscriberH} SUSCRIPTORES_
🎥 ${v.videoCount} VIDEOS
`.trim()
}
}).filter(v => v).join('\n\n========================\n\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
export default handler
