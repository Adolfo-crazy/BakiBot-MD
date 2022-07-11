let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Aquí tienes el grupo oficial del bote BakiBot-MD*
https://chat.whatsapp.com/BceJ002VH7FKR7wYVe4Pdv
`.trim(), wm, media, [['IR AL MENU PRINCIPAL', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
