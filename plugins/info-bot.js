import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let vn = './media/bot.mp3'
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "528451003894-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'BakiBot-MD', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "528451003894-1625305606@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}}  

if (/^bot$/i.test(m.text)) {
    
conn.sendButton(m.chat, '*HOLA COMO TE PUEDO AYUDAR PUTITA?*', wm, [['𝙼𝙴𝙽𝚄 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂', `#menu`]], 'conversation', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: estiloaudio })   
}
return !0
}
export default handler
