/* β  POR FAVOR NO MODIFIQUES NADA DE AQUΓ β  */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*AUN NO TENGO PAYPAL PERO INTENTARE ABRIRLO*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/Adolfosenpai', 'πΏπ°ππΏπ°π»', null, null, [['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
