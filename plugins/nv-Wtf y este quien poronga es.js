import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Wtf y este quien poronga es.mp3'
conn.sendFile(m.chat, vn, 'Wtf y este quien poronga es.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Wtf y este quien poronga es/
handler.command = new RegExp
export default handler


