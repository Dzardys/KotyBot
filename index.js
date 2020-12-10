const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const fs = require('fs');
const sound = require('./sounds.json');

client.once('ready', ()  => {
    console.log('So geht\'s!');
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'koty help',
            type: 'STREAMING',
            url: 'https://www.twitch.tv/agraelus'
        }
    })
})

client.on('message', async message => {
	
	if (message.content === `${prefix}sb ${sound}` && message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
	}

});

client.login(token);

client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');
	} else if (message.content === `${prefix}veronika`) {
		message.channel.send('Veronika je píča.');
	} else if (message.content === `${prefix}kebab`) {
        var rawdata = require("./kebab.json")
        rawdata.kebab++
        message.channel.send(`Děkuji ti za kebab, již jsem jich snědl ${rawdata.kebab}.`)
        fs.writeFile('kebab.json', JSON.stringify(rawdata), (err) => {
            if(err) throw err;
        })
                                 
    } else if (message.content === `${prefix}cau`) {
        message.channel.send(`Čau.`, {
            files: [
              "./koty-cau.mp4"
            ]
          });
    } else if(message.content === `${prefix}avatar`){
        message.channel.send(`Tak se na tebe podívejme... <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`)
    } else if(message.content === `${prefix}help` ){
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#fc0f03')
	    .setTitle('Návod k použití Kotyho')
	    .setAuthor('Dzardys 2020', 'http://www.kami-san.site/koty/dzardyshelpavatar.png', 'http://www.kami-san.site/koty/kotyhelpavatar.jpeg')
	    .setThumbnail('http://www.kami-san.site/koty/kotyhelpavatar.jpeg')
	    .addFields(
		{ name: 'Příkazy:', value: '**koty ping**- Otestuj mou funkčnost\n**koty veronika**- Zeptej se mě na Veroniku\n**koty kebab**- Dej mi najíst\n**koty cau**- Pozdrav mě\n**koty avatar**- Jen tak ti prostě pošlu tvůj avatar\n**koty fitko**- Pošli mě do fitka\n**koty wide**- Projdu se po chodbě\n**koty jak je?**- Jakou mám dnes náladu?\n**koty hoes**- Kolik holek jsem dneska zmlátil?\n**koty holka**- S kým právě teď chodím?\n**koty anime**- Zeptej se mě na anime\n**koty víno**- Podej mi lahev s vínem' })
	    .setImage('https://cdn.discordapp.com/attachments/784365052085403650/784411809959772220/received_194423698321135.jpeg')
	    .setFooter('BDSM Koty', 'http://www.kami-san.site/koty/kotyhelpavatar.jpeg');

        message.channel.send(exampleEmbed);
    } else if (message.content === `${prefix}fitko`){
        message.channel.send(`Oof.`, {
            files: [
                "./koty-fitko.jpg"
            ]
        });
    }else if (message.content === `${prefix}wide`){
        message.channel.send(`Tak jo.`, {
            files: [
              "./koty-wide.mp4"
            ]
          });
    }else if (message.content === `${prefix}jak je?`){
        var nalady = [
            "Blbě.",
            "Dobrý.",
            "Na píču, zas máme Peldovou.",
            "Mám hlad.",
            "Veronika mě zase nasrala."
          ]
        var randomNalada = nalady[Math.floor(Math.random() * nalady.length)];
        message.channel.send(randomNalada);
    } else if(message.content === `${prefix}hoes`){
        var hoes = Math.floor(Math.random() * 100)
        message.channel.send(`Dneska jsem zmlátil ${hoes} holek.`)
    } else if(message.content === `${prefix}holka`){
        message.channel.send(`Chodím s nejúžasnejší Honk. :heart:`)
    } else if(message.content === `${prefix}anime`){
        message.channel.send(`Rád sleduji anime UwU https://myanimelist.net/profile/kolik95`)
    } else if(message.content === `zum beispiel ivan`){
        message.channel.send(`Jua.`)
    } else if(message.content === `${prefix}víno`){
        message.channel.send({
            files: [
                "./vajnos.mov"
            ]
            }
        )
    }else if(message.content === `${prefix}deutsch`){
        message.channel.send(`http://www.nemcina.org/`, {
            files: [
                "./pw.jpg"
            ]
        })
    }else if(message.content === `${prefix}soundboard`){
        const soundboardEmbed = new Discord.MessageEmbed()
        .setColor('#fc0f03')
	    .setTitle('Návod k použití Kotyho soundboardu')
	    .setAuthor('Dzardys 2020', 'http://www.kami-san.site/koty/dzardyshelpavatar.png', 'http://www.kami-san.site/koty/kotyhelpavatar.jpeg')
	    .setThumbnail('http://www.kami-san.site/koty/kotyhelpavatar.jpeg')
	    .addFields(
		{ name: 'koty sb:', value: 'Ještě tu nic nemám.' })
	    .setImage('https://cdn.discordapp.com/attachments/784365052085403650/784411809959772220/received_194423698321135.jpeg')
	    .setFooter('BDSM Koty', 'http://www.kami-san.site/koty/kotyhelpavatar.jpeg');
        message.channel.send(soundboardEmbed);
    } else if(message.content === `${prefix}sb ${sound}`){
        const dispatcher = connection.play(`${sound}`);

        dispatcher.on('start', () => {
	        console.log('Sound is now playing!');
        });

        dispatcher.on('finish', () => {
	        console.log('Sound has finished playing!');
        });

        // Always remember to handle errors appropriately!
        dispatcher.on('error', console.error);
    }



	}); 