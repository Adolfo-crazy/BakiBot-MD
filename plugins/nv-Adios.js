import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Adios.mp3'
conn.sendFile(m.chat, vn, 'Adios.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Adios|𝙰𝙳𝙸𝙾𝚂/
handler.command = new RegExp
export default handler
