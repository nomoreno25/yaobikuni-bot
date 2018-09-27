var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, { colorize: true });
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    bot.sendMessage({
        to: '480337864887107594',
        message: 'Hiii, bé onl lại rồi nè :D'
    });
    return;
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '?' && userID!='287777769826287617') {
        // Thêm .toLowerCase() để biến tất cả thành chữ thường, đỡ phải check hoa thường, mệt
        var args = message.substring(1).toLowerCase();

        // VD: "!Tìm kiếm"
        if (args.includes("help")) {
            bot.sendMessage({
                to: channelID,
                message: 'Chào đại nhân, ta ở đây để hỗ trợ làm truy hoặc tìm người yêu/crush.\nGõ ?+tên thức thần hoặc ?+tip để tìm thông tin nhé.'
            });
            return;
        } 
        // VD: "!Tìm Quỷ đỏ", "!Quỷ đỏ", "!quỷ đỏ"....
        else if (args.includes("người yêu")) {
            bot.sendMessage({
                to: channelID,
                message: 'người yêu me may?'
            });
            return;
        }
        else if (args.includes("crush")) {
            bot.sendMessage({
                to: channelID,
                message: 'crush me may?'
            });
            return;
        }
        // ...
        else if (args.includes("chouchin obake")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Chouchin Obake\nChương 9​ - Chouchin Kozou thứ nhất có 3\nUmibouzu​ - Tầng 1 có 3'
            });
            return;
        }
        else if (args.includes("chouchin kozou")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Chouchin Kozou\nKappa​ - Tầng 1/2 có 3\nKamaitachi​ - Tầng 1 có 3'
            });
            return;
        }
        else if (args.includes("akajita") || args.includes("xích thiệt")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Akajita\nKamaitachi​ - Tầng 1 có 3'
            });
            return;
        }
        else if (args.includes("hakaarashi no rei")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Hakaarashi no Rei\nAme Onna​ - Tầng 1/2/3 có 3\nYoutouchi​ - Tầng 1 có 3\nUbume​ - Tầng 4 đến 6 có 3\nKamaitachi​ - Tầng 3 có 3\nUmibouzu​ - Tầng 3 có 3; '
            });
            return;
        }
        else if (args.includes("kiseirei")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kiseirei\nChương 11​ - Hồn Samurai thứ nhất có 3\nChương 16​ - Cả 3 Akajita đều có 3\nUmibouzu​ - Tầng 2 có 3'
            });
            return;
        }
        else if (args.includes("karakasa kozou")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Karakasa Kozou\nChương 4​ - Hokigami thứ hai có 3\nAme Onna​ - Tầng 4 đến 6 có 3\mUbume​ - Tầng 2 có 3\nUmibouzu​ - Tầng 4 có 3'
            });
            return;
        }
        else if (args.includes("amanojaku midori")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Amanojaku Midori\nChương 6​ - cả 2 Amanojaku Ao có 3, Boss Kodokushi có 3'
            });
            return;
        }
        else if (args.includes("amanojaku aka") || args.includes("quỷ đỏ") || args.includes("vỗ mông")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Amanojaku Aka\nChương 13​ - cả 3 Gaki có 3\nChương 14​ - cả 3 Hokigami có 3, Boss Yumekui có 3\nKamaitachi​ - Tầng 2 có 3'
            });
            return;
        }
        else if (args.includes("amanojaku ki") || args.includes("cái trống")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Amanojaku Ki\nChương 5​ - Hokigami thứ hai có 2, Kanko đầu tiên có 2\nChương 8​ - cả 2 Amanojaku Ao có 2'
            });
            return;
        }
        else if (args.includes("amanojaku ao") || args.includes("con diều")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Amanojaku Ao\nYoutouchi​ - Tầng 1 đến 3 có 4'
            });
            return;
        }
        else if (args.includes("hokigami") || args.includes("chổi")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Hokigami\nChương 6​ - cả 2 Chouchin Obake có 3\nOotengu​ - Tầng 1 có 4, tầng 2 đến 10 có 3'
            });
            return;
        }
        else if (args.includes("norikabe") || args.includes("đồ bích") || args.includes("tường đá")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Norikabe\nChương 14​ - cả 3 Norikabe có 6'
            });
            return;
        }
        else if (args.includes("hắc báo")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Hắc Báo\nKappa​ - Tầng 4 có 3'
            });
            return;
        }
        else if (args.includes("ma chó")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Ma Chó\nChương 7​ - cả 2 Chouchin Kozou đầu tiên có 3, Chouchin Kozou thứ ba có 1, Kappa cuối cùng có 2\nUmibouzu​ - Tầng 2 có 3'
            });
            return;
        }
        else if (args.includes("sanbi no kitsune") || args.includes("tam vĩ hồ") || args.includes("cây anh đào") || args.includes("màu đỏ") || args.includes("hoa vũ")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Sanbi no Kitsune\nOotengu​ - Tầng 1 đến 4 có 4, tầng 5/6 có 3'
            });
            return;
        }
        else if (args.includes("zashiki warashi") || args.includes("tọa") || args.includes("quỷ hỏa") ||args.includes("sừng")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Zashiki Warashi\nAme Onna​ - Tầng 1 có 3'
            });
            return;
        }
        else if (args.includes("koi") || args.includes("lý ngư tinh") || args.includes("bong bóng")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Koi\nChương 7​ - Koi đầu tiên có 3, Koi thứ hai có 1\nUmibouzu​ - Tầng 4 có 4'
            });
            return;
        }
        else if (args.includes("kyuinochi neko") || args.includes("cửu mệnh miêu")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kyuinochi Neko\nChương 18​ - cả 3 Kyuinochi Neko có 6, cả 3 Sanbi no Kitsune có 2\nAme Onna​ - Tầng 1 đến 3 có 3'
            });
            return;
        }
        else if (args.includes("bakedanuki") || args.includes("ly miêu")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Bakedanuki\nYoutouchi​ - Tầng 1 đến 3 có 4 , Tầng 4 đến 10 có 3'
            });
            return;
        }
        else if (args.includes("kappa") || args.includes("lá sen") || args.includes("hà đồng") || args.includes("tù trưởng")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kappa\nUmibouzu​ - Tầng 3/5 có 5'
            });
            return;
        }
        else if (args.includes("oguna") || args.includes("đồng nam") || args.includes("hiến tế")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Oguna\nKappa​ - Tầng 1 có 3'
            });
            return;
        }
        else if (args.includes("doujo") || args.includes("đồng nữ") || args.includes("bé gái nhỏ")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Doujo\nChương 12​ - Doujo đầu tiên có 1, Doujo thứ hai có 3'
            });
            return;
        }
        else if (args.includes("gaki") || args.includes("ngạ quỷ")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Gaki\nMomiji​ - Tầng 1 đến 3 có 4, Tầng 4 đến 10 có 3'
            });
            return;
        }
        else if (args.includes("kodokushi") || args.includes("vu cổ sư") || args.includes("độc") || args.includes("trùng")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kodokushi\nKamaitachi​ - Tầng 3 có 3'
            });
            return;
        }
        else if (args.includes("karasu tengu") || args.includes("nha thiên cẩu") || args.includes("naginata") || args.includes("cẩu fake")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Karasu Tengu\nUbume​ - Tầng 3 có 2'
            });
            return;
        }
        else if (args.includes("kamigui") || args.includes("thực phát quỷ")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kamigui\nKappa​ - Tầng 3 có 3'
            });
            return;
        }
        else if (args.includes("hồn samurai")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Hồn Samurai\nKappa​ - Tầng 3 có 3\nAme Onna​ - Tầng 3 có 3'
            });
            return;
        }
        else if (args.includes("ame onna") || args.includes("vũ nữ") || args.includes("em gái mưa") || args.includes("khóc") || args.includes("mưa") || args.includes("dù")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Ame Onna\nYoutouchi​ - Tầng 3 có 3'
            });
            return;
        }
        else if (args.includes("kyonshi imouto") || args.includes("khiêu muội")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kyonshi Imouto\nMomiji​ - Tầng 2 có 1'
            });
            return;
        }
        else if (args.includes("heiyo") || args.includes("binh dũng") || args.includes("binh giáp") || args.includes("hóa đá")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Heiyo\nChương 3​ - cả 2 Heiyo có 1\nNgự hồn - Tầng 2 có 1'
            });
            return;
        }
        else if (args.includes("ushi no kokumairi") || args.includes("sửu") || args.includes("người rơm") || args.includes("trù ếm")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Ushi no Kokumairi\nKappa​ - Tầng 4 có 2'
            });
            return;
        }
        else if (args.includes("hitotsume kozou") || args.includes("trọc") || args.includes("độc nhãn tiểu tăng") || args.includes("mắt") || args.includes("phật thạch") || args.includes("sư thầy") || args.includes("kim cang")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Hitotsume Kozou\nChương 11​ - Hồn Samurai thứ hai có 3'
            });
            return;
        }
        else if (args.includes("tesso") || args.includes("thiết thử") || args.includes("tài phú") || args.includes("may mắn") || args.includes("chuột")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Tesso\nYêu khí​ - Quái Xu có 16;'
            });
            return;
        }
        else if (args.includes("shouzu") || args.includes("sò") || args.includes("tiêu đồ") || args.includes("vỏ sò") || args.includes("00k")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Shouzu\nNgự hồn  - Tầng 3/8/9/10 có 1\nYêu khí​ - Shouzu có 3'
            });
            return;
        }
        else if (args.includes("kanko") || args.includes("quản hồ")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kanko\nMomiji​ - Tầng 1 đến 3 có 4'
            });
            return;
        }
        else if (args.includes("yamausagi") || args.includes("sơn thố") || args.includes("ném vòng") || args.includes("thố") || args.includes("hola")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Yamausagi\nChương 9​ - Yamausagi đầu tiên có 4, Yamausagi thứ hai có 3'
            });
            return;
        }
        else if (args.includes("hotarugusa") || args.includes("thảo") || args.includes("bồ công anh") || args.includes("cắn")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Hotarugusa\nNgự hồn - Tầng 2/9/10 có 1\nNgự hồn - ​Nghiệp Nguyên Hỏa có 4'
            });
            return;
        }
        else if (args.includes("kochosei") || args.includes("hồ điệp tinh") || args.includes("bướm") || args.includes("trống tay") || args.includes("khả ái")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kochosei\nYoutouchi​ - Tầng 2 có 3'
            });
            return;
        }
        else if (args.includes("yamawaro") || args.includes("sơn đồng") || args.includes("sơn tùng")  || args.includes("thạch chùy") || args.includes("quái lực")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Yamawaro\nKappa​ - Tầng 2 có 3'
            });
            return;
        }
        else if (args.includes("kubinashi") || args.includes("vô thủ") ) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kubinashi\nAme Onna​ - Tầng 2 có 3, tầng 8 có 4\nOotengu​ - Tầng 1 có 3'
            });
            return;
        }
        else if (args.includes("satori") || args.includes("giác") ) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Satori\nMomiji​ - Tầng 1 có 3\nKappa​ - Tầng 4 có 3\nAme Onna​ - Tầng 4 đến 6 có 3\nUbume​ - Tầng 1 đến 3 có 3'
            });
            return;
        }
        else if (args.includes("jikigaeru") || args.includes("ếch")  || args.includes("xúc xắc") || args.includes("hũ") || args.includes("gian lận")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Jikigaeru\nNgự hồn - Tầng 3 có 1'
            });
            return;
        }
        else if (args.includes("momo no sei") || args.includes("đào lùn") || args.includes("hoa/vũ")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Momo no Sei\nNgự hồn - Tầng 3 có 1'
            });
            return;
        }
        else if (args.includes("yuki onna") || args.includes("tuyết nữ")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Yuki Onna\nChương 8​ - cả 2 Sakura có 1\nChương 12​ - cả 2 Doujo có 1, Boss Yuki Onna có 2'
            });
            return;
        }
        else if (args.includes("shiro mujou") || args.includes("bạch vô thường") || args.includes("bạch lớn")   || args.includes("trắng") || args.includes("đoạt mệnh")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Shiro Mujou\nNgự hồn  - Tầng 4 có 1\nOotengu​ - Tầng 6 có 2\nKamaitachi​ - Tầng 1 có 1'
            });
            return;
        }
        else if (args.includes("kuro mujou") || args.includes("hắc lớn")  || args.includes("hắc vô thường")  || args.includes("lưỡi hái") || args.includes("đoản đao")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kuro Mujou\nKappa​ - Tầng 6 có 3\nKamaitachi​ - Tầng 2 có 1'
            });
            return;
        }
        else if (args.includes("mouba") || args.includes("mậu bà")  || args.includes("bát") || args.includes("cầm") || args.includes("nha nha")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Mouba\nNgự hồn - Tầng 5 có 2, Tầng 6 có 1'
            });
            return;
        }
        else if (args.includes("inugami") || args.includes("khuyển thần") || args.includes("cậu vàng") || args.includes("shiba") || args.includes("gâu gâu") || args.includes("thủ hộ")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Inugami\nChương 10​ - Satori thứ hai có 1, Kairaishi thứ hai có 1\nNgự hồn  - Tầng 4 có 1'
            });
            return;
        }
        else if (args.includes("hone onna") || args.includes("cốt nữ") || args.includes("đầu lâu") || args.includes("oán hận")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Hone Onna\nAme Onna​ - Tầng 4 có 4'
            });
            return;
        }
        else if (args.includes("momiji") || args.includes("hồng diệp")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Momiji\nMomiji​ - Tầng 1 đến 10 có 1'
            });
            return;
        }
        else if (args.includes("kyonshi ani") || args.includes("khiêu ca") || args.includes("nến") || args.includes("quan tài")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kyonshi Ani\nChương 12​ - Boss Yuki Onna có 2\nNgự hồn  - Tầng 5 có 1\nYêu khí​ - Kyonshi Ani có 3\nMomiji​ - Tầng 2 có 1'
            });
            return;
        }
        else if (args.includes("kairaishi") || args.includes("khôi lỗi sư") || args.includes("hình nhân") || args.includes("thao túng")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kairaishi\nChương 10​ - cả 2 Ushi no Kokumairi có 1, cả 2 Kairaishi có 1'
            });
            return;
        }
        else if (args.includes("umibouzu") || args.includes("điểu fake") || args.includes("hải phường chủ") || args.includes("cá trê") || args.includes("biển") || args.includes("râu") || args.includes("trượng")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Umibouzu\nNgự hồn  - Tầng 3 có 1\nYêu khí​ - Umibouzu có 3'
            });
            return;
        }
        else if (args.includes("hangan") || args.includes("phán quan")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Hangan\nNgự hồn  - Tầng 8 có 1'
            });
            return;
        }
        else if (args.includes("hououka") || args.includes("phụng")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Hououka\nNgự hồn  - Tầng 7 có 1\nKappa​ - Tầng 5 có 1\nUbume​ - Tầng 4 có 1'
            });
            return;
        }
        else if (args.includes("kyuuketsuhime") || args.includes("hấp huyết cơ") || args.includes("dơi") || args.includes("máu")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kyuuketsuhime\nNgự hồn  - Tầng 2 có 1\nMomiji​ - Tầng 7 có 2'
            });
            return;
        }
        else if (args.includes("youko") || args.includes("yêu hồ") || args.includes("cáo") || args.includes("thư sinh")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Youko\nNgự hồn  - Tầng 2 có 1, Nghiệp Nguyên Hỏa có 1'
            });
            return;
        }
        else if (args.includes("yumekui") || args.includes("thực mộng giả") || args.includes("heo ngủ") || args.includes("chuông") || args.includes("ác mộng")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Yumekui\nChương 14​ - Norikabe cuối cùng có 1, Boss Yumekui có 5\nNgự hồn - tầng 4 có 2'
            });
            return;
        }
        else if (args.includes("kamaitachi") || args.includes("dứu") || args.includes("liêm dứu") || args.includes("chùy") || args.includes("đinh ba") || args.includes("rìu")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Kamaitachi\nNgự hồn - Tầng 5 có 1\nKết giới/PVP - Thường gặp\nKappa​ - Tầng 4 có 1'
            });
            return;
        }
        else if (args.includes("sakura no sei") || args.includes("đào dài")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Sakura no Sei\nChương 8​ - cả 2 Sakura có 1, Boss có 1'
            });
            return;
        }
        else if (args.includes("ootengu") || args.includes("lông vũ") || args.includes("sáo") || args.includes("đại thiên cẩu") || args.includes("đậu thiên cải")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Ootengu\nNgự hồn - Tầng 4 có 1, tầng 10 có 2'
            });
            return;
        }
        else if (args.includes("shuten douji") || args.includes("tửu thôn đồng tử") || args.includes("tửu") || args.includes("bạn thân")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Shuten Douji\nNgự hồn  - Tầng 7/10 có 1'
            });
            return;
        }
        else if (args.includes("lãnh chúa arakawa") || args.includes("xuyên")  || args.includes("hoang xuyên") || args.includes("cá mập") || args.includes("cắn cáp")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Lãnh Chúa Arakawa\nNgự hồn  - Tầng 7 có 2'
            });
            return;
        }
        else if (args.includes("enma") || args.includes("mây") || args.includes("diêm")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm: Enma\nNgự hồn  - Tầng 6 có 1'
            });
            return;
        }
        // ...
        else if (args.includes("hồ nước")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm Koi hoặc Kappa. Vui lòng thêm tip khác.'
            });
            return;
        }
        else if (args.includes("đuôi")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm Koi hoặc Shouzu. Vui lòng thêm tip khác.'
            });
            return;
        }
        else if (args.includes("mặt nạ")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm Karasu Tengu hoặc Youko. Vui lòng thêm tip khác.'
            });
            return;
        }
        else if (args.includes("cánh")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm Oguna, Doujo hoặc Karasu Tengu. Vui lòng thêm tip khác.'
            });
            return;
        }
        else if (args.includes("vũ y")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm Oguna hoặc Doujo. Vui lòng thêm tip khác.'
            });
            return;
        }
        else if (args.includes("quạt")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm Shouzu hoặc Ootengu. Vui lòng thêm tip khác.'
            });
            return;
        }
        else if (args.includes("minh giới")) {
            bot.sendMessage({
                to: channelID,
                message: 'Đại nhân cần tìm Shiro Mujou, Kuro Mujou hoặc Enma. Vui lòng thêm tip khác.'
            });
            return;
        }
        // ...
    }
});