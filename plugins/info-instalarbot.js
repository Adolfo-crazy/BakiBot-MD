import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*INSTALAR EN TERMUX*
> termux-setup-storage
> apt update 
> apt upgrade -y
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> pkg install yarn
> git clone https://github.com/Adolfo-crazy/BakiBot-MD
> cd BakiBot-MD
> yarn install 
> npm install
> npm update
> npm start
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'INFORMACION - INSTALARBOT',
body: 'BAKIBOT MD',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/Adolfo-crazy/BakiBot-MD`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
