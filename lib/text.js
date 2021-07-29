const moment = require('moment-timezone'); 
const os = require('os')
const menu = (prefix, client, data) => { 
  let yo = client.user
	let p = 0
	const formater1 = (seconds) => {
                    const pad1 = (s) => {
                        return (s < 10 ? '0' : '') + s
                    }
                    const hrs = Math.floor(seconds / (60 * 60))
                    const mins = Math.floor(seconds % (60 * 60) / 60)
                    const secs = Math.floor(seconds % 60)
                    return ' ' + pad1(hrs) + ':' + pad1(mins) + ':' + pad1(secs)
                }
            const uptime1 = process.uptime()
    var ramadhan2k21 = new Date("januari 1, 2022 00:00:00").getTime() 

var now = new Date().getTime()
var hitungMundur = ramadhan2k21 - now 


function secondsToHms(d) {
    d = Number(d);
    var w = Math.floor(d / 36000 / 2400);
    var h = Math.floor(d / 3600 / 360 / 6);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    var wDisplay = w > 0 ? w + (w == 1 ? " Hari,," : " Hari, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " Jam,, " : " Jam, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " Detik": " Detik") : "";
    return wDisplay + hDisplay + mDisplay + sDisplay; 
} 
	return `Hai ${data.pushname} ( @${data.sender.split('@')[0]} )
		
*Bot Info*
- Runtime : ${formater1(uptime1)} 
- Nama : ${yo.name} 
- Device : ${yo.phone.device_manufacturer} 
- Model : ${yo.phone.device_model} 
- WA Ver : ${yo.phone.wa_version}  
- MCC : ${yo.phone.mcc}  
- MNC : ${yo.phone.mnc}  
- OS : ${yo.phone.os_version} 
- Owner : wa.me/628885960825
- Platform : ${os.platform()} 
- Version : ${os.version} 
- Host : ${os.hostname()} 
    
-  Total Fitur: 133
-  Fitur Error : ${global.error.length}  
    
SUPPORT
  @${628885960825} - Recode
  @${6289649480997} - Creator
  @${0}
     
- - - *Group Menu (Group):* - - -
*${p+=1}.* ${prefix}group *open/close*
*${p+=1}.* ${prefix}antilink *on/off*
*${p+=1}.* ${prefix}welcome *on/off*
*${p+=1}.* ${prefix}leave *on/off*
*${p+=1}.* ${prefix}setgroupicon *replyImage*
*${p+=1}.* ${prefix}setgroupname *text*
*${p+=1}.* ${prefix}setgroupdesc *text*
*${p+=1}.* ${prefix}hidetag *text*
*${p+=1}.* ${prefix}promote *@tag*
*${p+=1}.* ${prefix}demote *@tag*
*${p+=1}.* ${prefix}kick *@tag*
*${p+=1}.* ${prefix}add *number*
*${p+=1}.* ${prefix}getpp *@tag*
*${p+=1}.* ${prefix}tagall
*${p+=1}.* ${prefix}linkgroup
*${p+=1}.* ${prefix}revoke
*${p+=1}.* ${prefix}leave 
*${p+=1}.* ${prefix}gcdesk 
*${p+=1}.* ${prefix}gcname 

- - - *Downloader:* - - -
*${p+=1}.* ${prefix}play *query*
*${p+=1}.* ${prefix}playvid *query*
*${p+=1}.* ${prefix}youtubedl *query*
*${p+=1}.* ${prefix}ytmp3 *link*
*${p+=1}.* ${prefix}ytmp4 *link*
*${p+=1}.* ${prefix}igstory *username*
*${p+=1}.* ${prefix}ig *link*
*${p+=1}.* ${prefix}joox *song*

- - - *Sticker:* - - -
*${p+=1}.* ${prefix}stickerwm *pack|author*
*${p+=1}.* ${prefix}takestick *pack|author*
*${p+=1}.* ${prefix}toimg *replySticker*
*${p+=1}.* ${prefix}togif *replySticker*
*${p+=1}.* ${prefix}semoji *emoji*
*${p+=1}.* ${prefix}stickerfire
*${p+=1}.* ${prefix}stickernobg
*${p+=1}.* ${prefix}stickergif
*${p+=1}.* ${prefix}sticker

- - - *Edukasi:* - - -
*${p+=1}.* ${prefix}nulis *text*
*${p+=1}.* ${prefix}brainly *query*
*${p+=1}.* ${prefix}kbbi *query*
*${p+=1}.* ${prefix}wiki *query*

- - - *Searching:* - - -
*${p+=1}.* ${prefix}playstore *apk*
*${p+=1}.* ${prefix}happymod *apk*
*${p+=1}.* ${prefix}iguser *username*
*${p+=1}.* ${prefix}igstalk *username*
*${p+=1}.* ${prefix}ytsearch *query*
*${p+=1}.* ${prefix}ytplaylist *query*
*${p+=1}.* ${prefix}ytchannel *channel*
*${p+=1}.* ${prefix}shoope *product*
*${p+=1}.* ${prefix}spotify *song*
*${p+=1}.* ${prefix}gsmarena *hp*
*${p+=1}.* ${prefix}searchmusic *replyAudio*
*${p+=1}.* ${prefix}wallpaper *query*
*${p+=1}.* ${prefix}pinterest *query*
*${p+=1}.* ${prefix}googleimage *query*
*${p+=1}.* ${prefix}jagokata *kata*

- - - *Primbon:* - - -
*${p+=1}.* ${prefix}jodoh *kamu|dia*
*${p+=1}.* ${prefix}artinama *nama*
*${p+=1}.* ${prefix}artimimpi *mimpi*

- - - *Random:* - - -
*${p+=1}.* ${prefix}fml
*${p+=1}.* ${prefix}randomquran
*${p+=1}.* ${prefix}meme
*${p+=1}.* ${prefix}darkjoke
*${p+=1}.* ${prefix}pantun
*${p+=1}.* ${prefix}nickepep
*${p+=1}.* ${prefix}quotes
*${p+=1}.* ${prefix}estetikpic

- - - *Text Maker:* - - -
*${p+=1}.* ${prefix}wolflogo *text1|text2*
*${p+=1}.* ${prefix}logoaveng *text1|text2*
*${p+=1}.* ${prefix}phlogo *text1|text2*
*${p+=1}.* ${prefix}marvellogo *text1|text2*
*${p+=1}.* ${prefix}gtext *text1|text2*
*${p+=1}.* ${prefix}pubglogo *text1|text2*
*${p+=1}.* ${prefix}snowwrite *text1|text2*
*${p+=1}.* ${prefix}watercolour *text1|text2*
*${p+=1}.* ${prefix}harta *text*
*${p+=1}.* ${prefix}thundertext *text*
*${p+=1}.* ${prefix}flametext *text*
*${p+=1}.* ${prefix}glowtext *text*
*${p+=1}.* ${prefix}smoketext *text*
*${p+=1}.* ${prefix}lithgtext *text*
*${p+=1}.* ${prefix}flowertext *text*
*${p+=1}.* ${prefix}bneon *text*
*${p+=1}.* ${prefix}matrix *text*
*${p+=1}.* ${prefix}breakwall *text*
*${p+=1}.* ${prefix}gneon *text*
*${p+=1}.* ${prefix}dropwater *text*
*${p+=1}.* ${prefix}tfire *text*
*${p+=1}.* ${prefix}sandw *text*
*${p+=1}.* ${prefix}epep *text*
*${p+=1}.* ${prefix}gplaybutton *text*
*${p+=1}.* ${prefix}splaybutton *text*
*${p+=1}.* ${prefix}text3dbox *text*
*${p+=1}.* ${prefix}text3d *text*
*${p+=1}.* ${prefix}logobp *text*
*${p+=1}.* ${prefix}leavest *text*
*${p+=1}.* ${prefix}tlight *text*
*${p+=1}.* ${prefix}naruto *text*
*${p+=1}.* ${prefix}crosslogo *text*
*${p+=1}.* ${prefix}cslogo *text*
*${p+=1}.* ${prefix}crismes *text*

- - - *Image Maker:* - - -
*${p+=1}.* ${prefix}missing *text1|text2|text3|@tag*
*${p+=1}.* ${prefix}calender *replyImage / @tag*
*${p+=1}.* ${prefix}drawing *replyImage / @tag*
*${p+=1}.* ${prefix}sketch *replyImage / @tag*

- - - *Lain Lain:* - - -
*${p+=1}.* ${prefix}removebg *replyImage / @tag*
*${p+=1}.* ${prefix}qrencode *text*
*${p+=1}.* ${prefix}barcode *text*
*${p+=1}.* ${prefix}jadwalsholat *daerah*
*${p+=1}.* ${prefix}jadwaltv *channel*
*${p+=1}.* ${prefix}tebakgambar

- - - *Info:* - - -
*${p+=1}.* ${prefix}stickermenu
*${p+=1}.* ${prefix}owner
*${p+=1}.* ${prefix}limit
*${p+=1}.* ${prefix}info
*${p+=1}.* ${prefix}listvn

- - - *owner:* - - -
*${p+=1}.* ${prefix}setpp *replyImage*
*${p+=1}.* ${prefix}eval *text*
*${p+=1}.* ${prefix}term *code*
*${p+=1}.* ${prefix}block *@tag*
*${p+=1}.* ${prefix}unblock *@tag*
*${p+=1}.* ${prefix}join *link*
*${p+=1}.* ${prefix}bc *text*
*${p+=1}.* ${prefix}addvn *replyAudio/vn*
*${p+=1}.* ${prefix}delvn *name*
*${p+=1}.* ${prefix}premium add *@tag*
*${p+=1}.* ${prefix}premium del *@tag*
*${p+=1}.* ${prefix}premium list
*${p+=1}.* ${prefix}clearall
*${p+=1}.* ${prefix}resetlimit
*${p+=1}.* ${prefix}adderror
*${p+=1}.* ${prefix}dellerror
*${p+=1}.* ${prefix}addstik
*${p+=1}.* ${prefix}delstik

© *Akmalzz 2k21*`
}

const ingfo = `Made With JavaScript By MySelf`


const mess = {
             wait: 'Tunggu Permintaan Sedang Dalam Proses',
			 group: 'Perintah Khusus Grup! ',
			 admin: 'Khusus Admin Grup!',
			 botAdmin: 'Bot Harus Menjadi Admin Grup!',
			 limit: 'Upss!!..\n\nLimit Request Kamu Sudah Habis, Limit Akan Di Reset Pada Pukul 00.00 Wib',
			 ownerOnly: 'Khusus Owner Bot!!'
}

module.exports = {
	menu,
	ingfo,
	mess
}
