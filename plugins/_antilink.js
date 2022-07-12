let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*OPA EL ANTILINK ESTA ACTIVADO BASADO ERES ADMIN GOD🧐🍷*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 ANTILINK 」*\n*HASTA NUNCA SERAS VIOLADO 🤣, ${await this.getName(m.sender)} ROMPISTE LAS REGLAS DEL GRUPO POR GAY...!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] EL BOT NO ES ADMIN LO CUAL NO PUEDE ELIMINAR😥*'}`, author, ['DESACTIVAR ANTILINK', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] EL PROPIETARIO NO TIENE HABILITADO RESTRICCIONES (#enable restrict) CONTACTATE CON EL PARA QUE LO ACTIVE*')
}
return !0
}
