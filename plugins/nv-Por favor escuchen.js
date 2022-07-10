import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Por favor escuchen.mp3'
conn.sendFile(m.chat, vn, 'Por favor escuchen.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /Por favor escuchen/
handler.fail = null
handler.exp = 100
export default handler