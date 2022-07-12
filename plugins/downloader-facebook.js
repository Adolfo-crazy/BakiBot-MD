import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] INGRESA UN ENLACE DE FACEBOOK EJEMPLO: ${usedPrefix + command} https://www.facebook.com/watch?v=636541477595139*`
try {
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `🔗 *Url:* ${url}`, m)
} catch (e) {
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR, POR FAVOR VUELVE INTENTARLO*\n\n*- COLOCA UN ENLACE IGUAL A ESTE:*\n*• https://www.facebook.com/watch?v=636541477595139*')
console.log(e)
}}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
