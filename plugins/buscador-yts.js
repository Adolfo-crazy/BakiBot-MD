import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw '*[βππππβ] INSERTA EL NOMBRE DE UN VIDEO DE YOUTUBE O EL LINK*'
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
βοΈ *${v.title}* (${v.url})
β³ DuraciΓ³n: ${v.durationH}
π Publicado ${v.publishedTime}
ποΈ ${v.view} VISTAS
`.trim()
case 'channel': return `
βοΈ *${v.channelName}* (${v.url})
π§βπ€βπ§ _${v.subscriberH} SUSCRIPTORES_
π₯ ${v.videoCount} VIDEOS
`.trim()
}
}).filter(v => v).join('\n\n========================\n\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
export default handler
