module.exports = async (client, ctx) => {

    ctx.replyWithAnimation('https://cdn.discordapp.com/attachments/795771950076133438/811821312107610112/katow.gif', { 
        reply_markup: {
            inline_keyboard: [[{text: 'Inline', callback_data: 'inline'}], [{text: 'Prefix', callback_data: 'prefix'}]]
        },
        caption: 'Hai Selamat datang di Bot Kato! (@Katoww_Bot) ❤\n\nBot Kato memiliki dua cara untuk menggunakan fitur-fitur yang ada di Platform ini.\n\nSilahkan klik tombol yang tersedia untuk melihat secara detail!\n\nDukung Projek ini supaya bisa terus berkembang!\nhttps://trakteer.id/katowproject\n\nProjek ini tentu saja Open Source:\nhttps://github.com/KatowProject/Kato-Bot\n\nAda Masalah pada bot? silahkan laporkan ke Developer Bot Kato!\nhttps://www.facebook.com/naufal.faqih.37669/\nhttps://www.facebook.com/katoww',
        disable_web_page_preview: true
    });
    
    console.log(`${ctx.message.from.username}(${ctx.message.from.id}) ran start`);
}