/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();


    r_text[0] = "https://ibb.co/kgs7J8Z";


    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'πππ₯π₯π¨π π ππ¦ π SOPHIA ππ¨π­.\n            *SOPHIA*\nβ β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘\nβ *πππππ πΎπ€π’π’ππ£ππ¨* β\n\nπ€‘πΎπ€π’π’ππ£πβ -song <text>\nπ»ππ¨πβ Downloads song for you.\nπ€.song  baby love\n\nπ€‘πΎπ€π’π’ππ£πβ -video <yt link>\nπ»ππ¨πβ Downloads video from YouTube link.\n\nπ€‘πΎπ€π’π’ππ£πβ  -insta <link>\nπ»ππ¨πβ   Downloads content from instagram.\n\nπ€‘πΎπ€π’π’ππ£πβ  -yt<text>\nπ»ππ¨πβ   Gives you YT links.\n\nπ€‘πΎπ€π’π’ππ£πβ  -show <show name>\nπ»ππ¨πβ   Get info related to tv series and shows.\n\nπ€‘πΎπ€π’π’ππ£πβ -gif \nπ»ππ¨πβ Converts video to gif.\n\nπ€‘πΎπ€π’π’ππ£πβ -tomp3 \nπ»ππ¨πβ Converts video into audio.\n\nπ€‘πΎπ€π’π’ππ£πβ -say <text>\nπ»ππ¨πβ Converts text into voice.\n\nπ€‘πΎπ€π’π’ππ£πβ -img <text>\nπ»ππ¨πβ It sends image from google.\n\nπ€‘πΎπ€π’π’ππ£πβ -trt <language code>\nπ»ππ¨πβ Translate the text you tag.\n\nπ€‘πΎπ€π’π’ππ£πβ -wiki <text>\nπ»ππ¨πβ It sends Wikipedia result.\n\nπ€‘πΎπ€π’π’ππ£πβ -lyric <text>\nπ»ππ¨πβ Finds the lyrics of the song.\n\nπ€‘πΎπ€π’π’ππ£πβ -covid <country code>\nπ»ππ¨πβ Send the covid stats of your country.\n\nπ€‘πΎπ€π’π’ππ£πβ -weather <city>\nπ»ππ¨πβ Tells you about the weather of your place.\n\nπ€‘πΎπ€π’π’ππ£πβ -removebg \nπ»ππ¨πβ Removes the background of tge image.\n\nπ€‘πΎπ€π’π’ππ£πβ -ocr\nπ»ππ¨πβ Finds the text written on the image.\n\nπ€‘πΎπ€π’π’ππ£πβ -wallpaper\nπ»ππ¨πβ It sends you random wallpaper.\nβ β‘β β‘β β‘β β‘β β‘Sophiaβ β‘β β‘β β‘β β‘β β‘\nβ *ππͺπ£ πΎπ€π’π’ππ£ππ¨* β\n\nπ€‘πΎπ€π’π’ππ£πβ -joke \nπ»ππ¨πβ It sends a random joke.\n\nπ€‘πΎπ€π’π’ππ£πβ -meme <text>\nπ»ππ¨πβ Cations the image into a meme.\n\nπ€‘πΎπ€π’π’ππ£πβ -quote \nπ»ππ¨πβ It sends a random quote.\n\nπ€‘πΎπ€π’π’ππ£πβ -ss <website link>\nπ»ππ¨πβ It sends the screenshot of the website.\n\nπ€‘πΎπ€π’π’ππ£πβ -changesay <text>\nπ»ππ¨πβ Converts text into changesay meme image.\n\nπ€‘πΎπ€π’π’ππ£πβ -trumpsay\nπ»ππ¨πβ Convert text into Trumps tweet.\n\nπ€‘πΎπ€π’π’ππ£πβ -compliment \nπ»ππ¨πβ Gives you a compliment.\n\nπ€‘πΎπ€π’π’ππ£πβ  -bitly <link>\nπ»ππ¨πβ   Shorten your link.\n\nπ€‘πΎπ€π’π’ππ£πβ  -dict \nπ»ππ¨πβ   Dictionary [-dict en;anime]\n\nπ€‘πΎπ€π’π’ππ£πβ  -zodiac <leo> \nπ»ππ¨πβ   Tells you about your horoscope.\n\nπ€‘πΎπ€π’π’ππ£πβ  -qr <text>\nπ»ππ¨πβ   Converts text into qr code.\n\nπ€‘πΎπ€π’π’ππ£πβ  -movie \nπ»ππ¨πβ  Gives you info about movie.\nπ€movie lusifer\n\nπ€‘πΎπ€π’π’ππ£πβ  -anime <text>\nπ»ππ¨πβ  Gives you info about anime.\nπ€anime Sophia\nβ β‘β β‘β β‘β β‘β Sophiaβ‘β β‘β β‘β β‘β β‘β β‘\nβ *ππ©πππ ππ§ πΎπ€π’π’ππ£ππ¨* β\n\nπ€‘πΎπ€π’π’ππ£πβ -sticker \nπ»ππ¨πβ Converts img/gif into a sticker.\n\nπ€‘πΎπ€π’π’ππ£πβ -photo\nπ»ππ¨πβ Converts sticker into image.\n\nπ€‘Commandβ‘logo\nπ»Useβ‘ GIVE COMMENDS OF SOME TEXT TO IMAGE FEATURES\n\nπ€‘COMMANDβ‘-pubg <text>\nπ€.pubg sophia\nπ»USEβ‘ Convert Text into pubg theamed logo\n\nπ€‘Commandβ‘ -freefire <text>\nπ€.freefire Sophia\nπ»Useβ‘ Convert Text into FREE FIRE themed LOGO\n\nπ€‘Command β‘-sophia <text>\nπ€.sophia ichu\nπ»Useβ‘ Converts text into glitch logo\n\nπ€‘Commandβ‘ -owner\nπ»Useβ‘ know About git owner\n\nπ€‘Commandβ‘ -git\nπ»Useβ‘ Get git link\n\nπ€‘πΎπ€π’π’ππ£πβ -attp <text>\nπ»ππ¨πβ Converts text into glowing sticker.\nπ€ex  attp Sophia\nβ β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘\nβββββπ’Sophiaπ’βββββ\nβ£β£β£β£β£β£β£β£β£althaf404β£β£β£β£β£β£β£β£β£β£β£'}) 

}));
