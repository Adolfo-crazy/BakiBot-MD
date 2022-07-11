import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] INGRESA UN ENLACE VALIDO EJEMPLO: ${usedPrefix + command} https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
*𝙽𝙾𝙼𝙱𝚁𝙴:* ${filename}
*𝙿𝙴𝚂𝙾:* ${filesizeH}
*𝚃𝙸𝙿𝙾:* ${ext}

*⏳ ESPERA GAY EN LO QUE ENVIO TU ARCHIVO. . . .* 
*_- ARCHIVOS MAYORES A 100MB NO SERAN ENVIADOS GIL_* 
`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'DESCARGA MEDIAFIRE',
body: 'BakiBot-MD',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/Adolfo-crazy/BakiBot-MD`}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR, POR FAVOR VUELVE A INTENTARLO*\n\n*- 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝚂𝙴𝙰 𝚂𝙸𝙼𝙸𝙻𝙰𝚁 𝙰:*\n*• https://www.mediafire.com/file/lhddqjdk58q084t/YOWA9.31_By_SamMods.apk/file?dkey=il8yw3bmct11539/file*')
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
export default handler
