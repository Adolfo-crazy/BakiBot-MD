import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[βππππβ] π½πΎπΌπ±ππ΄ π³π΄ π»π° π²π°π½π²πΈπΎπ½ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π½πΎπΌπ±ππ΄/ππΈπππ»πΎ π³π΄ ππ½π° π²π°π½π²πΈπΎπ½*\n\n*EJEMPLO:*\n*${usedPrefix + command} un dia todo se termina*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[βππππβ] π»πΎ ππΈπ΄π½ππΎ, π½πΎ πΏππ³π΄ π΄π½π²πΎπ½πππ°π π΄π» π°ππ³πΈπΎ/ππΈπ³π΄πΎ, πΈπ½ππ΄π½ππ΄ π²πΎπ½ πΎπππΎ π½πΎπΌπ±ππ΄/ππΈπππ»πΎ*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
βοΈ *TITULO:* ${title}
π¨βπ» *DESCRIPCION:* ${description}
π *PUBLICADO:* ${publishedTime}
β³ *DURACION:* ${durationH}
π *VISTAS:* ${viewH}
`.trim(), author, thumbnail, `${url}`, 'πππ»', null, null, [
['AUDIO', `${usedPrefix}yta ${url}`],
['VIDEO', `${usedPrefix}ytv ${url}`],
['MAS RESULTADOS', `${usedPrefix}playlist ${text}`]  
], m)
}catch(e){
m.reply('*ERROR POR FAVOR VUELVA A INTENTARLOπ€*')
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
