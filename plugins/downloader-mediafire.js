import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] INGRESA UN ENLACE VALIDO EJEMPLO: ${usedPrefix + command} https://www.mediafire.com/file/BakiBot-MD.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
*π½πΎπΌπ±ππ΄:* ${filename}
*πΏπ΄ππΎ:* ${filesizeH}
*ππΈπΏπΎ:* ${ext}

*β³ ESPERA GAY EN LO QUE ENVIO TU ARCHIVO. . . .* 
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
m.reply('*[βππππβ] ERROR, POR FAVOR VUELVE A INTENTARLO*\n\n*- π²πΎπππΎπ±πΎππ΄ πππ΄ π΄π» π΄π½π»π°π²π΄ ππ΄π° ππΈπΌπΈπ»π°π π°:*\n*β’ https://www.mediafire.com/file/lhddqjdk58q084t/YOWA9.31_By_SamMods.apk/file?dkey=il8yw3bmct11539/file*')
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
export default handler
