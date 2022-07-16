import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Tiene la cara de tamal folla.mp4'
conn.sendFile(m.chat, vn, 'Tiene la cara de tamal folla.mp4', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Tiene la cara de tamal folla/
handler.command = new RegExp
export default handler