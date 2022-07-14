import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.mp4'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
╔══════════❲𝐵𝑎𝑘𝑖𝐵𝑜𝑡-𝑀𝐷❳═══════
║*👋 Hola ${name}, AQUI ESTA EL MENU COMPLETO*
║                                                         
╟══════════════════════════
╟➢*📅 FECHA: ${week}, ${date}*
╟➢*🕕 TIEMPO ACTIVO: ${uptime}*
╟➢*👥 USUARIOS: ${rtotalreg}*
╟══════════════════════
╟➢ _${usedPrefix}grupos_
╟➢_${usedPrefix}estado_
╟➢_${usedPrefix}infobot_
╟➢_${usedPrefix}donar_
╟➢_${usedPrefix}grouplist_
╟➢_${usedPrefix}owner_
╟➢_${usedPrefix}script_
╟➢_Bot_ (uso sin prefijo)*
╚═══════════════════════

╔══❲*UNE UN BOT A TU GRUPO GAY*❳
╟➢_${usedPrefix}join *<enlace / link / url>*_
╚═══════════════════════

╔════❲*JUEGOS*❳
╟➢️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
╟➢️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
╟➢️ _${usedPrefix}prostituto *<nombre / @tag>*_
╟➢️ _${usedPrefix}prostituta *<nombre / @tag>*_
╟➢️ _${usedPrefix}gay2 *<nombre / @tag>*_
╟➢️ _${usedPrefix}lesbiana *<nombre / @tag>*_
╟➢️ _${usedPrefix}pajero *<nombre / @tag>*_
╟➢️ _${usedPrefix}pajera *<nombre / @tag>*_
╟➢️ _${usedPrefix}puto *<nombre / @tag>*_
╟➢️ _${usedPrefix}puta *<nombre / @tag>*_
╟➢️ _${usedPrefix}manco *<nombre / @tag>*_
╟➢️ _${usedPrefix}manca *<nombre / @tag>*_
╟➢️ _${usedPrefix}rata *<nombre / @tag>*_
╟➢️ _${usedPrefix}love *<nombre / @tag>*_
╟➢️ _${usedPrefix}doxear *<nombre / @tag>*_
╟➢️ _${usedPrefix}pregunta *<texto>*_
╟➢️ _${usedPrefix}slot *<apuesta>*_
╟➢️ _${usedPrefix}pvp *<@tag>*_
╟➢️ _${usedPrefix}simi *<texto>*_
╟➢️ _${usedPrefix}topgays_
╟➢️ _${usedPrefix}topotakus_
╟➢️ _${usedPrefix}formarpareja_
╟➢️ _${usedPrefix}verdad_
╟➢️ _${usedPrefix}reto_
╚═══════════════════════

╔════❲*ACTIVAR O DESACTIVAR*❳
╟➢ _${usedPrefix}enable *welcome*_
╟➢ _${usedPrefix}disable *welcome*_
╟➢ _${usedPrefix}enable *modohorny*_
╟➢ _${usedPrefix}disable *modohorny*_
╟➢ _${usedPrefix}enable *antilink*_
╟➢ _${usedPrefix}disable *antilink*_
╟➢ _${usedPrefix}enable *antilink2*_
╟➢ _${usedPrefix}disable *antilink2*_
╟➢ _${usedPrefix}enable *detect*_
╟➢ _${usedPrefix}disable *detect*_
╟➢ _${usedPrefix}enable *audios*_
╟➢ _${usedPrefix}disable *audios*_
╟➢ _${usedPrefix}enable *autosticker*_
╟➢ _${usedPrefix}disable *autosticker*_
╚═══════════════════════

╔═══❲*REPORTES Y FALLOS*❳
╟➢  _${usedPrefix}reporte *<texto>*_
╚═══════════════════════

╔════❲*DESCARGAS*❳
╟➢ _${usedPrefix}facebook *<enlace / link / url>*_
╟➢ _${usedPrefix}instagram *<enlace / link / url>*_
╟➢ _${usedPrefix}mediafire *<enlace / link / url>*_
╟➢ _${usedPrefix}instagram *<enlace / link / url>*_
╟➢ _${usedPrefix}gitclone *<enlace / link / url>*_
╟➢ _${usedPrefix}gdrive *<enlace / link / url>*_
╟➢ _${usedPrefix}tiktok *<enlace / link / url>*_
╟➢ _${usedPrefix}xnxxdl *<enlace / link / url>*_
╟➢ _${usedPrefix}xvideosdl *<enlace / link / url>*_
╟➢ _${usedPrefix}ytmp3 *<enlace / link / url>*_
╟➢ _${usedPrefix}ytmp4 *<enlace / link / url>*_
╟➢ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
╟➢ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
╟➢ _${usedPrefix}play.1 *<texto / enlace / link / url>*_
╟➢ _${usedPrefix}play.2 *<texto / enlace / link / url>*_
╟➢ _${usedPrefix}play *<texto>*_
╟➢ _${usedPrefix}playdoc *<texto>*_
╟➢ _${usedPrefix}playlist *<texto>*_
╟➢ _${usedPrefix}playlist2 *<texto>*_
╟➢ _${usedPrefix}spotify *<texto>*_
╟➢ _${usedPrefix}imagen *<texto>*_
╟➢ _${usedPrefix}pinterest *<texto>*_
╟➢ _${usedPrefix}wallpaper *<texto>*_
╟➢ _${usedPrefix}wallpaper2 *<texto>*_
╟➢ _${usedPrefix}pptiktok *<nombre de usuario>*_
╟➢ _${usedPrefix}igstalk *<nombre de usuario>*_
╟➢ _${usedPrefix}igstory *<nombre de usuario>*_
╟➢ _${usedPrefix}tiktokstalk *<nombre de usuario>*_
╚═══════════════════════

╔════❲*GRUPOS*❳
╟➢ _${usedPrefix}add *<numero>*_
╟➢ _${usedPrefix}kick *<@tag>*_
╟➢ _${usedPrefix}grupo *<abrir / cerrar>*_
╟➢ _${usedPrefix}promote *<@tag>*_
╟➢ _${usedPrefix}demote *<@tag>*_
╟➢ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╟➢ _${usedPrefix}demote *<@tag>*_
╟➢ _${usedPrefix}infogroup_
╟➢ _${usedPrefix}link_
╟➢ _${usedPrefix}setname *<texto>*_
╟➢ _${usedPrefix}setdesc *<texto>*_
╟➢ _${usedPrefix}invocar *<texto>*_
╟➢ _${usedPrefix}setwelcome *<texto>*_
╟➢ _${usedPrefix}setbye *<texto>*_
╟➢ _${usedPrefix}hidetag *<texto>*_
╚═══════════════════════

╔════❲*CONVERTIDORES*❳
╟➢ _${usedPrefix}toimg *<responde a un sticker>*_
╟➢ _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
╟➢ _${usedPrefix}toptt *<responde a un video / audio>*_
╟➢ _${usedPrefix}tovideo *<responde a un audio>*_
╟➢ _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
╟➢ _${usedPrefix}tts es *<texto>*_
╚═══════════════════════

╔═══❲*EFECTOS Y LOGOS*❳
╟➢  _${usedPrefix}logos *<efecto> <texto>*_
╟➢  _${usedPrefix}logocorazon *<texto>*_
╟➢  _${usedPrefix}logochristmas *<texto>*_
╟➢  _${usedPrefix}simpcard *<@tag>*_
╟➢  _${usedPrefix}hornycard *<@tag>*_
╟➢  _${usedPrefix}lolice *<@tag>*_
╟➢  _${usedPrefix}ytcomment *<texto>*_
╟➢  _${usedPrefix}itssostupid_
╟➢  _${usedPrefix}pixelar_
╟➢  _${usedPrefix}blur_
╚═══════════════════════

╔════❲*RANDOM*❳
╟➢ _${usedPrefix}cristianoronaldo_
╟➢ _${usedPrefix}messi_
╟➢ _${usedPrefix}meme_
╟➢ _${usedPrefix}itzy_
╟➢ _${usedPrefix}blackpink_
╟➢ _${usedPrefix}kpop *<blackpink / exo / bts>*_
╟➢ _${usedPrefix}lolivid_
╟➢ _${usedPrefix}loli_
╟➢ _${usedPrefix}navidad_
╟➢ _${usedPrefix}ppcouple_
╟➢ _${usedPrefix}neko_
╟➢ _${usedPrefix}waifu_
╟➢ _${usedPrefix}akira_
╟➢ _${usedPrefix}akiyama_
╟➢ _${usedPrefix}anna_
╟➢ _${usedPrefix}asuna_
╟➢ _${usedPrefix}ayuzawa_
╟➢ _${usedPrefix}boruto_
╟➢ _${usedPrefix}chiho_
╟➢ _${usedPrefix}chitoge_
╟➢ _${usedPrefix}deidara_
╟➢ _${usedPrefix}erza_
╟➢ _${usedPrefix}elaina_
╟➢ _${usedPrefix}eba_
╟➢ _${usedPrefix}emilia_
╟➢ _${usedPrefix}hestia_
╟➢ _${usedPrefix}hinata_
╟➢ _${usedPrefix}inori_
╟➢ _${usedPrefix}isuzu_
╟➢ _${usedPrefix}itachi_
╟➢ _${usedPrefix}itori_
╟➢ _${usedPrefix}kaga_
╟➢ _${usedPrefix}kagura_
╟➢ _${usedPrefix}kaori_
╟➢ _${usedPrefix}keneki_
╟➢ _${usedPrefix}kotori_
╟➢ _${usedPrefix}kurumi_
╟➢ _${usedPrefix}madara_
╟➢ _${usedPrefix}mikasa_
╟➢ _${usedPrefix}miku_
╟➢ _${usedPrefix}minato_
╟➢ _${usedPrefix}naruto_
╟➢ _${usedPrefix}nezuko_
╟➢ _${usedPrefix}sagiri_
╟➢ _${usedPrefix}sasuke_
╟➢ _${usedPrefix}sakura_
╟➢ _${usedPrefix}cosplay_
╚═══════════════════════

╔══❲*COMANDOS NOPOR +18*❳
╟➢ _${usedPrefix}pack_
╟➢ _${usedPrefix}pack2_
╟➢ _${usedPrefix}pack3_
╟➢ _${usedPrefix}videoxxx_
╟➢ _${usedPrefix}tetas_
╟➢ _${usedPrefix}booty_
╟➢ _${usedPrefix}ecchi_
╟➢ _${usedPrefix}furro_
╟➢ _${usedPrefix}imagenlesbians_
╟➢ _${usedPrefix}panties_
╟➢ _${usedPrefix}pene_
╟➢ _${usedPrefix}porno_
╟➢ _${usedPrefix}porno2_
╟➢ _${usedPrefix}randomxxx_
╟➢ _${usedPrefix}pechos_
╟➢ _${usedPrefix}yaoi_
╟➢ _${usedPrefix}yaoi2_
╟➢ _${usedPrefix}yuri_
╟➢ _${usedPrefix}yuri2_
╟➢ _${usedPrefix}trapito_
╟➢ _${usedPrefix}hentai_
╟➢ _${usedPrefix}pies_
╟➢ _${usedPrefix}nsfwloli_
╟➢ _${usedPrefix}nsfworgy_
╟➢ _${usedPrefix}nsfwfoot_
╟➢ _${usedPrefix}nsfwass_
╟➢ _${usedPrefix}nsfwbdsm_
╟➢ _${usedPrefix}nsfwcum_
╟➢ _${usedPrefix}nsfwero_
╟➢ _${usedPrefix}nsfwfemdom_
╟➢ _${usedPrefix}nsfwglass_
╚═══════════════════════

╔═════❲*EFECTOS DE AUDIOS*❳
╟🤖 *- RESPONDE A UN AUDIO O NOTA DE VOZ*
╟➢ _${usedPrefix}bass_
╟➢ _${usedPrefix}blown_
╟➢ _${usedPrefix}deep_
╟➢ _${usedPrefix}earrape_
╟➢ _${usedPrefix}fast_
╟➢ _${usedPrefix}fat_
╟➢ _${usedPrefix}nightcore_
╟➢ _${usedPrefix}reverse_
╟➢ _${usedPrefix}robot_
╟➢ _${usedPrefix}slow_
╟➢ _${usedPrefix}smooth_
╟➢ _${usedPrefix}tupai_
╚═══════════════════════

╔═══❲*CHAT ANONIMO*❳
╟➢ _${usedPrefix}start_
╟➢ _${usedPrefix}next_
╟➢ _${usedPrefix}leave_
╚═══════════════════════

╔═════❲*BUSCADORES*❳
╟➢ _${usedPrefix}xnxxsearch *<texto>*_
╟➢ _${usedPrefix}animeinfo *<texto>*_
╟➢ _${usedPrefix}google *<texto>*_
╟➢ _${usedPrefix}letra *<texto>*_
╟➢ _${usedPrefix}wikipedia *<texto>*_
╟➢ _${usedPrefix}ytsearch *<texto>*_
╟➢ _${usedPrefix}apkdone *<texto>*_
╟➢ _${usedPrefix}apkgoogle *<texto>*_
╟➢ _${usedPrefix}apkmody *<texto>*_
╟➢ _${usedPrefix}apkshub *<texto>*_
╟➢ _${usedPrefix}happymod *<texto>*_
╟➢ _${usedPrefix}hostapk *<texto>*_
╟➢ _${usedPrefix}revdl *<texto>*_
╟➢ _${usedPrefix}toraccino *<texto>*_
╟➢ _${usedPrefix}uapkpro *<texto>*_
╚═══════════════════════
╔════❲*AUDIOS RANDOM*❳
╟➢ *ESCRIBE EL TEXTO SIN USAR LO SIGUIENTE  (#, /, *, .),(uso sin prefijo)*
╟➢ _A_
╟➢ _Ara ara_
╟➢ _Baneado_
╟➢ _Basado_
╟➢ _Buenos dias_
╟➢ _Buenas tardes_ 
╟➢ _Buenas noches_
╟➢ _Cada dia mas fichero_
╟➢ _Calla fan de bts_
╟➢ _Corte_
╟➢ _Culos asi_
╟➢ _Despierta dormilon_
╟➢ _Eh_
╟➢ _Eso me sorprende_
╟➢ _Estas celoso_
╟➢ _Evita ser humillado_
╟➢ _Fiesta del admin_
╟➢ _Gemido_
╟➢ _Hay lo note bro_
╟➢ _Hola_
╟➢ _Jesucristo_
╟➢ _Joder_
╟➢ _Me los voy a coger_
╟➢ _Modo supreme_
╟➢ _Mi bebito fiu fiu_
╟➢ _No chupala_
╟➢ _No digas mamadas meriyen_
╟➢ _No estes triste_
╟➢ _No lo se rick_
╟➢ _Nuevo mensaje_
╟➢ _Oh un pito_
╟➢ _ooo tio_
╟➢ _Onichan_
╟➢ _Ovedece sempai_
╟➢ _Por favor kakaroto_
╟➢ _Por que nadie me quiere_
╟➢ _Quitate la ropa piter_
╟➢ _Salaverga_
╟➢ _Sayayin_
╟➢ _Se estan riendo de mi_
╟➢ _Sexo_
╟➢ _Sigue de mamon_
╟➢ _Silencio_
╟➢ _Siuuu_
╟➢ _Su nivel de pendejo_
╟➢ _Solo entendi_
╟➢ _Te amo_
╟➢ _Tengo una mexicana_
╟➢ _Todo bien_
╟➢ _Troll_
╟➢ _Traiganle una falda_
╟➢ _Tunomecabrasaramambiche_
╟➢ _Usted esta detenido_
╟➢ _Viernes_
╟➢ _Wtf y este quien poronga es_
╟➢ _Yametekudasai_
╟➢ _Yoshi_
╚═══════════════════════

╔═══❲*VIDEOS RANDOM*❳
╟➢ _Video1_
╟➢ _Momento XD_
╚══════════════════════

╔════❲*HERRAMIENTAS*❳
╟➢️ _${usedPrefix}afk *<motivo>*_
╟➢️ _${usedPrefix}acortar *<enlace / link / url>*_
╟➢️ _${usedPrefix}calc *<operacion math>*_
╟➢️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
╟➢️ _${usedPrefix}qrcode *<texto>*_
╟➢️ _${usedPrefix}readmore *<texto1| texto2>*_
╟➢️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
╟➢️ _${usedPrefix}styletext *<texto>*_
╟➢️ _${usedPrefix}traducir *<texto>*_
╚═══════════════════════

╔═════❲*RPG-LIMITES-ECONOMIA*❳
╟➢ _${usedPrefix}balance_
╟➢ _${usedPrefix}claim_
╟➢ _${usedPrefix}top_
╟➢ _${usedPrefix}levelup_
╟➢ _${usedPrefix}myns_
╟➢ _${usedPrefix}perfil_
╟➢ _${usedPrefix}work_
╟➢ _${usedPrefix}minar_
╟➢ _${usedPrefix}buy_
╟➢ _${usedPrefix}buyall_
╟➢ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
╟➢ _${usedPrefix}verificar_
╟➢ _${usedPrefix}unreg *<numero de serie>*_
╚═══════════════════════

╔══════❲*STICKERS*❳
╟➢_${usedPrefix}sticker *<responder a imagen o video>*_
╟➢_${usedPrefix}sticker *<enlace / link / url>*_
╟➢_${usedPrefix}s *<responder a imagen o video>*_
╟➢_${usedPrefix}s *<enlace / link / url>*_
╟➢_${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
╟➢_${usedPrefix}scircle *<responder a imagen>*_
╟➢_${usedPrefix}semoji *<tipo> <emoji>*_
╟➢_${usedPrefix}attp *<texto>*_
╟➢_${usedPrefix}attp2 *<texto>*_
╟➢_${usedPrefix}ttp *<texto>*_
╟➢_${usedPrefix}ttp2 *<texto>*_
╟➢_${usedPrefix}ttp3 *<texto>*_
╟➢_${usedPrefix}ttp4 *<texto>*_
╟➢_${usedPrefix}ttp5 *<texto>*_
╟➢_${usedPrefix}pat *<@tag>*_
╟➢_${usedPrefix}slap *<@tag>*_
╟➢_${usedPrefix}kiss *<@tag>*_
╟➢_${usedPrefix}dado_
╟➢_${usedPrefix}wm *<packname> <author>*_
╟➢_${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
╟➢_${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
╚═══════════════════════

╔════❲*OWNER Y MODERADOR*❳
╟➢ _${usedPrefix}cajafuerte_
╟➢ _${usedPrefix}enable *restrict*_
╟➢ _${usedPrefix}disable *restrict*_
╟➢ _${usedPrefix}enable *autoread*_
╟➢ _${usedPrefix}disable *autoread*_
╟➢ _${usedPrefix}enable *public*_
╟➢ _${usedPrefix}disable *public*_
╟➢ _${usedPrefix}enable *pconly*_
╟➢ _${usedPrefix}disable *pconly*_
╟➢ _${usedPrefix}enable *gconly*_
╟➢ _${usedPrefix}disable *gconly*_
╟➢ _${usedPrefix}banchat_
╟➢ _${usedPrefix}unbanchat_
╟➢ _${usedPrefix}banuser *<@tag>*_
╟➢ _${usedPrefix}unbanuser *<@tag>*_
╟➢ _${usedPrefix}banuser *<@tag>*_
╟➢ _${usedPrefix}bc *<texto>*_
╟➢ _${usedPrefix}bcchats *<texto>*_
╟➢ _${usedPrefix}bcgc *<texto>*_
╟➢ _${usedPrefix}cleartpm_
╟➢ _${usedPrefix}restart_
╟➢ _${usedPrefix}update_
╟➢ _${usedPrefix}addprem *<@tag>*_
╟➢ _${usedPrefix}delprem *<@tag>*_
╟➢ _${usedPrefix}listprem_
╚════════════════════════
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://www.paypal.me/Adolfosempai', 'PAYPAL', 'https://github.com/Adolfo-crazy/BakiBot-MD', 'GITHUB', [
['🤑DONAR🤑', '/donasi'],
['🔥OWNER🔥', '/owner'],
['👨‍💻INFBOT👨‍💻', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}

handler.customPrefix = /menu/
handler.command = new RegExp
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
