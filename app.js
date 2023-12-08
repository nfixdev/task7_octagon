const telegrambot = require('node-telegram-bot-api');

const token = '6802319674:AAG3mBMojhnyMZfMZ940IAqo2cnCm7w90bI';

const bot = new telegrambot(token, {polling: true});

bot.onText(/^\!qr/, function(msg) {
    console.log(msg);
    var userId = msg.from.id;
    var data = msg.text.substring(3).trim();
    var imageqr = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + data;
    bot.sendMessage(msg.chat.id, imageqr);
});

bot.onText(/^\!webscr/, function(msg) {
    console.log(msg);
    var userId = msg.from.id;
    var url = msg.text.substring(8).trim();
    var image = "https://api.screenshotone.com/take?access_key=UrU5vvFY6zCM6Q&url=" + url + "&viewport_width=1280&viewport_height=720&device_scale_factor=1";
    bot.sendMessage(msg.chat.id, image);
  });