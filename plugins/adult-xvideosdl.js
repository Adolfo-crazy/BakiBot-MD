import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] Los comandos +𝟷𝟾 estan desactivados en este grupo, si es admin y quiere activarlos use este comando pajin de mrd #enable modohorny*'
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝚇𝚅𝙸𝙳𝙴𝙾𝚂, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`
try {
await conn.reply(m.chat, '[❗] 𝐸𝑙 𝑣𝑖𝑑𝑒𝑜 𝑒𝑠𝑡𝑎 𝑠𝑖𝑒𝑛𝑑𝑜 𝑝𝑟𝑜𝑐𝑒𝑠𝑎𝑑𝑜, 𝑒𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑚𝑜𝑚𝑒𝑛𝑡𝑜 𝑒𝑛 𝑙𝑜 𝑞𝑢𝑒 𝑒𝑠 𝑒𝑛𝑣𝑖𝑎𝑑𝑜..\n\n﹣ ᴇʟ ᴛɪᴇᴍᴘᴏ ᴅᴇ ᴇɴᴠɪᴏ ᴅᴇᴘᴇɴᴅᴇ ᴅᴇʟ ᴘᴇsᴏ ʏ ᴅᴜʀᴀᴄɪᴏ́ɴ ᴅᴇʟ ᴠɪᴅᴇᴏ', m)
let res = await fetch(API('https://zenzapis.xyz', '/downloader/xvideos', { apikey: 'B2CB95861FBF', url: args[0] }))
let json = await res.json()
if (json.result?.message) throw json.result.message
let teks = `*⭔ 𝚃𝚒𝚝𝚞𝚕𝚘:* ${json.result.title}`
conn.sendMessage(m.chat, { video: { url: json.result.files.high }, caption: teks }, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*\n\n*- 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝚂𝙴𝙰 𝚂𝙸𝙼𝙸𝙻𝙰𝚁 𝙰:*\n*◉ https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*')
console.log(e)
}}
handler.command = /^(xvideosdl)$/i
export default handler
