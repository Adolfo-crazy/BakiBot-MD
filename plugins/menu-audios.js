const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.mp4'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*👋 Hola _${name}_*

*MENU AUDIOS*
*- Escribe el texto sin prefijo (#, /, *, .)*

°✯⃟🔊 _A_
°✯⃟🔊 _Ara ara_
°✯⃟🔊 _Baneado_
°✯⃟🔊 _Basado_
°✯⃟🔊 _Buenos dias_
°✯⃟🔊 _Buenas tardes_ 
°✯⃟🔊 _Buenas noches_
°✯⃟🔊 _Cada dia mas fichero_
°✯⃟🔊 _Calla fan de bts_
°✯⃟🔊 _Corte_
°✯⃟🔊 _Culos asi_
°✯⃟🔊 _Despierta dormilon_
°✯⃟🔊 _Eh_
°✯⃟🔊 _Eso me sorprende_
°✯⃟🔊 _Estas celoso_
°✯⃟🔊 _Evita ser humillado_
°✯⃟🔊 _Fiesta del admin_
°✯⃟🔊 _Gemido_
°✯⃟🔊 _Hay lo note bro_
°✯⃟🔊 _Hola_
°✯⃟🔊 _Jesucristo_
°✯⃟🔊 _Joder_
°✯⃟🔊 _Me los voy a coger_
°✯⃟🔊 _Modo supreme_
°✯⃟🔊 _Mi bebito fiu fiu_
°✯⃟🔊 _No chupala_
°✯⃟🔊 _No digas mamadas meriyen_
°✯⃟🔊 _No estes triste_
°✯⃟🔊 _No lo se rick_
°✯⃟🔊 _Nuevo mensaje_
°✯⃟🔊 _Oh un pito_
°✯⃟🔊 _ooo tio_
°✯⃟🔊 _Onichan_
°✯⃟🔊 _Ovedece sempai_
°✯⃟🔊 _Por favor escuchen_
°✯⃟🔊 _Por favor kakaroto_
°✯⃟🔊 _Por que nadie me quiere_
°✯⃟🔊 _Quitate la ropa piter_
°✯⃟🔊 _Salaverga_
°✯⃟🔊 _Sayayin_
°✯⃟🔊 _Se estan riendo de mi_
°✯⃟🔊 _Sexo_
°✯⃟🔊 _Sigue de mamon_
°✯⃟🔊 _Silencio_
°✯⃟🔊 _Siuuu_
°✯⃟🔊 _Su nivel de pendejo_
°✯⃟🔊 _Solo entendi_
°✯⃟🔊 _Te amo_
°✯⃟🔊 _Tengo una mexicana_
°✯⃟🔊 _Todo bien_
°✯⃟🔊 _Troll_
°✯⃟🔊 _Traiganle una falda_
°✯⃟🔊 _Tunomecabrasaramambiche_
°✯⃟🔊 _Usted esta detenido_
°✯⃟🔊 _Viernes_
°✯⃟🔊 _Wtf y este quien poronga es_
°✯⃟🔊 _Yametekudasai_
°✯⃟🔊 _Yoshi_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/Adolfo-crazy/BakiBot-MD', 'GITHUB', null, null, [
['Menu Principal', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menu2|menu2|menuaudio|menuaudios|menuaudios|menuaudio|audios|audio)$/i
handler.fail = null
export default  handler
