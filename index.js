const {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    messageStubType,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    WAMessageProto,
	prepareMessageFromContent,
    relayWAMessage,
} = require("@adiwajshing/baileys");
const fs = require('fs');
const moment = require('moment-timezone');
const afkJs = require('./lib/afk')
const vn = JSON.parse(fs.readFileSync('./lib/json/vn.json'))
const ClientJs = require('./lib/client');
const cron = require('node-cron');
global.configs = JSON.parse(fs.readFileSync('./config.json'));
global.ban = JSON.parse(fs.readFileSync('./lib/json/ban.json'));
global.error = JSON.parse(fs.readFileSync('./lib/json/error.json'));
let dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
global.vn = JSON.parse(fs.readFileSync('./lib/json/vn.json')) 
global.stik = JSON.parse(fs.readFileSync('./lib/json/stik.json'));
global.tebakgambar = {}
moment.tz.setDefault('Asia/Jakarta').locale('id');
const { color } = require('./lib/func')
const Crypto = require('crypto')
//const { Database } = require("quickmongo");
//const dbMongo = new Database(process.env.DB_HOST || "mongodb+srv://devn:devn@cluster0.p4pml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const starts = async (sesName) => {
    try {
        const Client = new ClientJs(global.configs, sesName || global.configs.defaultSessionName)
		const client = Client.mainClient
		require("./lib/http-server")(client)
        Client.starts()
		detectChange('./handler.js', (mdl) =>{
			Client.cmd.removeAllListeners()
			Client.handlerStick.removeAllListeners()
			require('./handler')(client, Client, data)
			console.log(color('[ INFO ]', 'cyan'), `${mdl} auto updated!`)
		})
		require('./handler')(client, Client)
		
        client.on('CB:Presence', asd => {
        	asd = asd[1]
            if (!asd.id.endsWith('@g.us')) return
            if((asd.type == 'composing' || asd.type == 'recording') && afkJs.detectingAfk(asd.id, asd.participant)) {
            Client.sendText(asd.id, `@${asd.participant.split('@')[0]} terdeteksi melakukan aktivitas!, status afkMu telah dihapus`)
                }
        })
		client.on('CB:Call', json => {
			client.query({json: ["action","call",["call",{"from":client.user.jid,"to":json[1].from,"id":generateMessageID()},[["reject",{"call-id":json[1].id,"call-creator":json[1].from,"count":"0"},null]]]]}).then(() =>{
			setTimeout(async () =>{
			if (Client.blocklist.includes(json[1].from)) return
			client.blockUser(json[1].from, 'add')   
			}, 3000)
		}).catch()  
		})
        client.on('new-msg', (message) => {
            if(message.key && message.key.remoteJid == 'status@broadcast') return
            if(message.key.fromMe && !global.configs.self || !message.key.fromMe && global.configs.self) return
			let dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
			const body = message.body
			const from = message.key.remoteJid
            const isGroup = from.endsWith('@g.us')
            const sender = isGroup ? message.participant : from
			if (global.tebakgambar[from] && global.tebakgambar[from].id && global.tebakgambar[from].jawaban.toLowerCase() == body.toLowerCase()) Client.reply(from, `YES TEBAK GAMBAR BERHASIL DIJAWAB OLEH @${sender.split("@")[0]}`, message).then(() => global.tebakgambar[from] = {}) 
			if (global.vn.includes(body)) Client.sendPtt(from, `./lib/vn/${body}.mp3`, message) 
			 if (global.stik.includes(body)) Client.sendRawWebpAsSticker(from, fs.readFileSync(`./lib/stik/${body}.webp`), message)
			 
			if (isGroup && !dataGc[from]){
				dataGc[from] = {afk:{}}
				fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc, null, 2))
			}
			if (isGroup && !message.isAdmin && dataGc[from].antilink && /chat\.whatsapp\.com/gi.test(body)){
				let dtclink = body.match(/chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{18,26})/gi) || []
				dtclink.forEach(async l => {
					checks = await Client.checkInviteLink(l)
					if(checks.status == 200){
						Client.reply(from, `Group link detected!`, message)
						client.groupRemove(from, [sender])
					}
				})
			}
			if (!dataUser[sender]){
				dataUser[sender] = {limit: 0, premium: false}
				fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
			}
            if(isGroup) {
                if(afkJs.detectingAfk(from, sender)) Client.sendText(from, `@${sender.split('@')[0]} sekarang tidak afk!`)
                if(message.message.extendedTextMessage && message.message.extendedTextMessage.contextInfo && message.message.extendedTextMessage.contextInfo.mentionedJid) {
                    jids = message.message.extendedTextMessage.contextInfo.mentionedJid
                    jids.forEach(jid => {
                        takeData = afkJs.tagDetect(from, jid)
                        if(!takeData) return
                        duration = moment.duration(moment(takeData.time).diff(moment()))
                        Client.reply(from, `@${jid.split('@')[0]} sedang afk\nReason: ${takeData.reason}\nTime: ${duration.days()} Hari ${duration.hours()} Jam ${duration.minutes()} Menit ${duration.seconds()} detik`)
                    })
                }
            }
        })
          	client.on('group-participants-update', async (hem, data) => {
  	if (hem.action == 'add' && data.sender.includes(client.user.jid)) {
  	client.sendMessage(hem.jid, `Terima kasih Telah Menambahkan Bot Ke grup, ketik ${data.prefix}menu untuk menampilkan Menu!`, MessageType.text)
  	}
  	})
		client.on('group-participants-update', (jdgn) => require('./lib/greet.js')(jdgn, Client, client))
    } catch (e) {
        console.error(e)
    }
}

cron.schedule('0 0 * * *', () => {
    for (users in dataUser){
		dataUser[users].limit = 0
	}
    fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
    console.log(color('[ INFO ]', 'cyan'), 'LIMIT RESETED!')
});
detectChange('./lib/text.js', (mdl) => console.log(color('[ INFO ]', 'cyan'), `${mdl} change is detected!`))
detectChange('./lib/greet.js', (mdl) => console.log(color('[ INFO ]', 'cyan'), `${mdl} change is detected!`))
function detectChange(module, cb){
	fs.watchFile(require.resolve(module), () => {
	 delete require.cache[require.resolve(module)]
	 if (cb) cb(module)
    })
}
const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}
global.generateMessageID = () => {
    return '3EB0' + randomBytes(7).toString('hex').toUpperCase()
}
starts(process.argv[2])