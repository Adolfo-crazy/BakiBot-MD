let limit = 50
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) throw `*[βππππβ] INSERTE EL ENLACE MAS EL COMANDO / LINK DE UN VIDEO DE YOUTUBE*`
conn.reply(m.chat, `*_β³Espere un momento...β³_*\n\n*β’ si su video no fue enviado, prueba con este comando #playdoc α΄ #play.1 α΄ #ytmp3doc*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ππ΄πΏππΎπ³ππ²ππΎπ π³π΄ ππΈπ³π΄πΎ',
body: 'ΚΚ α΄Κα΄ α΄Κsα΄Ιͺα΄ οΉ£ Κα΄α΄',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 350 : limit) * 3074
let video, source, res, link, lastError, isLimit
for (let i in _video) {
try {
video = _video[i]
isLimit = limitedSize < video.fileSizeH
if (isLimit) continue
link = await video.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
video = source = link = null
lastError = e
}}
if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw '*[β] π΄πππΎπ: ' + (lastError || 'π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π³π΄ππ²π°ππΆπ°π π΄π» ππΈπ³π΄πΎ*')
let _thumb = {}
try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
catch (e) { }
conn.sendFile(m.chat, link, title + '.mp4', `
*π₯ ππΈπππ»πΎ:* ${title}
*π πΏπ΄ππΎ π³π΄π» ππΈπ³π΄πΎ:* ${video.fileSizeH}
`.trim(), m, false, {
..._thumb,
asDocument: chat.useDocument
})}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
export default handler
