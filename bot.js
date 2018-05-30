var fs = require('fs');
var Canvas = require('canvas')
var jimp = require('jimp')
client.on('guildMemberAdd', member => {
      
        if (member.guild.id === "ايدي السيرفر") {
        var w = ['مسار الصوره مثل ذا./img/12.png'];
           let Image = Canvas.Image,
               canvas = new Canvas(401, 202),
               ctx = canvas.getContext('2d');
           ctx.patternQuality = 'bilinear';
           ctx.filter = 'bilinear';
           ctx.antialias = 'subpixel';
           ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
           ctx.shadowOffsetY = 2;
           ctx.shadowBlur = 2;
           fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
               if (err) return console.log(err);
               let BG = Canvas.Image;
               let ground = new Image;
               ground.src = Background;
               ctx.drawImage(ground, 0, 0, 401, 202);
   
   })
   
                   let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                   jimp.read(url, (err, ava) => {
                       if (err) return console.log(err);
                       ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                           if (err) return console.log(err);
(edited)
//AVATAR�
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(75, 100, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 10, 25, 135, 170);                    
   client.channels.get("ايدي الروم").sendFile(canvas.toBuffer())
  client.channels.get("ايدي الروم").send(`Welcome ${member} To __${member.guild.name}__`)
   })})  }
   });



client.login(process.env.BOT_TOKEN);

