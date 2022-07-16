import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Soldado caido.mp4'
conn.sendFile(m.chat, vn, 'Soldado caido.mp4', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Soldado caido/
handler.command = new RegExp
export default handler