import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/bbinario1.txt'
conn.sendFile(m.chat, vn, 'binario1.txt', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /binario1/
handler.command = new RegExp
export default handler
