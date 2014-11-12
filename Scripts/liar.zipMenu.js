﻿var zipMenu = [{ "CodeNo": "100", "CodeName": "台北市中正區" }, { "CodeNo": "103", "CodeName": "台北市大同區" }, { "CodeNo": "104", "CodeName": "台北市中山區" }, { "CodeNo": "105", "CodeName": "台北市松山區" }, { "CodeNo": "106", "CodeName": "台北市大安區" }, { "CodeNo": "108", "CodeName": "台北市萬華區" }, { "CodeNo": "110", "CodeName": "台北市信義區" }, { "CodeNo": "111", "CodeName": "台北市士林區" }, { "CodeNo": "112", "CodeName": "台北市北投區" }, { "CodeNo": "114", "CodeName": "台北市內湖區" }, { "CodeNo": "115", "CodeName": "台北市南港區" }, { "CodeNo": "116", "CodeName": "台北市文山區" }, { "CodeNo": "200", "CodeName": "基隆市仁愛區" }, { "CodeNo": "201", "CodeName": "基隆市信義區" }, { "CodeNo": "202", "CodeName": "基隆市中正區" }, { "CodeNo": "203", "CodeName": "基隆市中山區" }, { "CodeNo": "204", "CodeName": "基隆市安樂區" }, { "CodeNo": "205", "CodeName": "基隆市暖暖區" }, { "CodeNo": "206", "CodeName": "基隆市七堵區" }, { "CodeNo": "207", "CodeName": "新北市萬里區" }, { "CodeNo": "208", "CodeName": "新北市金山區" }, { "CodeNo": "209", "CodeName": "連江縣南竿鄉" }, { "CodeNo": "210", "CodeName": "連江縣北竿鄉" }, { "CodeNo": "211", "CodeName": "連江縣莒光鄉" }, { "CodeNo": "212", "CodeName": "連江縣東引鄉" }, { "CodeNo": "220", "CodeName": "新北市板橋區" }, { "CodeNo": "221", "CodeName": "新北市汐止區" }, { "CodeNo": "222", "CodeName": "新北市深坑區" }, { "CodeNo": "223", "CodeName": "新北市石碇區" }, { "CodeNo": "224", "CodeName": "新北市瑞芳區" }, { "CodeNo": "226", "CodeName": "新北市平溪區" }, { "CodeNo": "227", "CodeName": "新北市雙溪區" }, { "CodeNo": "228", "CodeName": "新北市貢寮區" }, { "CodeNo": "231", "CodeName": "新北市新店區" }, { "CodeNo": "232", "CodeName": "新北市坪林區" }, { "CodeNo": "233", "CodeName": "新北市烏來區" }, { "CodeNo": "234", "CodeName": "新北市永和區" }, { "CodeNo": "235", "CodeName": "新北市中和區" }, { "CodeNo": "236", "CodeName": "新北市土城區" }, { "CodeNo": "237", "CodeName": "新北市三峽區" }, { "CodeNo": "238", "CodeName": "新北市樹林區" }, { "CodeNo": "239", "CodeName": "新北市鶯歌區" }, { "CodeNo": "241", "CodeName": "新北市三重區" }, { "CodeNo": "242", "CodeName": "新北市新莊區" }, { "CodeNo": "243", "CodeName": "新北市泰山區" }, { "CodeNo": "244", "CodeName": "新北市林口區" }, { "CodeNo": "247", "CodeName": "新北市蘆洲區" }, { "CodeNo": "248", "CodeName": "新北市五股區" }, { "CodeNo": "249", "CodeName": "新北市八里區" }, { "CodeNo": "251", "CodeName": "新北市淡水區" }, { "CodeNo": "252", "CodeName": "新北市三芝區" }, { "CodeNo": "253", "CodeName": "新北市石門區" }, { "CodeNo": "260", "CodeName": "宜蘭縣宜蘭市" }, { "CodeNo": "261", "CodeName": "宜蘭縣頭城鎮" }, { "CodeNo": "262", "CodeName": "宜蘭縣礁溪鄉" }, { "CodeNo": "263", "CodeName": "宜蘭縣壯圍鄉" }, { "CodeNo": "264", "CodeName": "宜蘭縣員山鄉" }, { "CodeNo": "265", "CodeName": "宜蘭縣羅東鎮" }, { "CodeNo": "266", "CodeName": "宜蘭縣三星鄉" }, { "CodeNo": "267", "CodeName": "宜蘭縣大同鄉" }, { "CodeNo": "268", "CodeName": "宜蘭縣五結鄉" }, { "CodeNo": "269", "CodeName": "宜蘭縣冬山鄉" }, { "CodeNo": "270", "CodeName": "宜蘭縣蘇澳鎮" }, { "CodeNo": "272", "CodeName": "宜蘭縣南澳鄉" }, { "CodeNo": "290", "CodeName": "釣魚台列嶼" }, { "CodeNo": "300", "CodeName": "新竹市" }, { "CodeNo": "302", "CodeName": "新竹縣竹北市" }, { "CodeNo": "303", "CodeName": "新竹縣湖口鄉" }, { "CodeNo": "304", "CodeName": "新竹縣新豐鄉" }, { "CodeNo": "305", "CodeName": "新竹縣新埔鎮" }, { "CodeNo": "306", "CodeName": "新竹縣關西鎮" }, { "CodeNo": "307", "CodeName": "新竹縣芎林鄉" }, { "CodeNo": "308", "CodeName": "新竹縣寶山鄉" }, { "CodeNo": "310", "CodeName": "新竹縣竹東鎮" }, { "CodeNo": "311", "CodeName": "新竹縣五峰鄉" }, { "CodeNo": "312", "CodeName": "新竹縣橫山鄉" }, { "CodeNo": "313", "CodeName": "新竹縣尖石鄉" }, { "CodeNo": "314", "CodeName": "新竹縣北埔鄉" }, { "CodeNo": "315", "CodeName": "新竹縣峨嵋鄉" }, { "CodeNo": "320", "CodeName": "桃園縣中壢市" }, { "CodeNo": "324", "CodeName": "桃園縣平鎮市" }, { "CodeNo": "325", "CodeName": "桃園縣龍潭鄉" }, { "CodeNo": "326", "CodeName": "桃園縣楊梅市" }, { "CodeNo": "327", "CodeName": "桃園縣新屋鄉" }, { "CodeNo": "328", "CodeName": "桃園縣觀音鄉" }, { "CodeNo": "330", "CodeName": "桃園縣桃園市" }, { "CodeNo": "333", "CodeName": "桃園縣龜山鄉" }, { "CodeNo": "334", "CodeName": "桃園縣八德市" }, { "CodeNo": "335", "CodeName": "桃園縣大溪鎮" }, { "CodeNo": "336", "CodeName": "桃園縣復興鄉" }, { "CodeNo": "337", "CodeName": "桃園縣大園鄉" }, { "CodeNo": "338", "CodeName": "桃園縣蘆竹鄉" }, { "CodeNo": "350", "CodeName": "苗栗縣竹南鎮" }, { "CodeNo": "351", "CodeName": "苗栗縣頭份鎮" }, { "CodeNo": "352", "CodeName": "苗栗縣三灣鄉" }, { "CodeNo": "353", "CodeName": "苗栗縣南庄鄉" }, { "CodeNo": "354", "CodeName": "苗栗縣獅潭鄉" }, { "CodeNo": "356", "CodeName": "苗栗縣後龍鎮" }, { "CodeNo": "357", "CodeName": "苗栗縣通霄鎮" }, { "CodeNo": "358", "CodeName": "苗栗縣苑裡鎮" }, { "CodeNo": "360", "CodeName": "苗栗縣苗栗市" }, { "CodeNo": "361", "CodeName": "苗栗縣造橋鄉" }, { "CodeNo": "362", "CodeName": "苗栗縣頭屋鄉" }, { "CodeNo": "363", "CodeName": "苗栗縣公館鄉" }, { "CodeNo": "364", "CodeName": "苗栗縣大湖鄉" }, { "CodeNo": "365", "CodeName": "苗栗縣泰安鄉" }, { "CodeNo": "366", "CodeName": "苗栗縣銅鑼鄉" }, { "CodeNo": "367", "CodeName": "苗栗縣三義鄉" }, { "CodeNo": "368", "CodeName": "苗栗縣西湖鄉" }, { "CodeNo": "369", "CodeName": "苗栗縣卓蘭鎮" }, { "CodeNo": "400", "CodeName": "台中市中區" }, { "CodeNo": "401", "CodeName": "台中市東區" }, { "CodeNo": "402", "CodeName": "台中市南區" }, { "CodeNo": "403", "CodeName": "台中市西區" }, { "CodeNo": "404", "CodeName": "台中市北區" }, { "CodeNo": "406", "CodeName": "台中市北屯區" }, { "CodeNo": "407", "CodeName": "台中市西屯區" }, { "CodeNo": "408", "CodeName": "台中市南屯區" }, { "CodeNo": "411", "CodeName": "台中市太平區" }, { "CodeNo": "412", "CodeName": "台中市大里區" }, { "CodeNo": "413", "CodeName": "台中市霧峰區" }, { "CodeNo": "414", "CodeName": "台中市烏日區" }, { "CodeNo": "420", "CodeName": "台中市豐原區" }, { "CodeNo": "421", "CodeName": "台中市后里區" }, { "CodeNo": "422", "CodeName": "台中市石岡區" }, { "CodeNo": "423", "CodeName": "台中市東勢區" }, { "CodeNo": "424", "CodeName": "台中市和平區" }, { "CodeNo": "426", "CodeName": "台中市新社區" }, { "CodeNo": "427", "CodeName": "台中市潭子區" }, { "CodeNo": "428", "CodeName": "台中市大雅區" }, { "CodeNo": "429", "CodeName": "台中市神岡區" }, { "CodeNo": "432", "CodeName": "台中市大肚區" }, { "CodeNo": "433", "CodeName": "台中市沙鹿區" }, { "CodeNo": "434", "CodeName": "台中市龍井區" }, { "CodeNo": "435", "CodeName": "台中市梧棲區" }, { "CodeNo": "436", "CodeName": "台中市清水區" }, { "CodeNo": "437", "CodeName": "台中市大甲區" }, { "CodeNo": "438", "CodeName": "台中市外埔區" }, { "CodeNo": "439", "CodeName": "台中市大安區" }, { "CodeNo": "500", "CodeName": "彰化縣彰化市" }, { "CodeNo": "502", "CodeName": "彰化縣芬園鄉" }, { "CodeNo": "503", "CodeName": "彰化縣花壇鄉" }, { "CodeNo": "504", "CodeName": "彰化縣秀水鄉" }, { "CodeNo": "505", "CodeName": "彰化縣鹿港鎮" }, { "CodeNo": "506", "CodeName": "彰化縣福興鄉" }, { "CodeNo": "507", "CodeName": "彰化縣線西鄉" }, { "CodeNo": "508", "CodeName": "彰化縣和美鎮" }, { "CodeNo": "509", "CodeName": "彰化縣伸港鄉" }, { "CodeNo": "510", "CodeName": "彰化縣員林鎮" }, { "CodeNo": "511", "CodeName": "彰化縣社頭鄉" }, { "CodeNo": "512", "CodeName": "彰化縣永靖鄉" }, { "CodeNo": "513", "CodeName": "彰化縣埔心鄉" }, { "CodeNo": "514", "CodeName": "彰化縣溪湖鎮" }, { "CodeNo": "515", "CodeName": "彰化縣大村鄉" }, { "CodeNo": "516", "CodeName": "彰化縣埔鹽鄉" }, { "CodeNo": "520", "CodeName": "彰化縣田中鎮" }, { "CodeNo": "521", "CodeName": "彰化縣北斗鎮" }, { "CodeNo": "522", "CodeName": "彰化縣田尾鄉" }, { "CodeNo": "523", "CodeName": "彰化縣埤頭鄉" }, { "CodeNo": "524", "CodeName": "彰化縣溪州鄉" }, { "CodeNo": "525", "CodeName": "彰化縣竹塘鄉" }, { "CodeNo": "526", "CodeName": "彰化縣二林鎮" }, { "CodeNo": "527", "CodeName": "彰化縣大城鄉" }, { "CodeNo": "528", "CodeName": "彰化縣芳苑鄉" }, { "CodeNo": "530", "CodeName": "彰化縣二水鄉" }, { "CodeNo": "540", "CodeName": "南投縣南投市" }, { "CodeNo": "541", "CodeName": "南投縣中寮鄉" }, { "CodeNo": "542", "CodeName": "南投縣草屯鎮" }, { "CodeNo": "544", "CodeName": "南投縣國姓鄉" }, { "CodeNo": "545", "CodeName": "南投縣埔里鎮" }, { "CodeNo": "546", "CodeName": "南投縣仁愛鄉" }, { "CodeNo": "551", "CodeName": "南投縣名間鄉" }, { "CodeNo": "552", "CodeName": "南投縣集集鎮" }, { "CodeNo": "553", "CodeName": "南投縣水里鄉" }, { "CodeNo": "555", "CodeName": "南投縣魚池鄉" }, { "CodeNo": "556", "CodeName": "南投縣信義鄉" }, { "CodeNo": "557", "CodeName": "南投縣竹山鎮" }, { "CodeNo": "558", "CodeName": "南投縣鹿谷鄉" }, { "CodeNo": "600", "CodeName": "嘉義市" }, { "CodeNo": "602", "CodeName": "嘉義縣番路鄉" }, { "CodeNo": "603", "CodeName": "嘉義縣梅山鄉" }, { "CodeNo": "604", "CodeName": "嘉義縣竹崎鄉" }, { "CodeNo": "605", "CodeName": "嘉義縣阿里山" }, { "CodeNo": "606", "CodeName": "嘉義縣中埔鄉" }, { "CodeNo": "607", "CodeName": "嘉義縣大埔鄉" }, { "CodeNo": "608", "CodeName": "嘉義縣水上鄉" }, { "CodeNo": "611", "CodeName": "嘉義縣鹿草鄉" }, { "CodeNo": "612", "CodeName": "嘉義縣太保市" }, { "CodeNo": "613", "CodeName": "嘉義縣朴子市" }, { "CodeNo": "614", "CodeName": "嘉義縣東石鄉" }, { "CodeNo": "615", "CodeName": "嘉義縣六腳鄉" }, { "CodeNo": "616", "CodeName": "嘉義縣新港鄉" }, { "CodeNo": "621", "CodeName": "嘉義縣民雄鄉" }, { "CodeNo": "622", "CodeName": "嘉義縣大林鎮" }, { "CodeNo": "623", "CodeName": "嘉義縣溪口鄉" }, { "CodeNo": "624", "CodeName": "嘉義縣義竹鄉" }, { "CodeNo": "625", "CodeName": "嘉義縣布袋鎮" }, { "CodeNo": "630", "CodeName": "雲林縣斗南鎮" }, { "CodeNo": "631", "CodeName": "雲林縣大埤鄉" }, { "CodeNo": "632", "CodeName": "雲林縣虎尾鎮" }, { "CodeNo": "633", "CodeName": "雲林縣土庫鎮" }, { "CodeNo": "634", "CodeName": "雲林縣褒忠鄉" }, { "CodeNo": "635", "CodeName": "雲林縣東勢鄉" }, { "CodeNo": "636", "CodeName": "雲林縣臺西鄉" }, { "CodeNo": "637", "CodeName": "雲林縣崙背鄉" }, { "CodeNo": "638", "CodeName": "雲林縣麥寮鄉" }, { "CodeNo": "640", "CodeName": "雲林縣斗六市" }, { "CodeNo": "643", "CodeName": "雲林縣林內鄉" }, { "CodeNo": "646", "CodeName": "雲林縣古坑鄉" }, { "CodeNo": "647", "CodeName": "雲林縣莿桐鄉" }, { "CodeNo": "648", "CodeName": "雲林縣西螺鎮" }, { "CodeNo": "649", "CodeName": "雲林縣二崙鄉" }, { "CodeNo": "651", "CodeName": "雲林縣北港鎮" }, { "CodeNo": "652", "CodeName": "雲林縣水林鄉" }, { "CodeNo": "653", "CodeName": "雲林縣口湖鄉" }, { "CodeNo": "654", "CodeName": "雲林縣四湖鄉" }, { "CodeNo": "655", "CodeName": "雲林縣元長鄉" }, { "CodeNo": "700", "CodeName": "台南市中西區" }, { "CodeNo": "701", "CodeName": "台南市東區" }, { "CodeNo": "702", "CodeName": "台南市南區" }, { "CodeNo": "703", "CodeName": "台南市西區" }, { "CodeNo": "704", "CodeName": "台南市北區" }, { "CodeNo": "708", "CodeName": "台南市安平區" }, { "CodeNo": "709", "CodeName": "台南市安南區" }, { "CodeNo": "710", "CodeName": "台南市永康區" }, { "CodeNo": "711", "CodeName": "台南市歸仁區" }, { "CodeNo": "712", "CodeName": "台南市新化區" }, { "CodeNo": "713", "CodeName": "台南市左鎮區" }, { "CodeNo": "714", "CodeName": "台南市玉井區" }, { "CodeNo": "715", "CodeName": "台南市楠西區" }, { "CodeNo": "716", "CodeName": "台南市南化區" }, { "CodeNo": "717", "CodeName": "台南市仁德區" }, { "CodeNo": "718", "CodeName": "台南市關廟區" }, { "CodeNo": "719", "CodeName": "台南市龍崎區" }, { "CodeNo": "720", "CodeName": "台南市官田區" }, { "CodeNo": "721", "CodeName": "台南市麻豆區" }, { "CodeNo": "722", "CodeName": "台南市佳里區" }, { "CodeNo": "723", "CodeName": "台南市西港區" }, { "CodeNo": "724", "CodeName": "台南市七股區" }, { "CodeNo": "725", "CodeName": "台南市將軍區" }, { "CodeNo": "726", "CodeName": "台南市學甲區" }, { "CodeNo": "727", "CodeName": "台南市北門區" }, { "CodeNo": "730", "CodeName": "台南市新營區" }, { "CodeNo": "731", "CodeName": "台南市後壁區" }, { "CodeNo": "732", "CodeName": "台南市白河區" }, { "CodeNo": "733", "CodeName": "台南市東山區" }, { "CodeNo": "734", "CodeName": "台南市六甲區" }, { "CodeNo": "735", "CodeName": "台南市下營區" }, { "CodeNo": "736", "CodeName": "台南市柳營區" }, { "CodeNo": "737", "CodeName": "台南市鹽水區" }, { "CodeNo": "741", "CodeName": "台南市善化區" }, { "CodeNo": "742", "CodeName": "台南市大內區" }, { "CodeNo": "743", "CodeName": "台南市山上區" }, { "CodeNo": "744", "CodeName": "台南市新市區" }, { "CodeNo": "745", "CodeName": "台南市安定區" }, { "CodeNo": "800", "CodeName": "高雄市新興區" }, { "CodeNo": "801", "CodeName": "高雄市前金區" }, { "CodeNo": "802", "CodeName": "高雄市苓雅區" }, { "CodeNo": "803", "CodeName": "高雄市鹽埕區" }, { "CodeNo": "804", "CodeName": "高雄市鼓山區" }, { "CodeNo": "805", "CodeName": "高雄市旗津區" }, { "CodeNo": "806", "CodeName": "高雄市前鎮區" }, { "CodeNo": "807", "CodeName": "高雄市三民區" }, { "CodeNo": "811", "CodeName": "高雄市楠梓區" }, { "CodeNo": "812", "CodeName": "高雄市小港區" }, { "CodeNo": "813", "CodeName": "高雄市左營區" }, { "CodeNo": "814", "CodeName": "高雄市仁武區" }, { "CodeNo": "815", "CodeName": "高雄市大社區" }, { "CodeNo": "817", "CodeName": "南海諸島東沙" }, { "CodeNo": "819", "CodeName": "南海諸島南沙" }, { "CodeNo": "820", "CodeName": "高雄市岡山區" }, { "CodeNo": "821", "CodeName": "高雄市路竹區" }, { "CodeNo": "822", "CodeName": "高雄市阿蓮區" }, { "CodeNo": "823", "CodeName": "高雄市田寮區" }, { "CodeNo": "824", "CodeName": "高雄市燕巢區" }, { "CodeNo": "825", "CodeName": "高雄市橋頭區" }, { "CodeNo": "826", "CodeName": "高雄市梓官區" }, { "CodeNo": "827", "CodeName": "高雄市彌陀區" }, { "CodeNo": "828", "CodeName": "高雄市永安區" }, { "CodeNo": "829", "CodeName": "高雄市湖內區" }, { "CodeNo": "830", "CodeName": "高雄市鳳山區" }, { "CodeNo": "831", "CodeName": "高雄市大寮區" }, { "CodeNo": "832", "CodeName": "高雄市林園區" }, { "CodeNo": "833", "CodeName": "高雄市鳥松區" }, { "CodeNo": "840", "CodeName": "高雄市大樹區" }, { "CodeNo": "842", "CodeName": "高雄市旗山區" }, { "CodeNo": "843", "CodeName": "高雄市美濃區" }, { "CodeNo": "844", "CodeName": "高雄市六龜區" }, { "CodeNo": "845", "CodeName": "高雄市內門區" }, { "CodeNo": "846", "CodeName": "高雄市杉林區" }, { "CodeNo": "847", "CodeName": "高雄市甲仙區" }, { "CodeNo": "848", "CodeName": "高雄市桃源區" }, { "CodeNo": "849", "CodeName": "高雄縣那瑪夏" }, { "CodeNo": "851", "CodeName": "高雄市茂林區" }, { "CodeNo": "852", "CodeName": "高雄市茄萣區" }, { "CodeNo": "880", "CodeName": "澎湖縣馬公市" }, { "CodeNo": "881", "CodeName": "澎湖縣西嶼鄉" }, { "CodeNo": "882", "CodeName": "澎湖縣望安鄉" }, { "CodeNo": "883", "CodeName": "澎湖縣七美鄉" }, { "CodeNo": "884", "CodeName": "澎湖縣白沙鄉" }, { "CodeNo": "885", "CodeName": "澎湖縣湖西鄉" }, { "CodeNo": "890", "CodeName": "金門縣金沙鎮" }, { "CodeNo": "891", "CodeName": "金門縣金湖鎮" }, { "CodeNo": "892", "CodeName": "金門縣金寧鄉" }, { "CodeNo": "893", "CodeName": "金門縣金城鎮" }, { "CodeNo": "894", "CodeName": "金門縣烈嶼鄉" }, { "CodeNo": "896", "CodeName": "金門縣烏坵鄉" }, { "CodeNo": "900", "CodeName": "屏東縣屏東市" }, { "CodeNo": "901", "CodeName": "屏東縣三地門" }, { "CodeNo": "902", "CodeName": "屏東縣霧臺鄉" }, { "CodeNo": "903", "CodeName": "屏東縣瑪家鄉" }, { "CodeNo": "904", "CodeName": "屏東縣九如鄉" }, { "CodeNo": "905", "CodeName": "屏東縣里港鄉" }, { "CodeNo": "906", "CodeName": "屏東縣高樹鄉" }, { "CodeNo": "907", "CodeName": "屏東縣鹽埔鄉" }, { "CodeNo": "908", "CodeName": "屏東縣長治鄉" }, { "CodeNo": "909", "CodeName": "屏東縣麟洛鄉" }, { "CodeNo": "911", "CodeName": "屏東縣竹田鄉" }, { "CodeNo": "912", "CodeName": "屏東縣內埔鄉" }, { "CodeNo": "913", "CodeName": "屏東縣萬丹鄉" }, { "CodeNo": "920", "CodeName": "屏東縣潮州鎮" }, { "CodeNo": "921", "CodeName": "屏東縣泰武鄉" }, { "CodeNo": "922", "CodeName": "屏東縣來義鄉" }, { "CodeNo": "923", "CodeName": "屏東縣萬巒鄉" }, { "CodeNo": "924", "CodeName": "屏東縣崁頂鄉" }, { "CodeNo": "925", "CodeName": "屏東縣新埤鄉" }, { "CodeNo": "926", "CodeName": "屏東縣南州鄉" }, { "CodeNo": "927", "CodeName": "屏東縣林邊鄉" }, { "CodeNo": "928", "CodeName": "屏東縣東港鎮" }, { "CodeNo": "929", "CodeName": "屏東縣琉球鄉" }, { "CodeNo": "931", "CodeName": "屏東縣佳冬鄉" }, { "CodeNo": "932", "CodeName": "屏東縣新園鄉" }, { "CodeNo": "940", "CodeName": "屏東縣枋寮鄉" }, { "CodeNo": "941", "CodeName": "屏東縣枋山鄉" }, { "CodeNo": "942", "CodeName": "屏東縣春日鄉" }, { "CodeNo": "943", "CodeName": "屏東縣獅子鄉" }, { "CodeNo": "944", "CodeName": "屏東縣車城鄉" }, { "CodeNo": "945", "CodeName": "屏東縣牡丹鄉" }, { "CodeNo": "946", "CodeName": "屏東縣恆春鎮" }, { "CodeNo": "947", "CodeName": "屏東縣滿州鄉" }, { "CodeNo": "950", "CodeName": "台東縣台東市" }, { "CodeNo": "951", "CodeName": "台東縣綠島鄉" }, { "CodeNo": "952", "CodeName": "台東縣蘭嶼鄉" }, { "CodeNo": "953", "CodeName": "台東縣延平鄉" }, { "CodeNo": "954", "CodeName": "台東縣卑南鄉" }, { "CodeNo": "955", "CodeName": "台東縣鹿野鄉" }, { "CodeNo": "956", "CodeName": "台東縣關山鎮" }, { "CodeNo": "957", "CodeName": "台東縣海端鄉" }, { "CodeNo": "958", "CodeName": "台東縣池上鄉" }, { "CodeNo": "959", "CodeName": "台東縣東河鄉" }, { "CodeNo": "961", "CodeName": "台東縣成功鎮" }, { "CodeNo": "962", "CodeName": "台東縣長濱鄉" }, { "CodeNo": "963", "CodeName": "台東縣太麻里" }, { "CodeNo": "964", "CodeName": "台東縣金峰鄉" }, { "CodeNo": "965", "CodeName": "台東縣大武鄉" }, { "CodeNo": "966", "CodeName": "台東縣達仁鄉" }, { "CodeNo": "970", "CodeName": "花蓮縣花蓮市" }, { "CodeNo": "971", "CodeName": "花蓮縣新城鄉" }, { "CodeNo": "972", "CodeName": "花蓮縣秀林鄉" }, { "CodeNo": "973", "CodeName": "花蓮縣吉安鄉" }, { "CodeNo": "974", "CodeName": "花蓮縣壽豐鄉" }, { "CodeNo": "975", "CodeName": "花蓮縣鳳林鎮" }, { "CodeNo": "976", "CodeName": "花蓮縣光復鄉" }, { "CodeNo": "977", "CodeName": "花蓮縣豐濱鄉" }, { "CodeNo": "978", "CodeName": "花蓮縣瑞穗鄉" }, { "CodeNo": "979", "CodeName": "花蓮縣萬榮鄉" }, { "CodeNo": "981", "CodeName": "花蓮縣玉里鎮" }, { "CodeNo": "982", "CodeName": "花蓮縣卓溪鄉" }, { "CodeNo": "983", "CodeName": "花蓮縣富里鄉" }, { "CodeNo": "AAA", "CodeName": "海外地址"}];
var zipToCity = {"100":{"City":"台北市"},"103":{"City":"台北市"},"104":{"City":"台北市"},"105":{"City":"台北市"},"106":{"City":"台北市"},"108":{"City":"台北市"},"110":{"City":"台北市"},"111":{"City":"台北市"},"112":{"City":"台北市"},"114":{"City":"台北市"},"115":{"City":"台北市"},"116":{"City":"台北市"},"200":{"City":"基隆市"},"201":{"City":"基隆市"},"202":{"City":"基隆市"},"203":{"City":"基隆市"},"204":{"City":"基隆市"},"205":{"City":"基隆市"},"206":{"City":"基隆市"},"207":{"City":"新北市"},"208":{"City":"新北市"},"209":{"City":"連江縣"},"210":{"City":"連江縣"},"211":{"City":"連江縣"},"212":{"City":"連江縣"},"220":{"City":"新北市"},"221":{"City":"新北市"},"222":{"City":"新北市"},"223":{"City":"新北市"},"224":{"City":"新北市"},"226":{"City":"新北市"},"227":{"City":"新北市"},"228":{"City":"新北市"},"231":{"City":"新北市"},"232":{"City":"新北市"},"233":{"City":"新北市"},"234":{"City":"新北市"},"235":{"City":"新北市"},"236":{"City":"新北市"},"237":{"City":"新北市"},"238":{"City":"新北市"},"239":{"City":"新北市"},"241":{"City":"新北市"},"242":{"City":"新北市"},"243":{"City":"新北市"},"244":{"City":"新北市"},"247":{"City":"新北市"},"248":{"City":"新北市"},"249":{"City":"新北市"},"251":{"City":"新北市"},"252":{"City":"新北市"},"253":{"City":"新北市"},"260":{"City":"宜蘭縣"},"261":{"City":"宜蘭縣"},"262":{"City":"宜蘭縣"},"263":{"City":"宜蘭縣"},"264":{"City":"宜蘭縣"},"265":{"City":"宜蘭縣"},"266":{"City":"宜蘭縣"},"267":{"City":"宜蘭縣"},"268":{"City":"宜蘭縣"},"269":{"City":"宜蘭縣"},"270":{"City":"宜蘭縣"},"272":{"City":"宜蘭縣"},"290":{"City":"釣魚台列嶼"},"300":{"City":"新竹市"},"302":{"City":"新竹縣"},"303":{"City":"新竹縣"},"304":{"City":"新竹縣"},"305":{"City":"新竹縣"},"306":{"City":"新竹縣"},"307":{"City":"新竹縣"},"308":{"City":"新竹縣"},"310":{"City":"新竹縣"},"311":{"City":"新竹縣"},"312":{"City":"新竹縣"},"313":{"City":"新竹縣"},"314":{"City":"新竹縣"},"315":{"City":"新竹縣"},"320":{"City":"桃園縣"},"324":{"City":"桃園縣"},"325":{"City":"桃園縣"},"326":{"City":"桃園縣"},"327":{"City":"桃園縣"},"328":{"City":"桃園縣"},"330":{"City":"桃園縣"},"333":{"City":"桃園縣"},"334":{"City":"桃園縣"},"335":{"City":"桃園縣"},"336":{"City":"桃園縣"},"337":{"City":"桃園縣"},"338":{"City":"桃園縣"},"350":{"City":"苗栗縣"},"351":{"City":"苗栗縣"},"352":{"City":"苗栗縣"},"353":{"City":"苗栗縣"},"354":{"City":"苗栗縣"},"356":{"City":"苗栗縣"},"357":{"City":"苗栗縣"},"358":{"City":"苗栗縣"},"360":{"City":"苗栗縣"},"361":{"City":"苗栗縣"},"362":{"City":"苗栗縣"},"363":{"City":"苗栗縣"},"364":{"City":"苗栗縣"},"365":{"City":"苗栗縣"},"366":{"City":"苗栗縣"},"367":{"City":"苗栗縣"},"368":{"City":"苗栗縣"},"369":{"City":"苗栗縣"},"400":{"City":"台中市"},"401":{"City":"台中市"},"402":{"City":"台中市"},"403":{"City":"台中市"},"404":{"City":"台中市"},"406":{"City":"台中市"},"407":{"City":"台中市"},"408":{"City":"台中市"},"411":{"City":"台中市"},"412":{"City":"台中市"},"413":{"City":"台中市"},"414":{"City":"台中市"},"420":{"City":"台中市"},"421":{"City":"台中市"},"422":{"City":"台中市"},"423":{"City":"台中市"},"424":{"City":"台中市"},"426":{"City":"台中市"},"427":{"City":"台中市"},"428":{"City":"台中市"},"429":{"City":"台中市"},"432":{"City":"台中市"},"433":{"City":"台中市"},"434":{"City":"台中市"},"435":{"City":"台中市"},"436":{"City":"台中市"},"437":{"City":"台中市"},"438":{"City":"台中市"},"439":{"City":"台中市"},"500":{"City":"彰化縣"},"502":{"City":"彰化縣"},"503":{"City":"彰化縣"},"504":{"City":"彰化縣"},"505":{"City":"彰化縣"},"506":{"City":"彰化縣"},"507":{"City":"彰化縣"},"508":{"City":"彰化縣"},"509":{"City":"彰化縣"},"510":{"City":"彰化縣"},"511":{"City":"彰化縣"},"512":{"City":"彰化縣"},"513":{"City":"彰化縣"},"514":{"City":"彰化縣"},"515":{"City":"彰化縣"},"516":{"City":"彰化縣"},"520":{"City":"彰化縣"},"521":{"City":"彰化縣"},"522":{"City":"彰化縣"},"523":{"City":"彰化縣"},"524":{"City":"彰化縣"},"525":{"City":"彰化縣"},"526":{"City":"彰化縣"},"527":{"City":"彰化縣"},"528":{"City":"彰化縣"},"530":{"City":"彰化縣"},"540":{"City":"南投縣"},"541":{"City":"南投縣"},"542":{"City":"南投縣"},"544":{"City":"南投縣"},"545":{"City":"南投縣"},"546":{"City":"南投縣"},"551":{"City":"南投縣"},"552":{"City":"南投縣"},"553":{"City":"南投縣"},"555":{"City":"南投縣"},"556":{"City":"南投縣"},"557":{"City":"南投縣"},"558":{"City":"南投縣"},"600":{"City":"嘉義市"},"602":{"City":"嘉義縣"},"603":{"City":"嘉義縣"},"604":{"City":"嘉義縣"},"605":{"City":"嘉義縣"},"606":{"City":"嘉義縣"},"607":{"City":"嘉義縣"},"608":{"City":"嘉義縣"},"611":{"City":"嘉義縣"},"612":{"City":"嘉義縣"},"613":{"City":"嘉義縣"},"614":{"City":"嘉義縣"},"615":{"City":"嘉義縣"},"616":{"City":"嘉義縣"},"621":{"City":"嘉義縣"},"622":{"City":"嘉義縣"},"623":{"City":"嘉義縣"},"624":{"City":"嘉義縣"},"625":{"City":"嘉義縣"},"630":{"City":"雲林縣"},"631":{"City":"雲林縣"},"632":{"City":"雲林縣"},"633":{"City":"雲林縣"},"634":{"City":"雲林縣"},"635":{"City":"雲林縣"},"636":{"City":"雲林縣"},"637":{"City":"雲林縣"},"638":{"City":"雲林縣"},"640":{"City":"雲林縣"},"643":{"City":"雲林縣"},"646":{"City":"雲林縣"},"647":{"City":"雲林縣"},"648":{"City":"雲林縣"},"649":{"City":"雲林縣"},"651":{"City":"雲林縣"},"652":{"City":"雲林縣"},"653":{"City":"雲林縣"},"654":{"City":"雲林縣"},"655":{"City":"雲林縣"},"700":{"City":"台南市"},"701":{"City":"台南市"},"702":{"City":"台南市"},"703":{"City":"台南市"},"704":{"City":"台南市"},"708":{"City":"台南市"},"709":{"City":"台南市"},"710":{"City":"台南市"},"711":{"City":"台南市"},"712":{"City":"台南市"},"713":{"City":"台南市"},"714":{"City":"台南市"},"715":{"City":"台南市"},"716":{"City":"台南市"},"717":{"City":"台南市"},"718":{"City":"台南市"},"719":{"City":"台南市"},"720":{"City":"台南市"},"721":{"City":"台南市"},"722":{"City":"台南市"},"723":{"City":"台南市"},"724":{"City":"台南市"},"725":{"City":"台南市"},"726":{"City":"台南市"},"727":{"City":"台南市"},"730":{"City":"台南市"},"731":{"City":"台南市"},"732":{"City":"台南市"},"733":{"City":"台南市"},"734":{"City":"台南市"},"735":{"City":"台南市"},"736":{"City":"台南市"},"737":{"City":"台南市"},"741":{"City":"台南市"},"742":{"City":"台南市"},"743":{"City":"台南市"},"744":{"City":"台南市"},"745":{"City":"台南市"},"800":{"City":"高雄市"},"801":{"City":"高雄市"},"802":{"City":"高雄市"},"803":{"City":"高雄市"},"804":{"City":"高雄市"},"805":{"City":"高雄市"},"806":{"City":"高雄市"},"807":{"City":"高雄市"},"811":{"City":"高雄市"},"812":{"City":"高雄市"},"813":{"City":"高雄市"},"814":{"City":"高雄市"},"815":{"City":"高雄市"},"817":{"City":"南海諸島東沙"},"819":{"City":"南海諸島南沙"},"820":{"City":"高雄市"},"821":{"City":"高雄市"},"822":{"City":"高雄市"},"823":{"City":"高雄市"},"824":{"City":"高雄市"},"825":{"City":"高雄市"},"826":{"City":"高雄市"},"827":{"City":"高雄市"},"828":{"City":"高雄市"},"829":{"City":"高雄市"},"830":{"City":"高雄市"},"831":{"City":"高雄市"},"832":{"City":"高雄市"},"833":{"City":"高雄市"},"840":{"City":"高雄市"},"842":{"City":"高雄市"},"843":{"City":"高雄市"},"844":{"City":"高雄市"},"845":{"City":"高雄市"},"846":{"City":"高雄市"},"847":{"City":"高雄市"},"848":{"City":"高雄市"},"849":{"City":"高雄縣"},"851":{"City":"高雄市"},"852":{"City":"高雄市"},"880":{"City":"澎湖縣"},"881":{"City":"澎湖縣"},"882":{"City":"澎湖縣"},"883":{"City":"澎湖縣"},"884":{"City":"澎湖縣"},"885":{"City":"澎湖縣"},"890":{"City":"金門縣"},"891":{"City":"金門縣"},"892":{"City":"金門縣"},"893":{"City":"金門縣"},"894":{"City":"金門縣"},"896":{"City":"金門縣"},"900":{"City":"屏東縣"},"901":{"City":"屏東縣"},"902":{"City":"屏東縣"},"903":{"City":"屏東縣"},"904":{"City":"屏東縣"},"905":{"City":"屏東縣"},"906":{"City":"屏東縣"},"907":{"City":"屏東縣"},"908":{"City":"屏東縣"},"909":{"City":"屏東縣"},"911":{"City":"屏東縣"},"912":{"City":"屏東縣"},"913":{"City":"屏東縣"},"920":{"City":"屏東縣"},"921":{"City":"屏東縣"},"922":{"City":"屏東縣"},"923":{"City":"屏東縣"},"924":{"City":"屏東縣"},"925":{"City":"屏東縣"},"926":{"City":"屏東縣"},"927":{"City":"屏東縣"},"928":{"City":"屏東縣"},"929":{"City":"屏東縣"},"931":{"City":"屏東縣"},"932":{"City":"屏東縣"},"940":{"City":"屏東縣"},"941":{"City":"屏東縣"},"942":{"City":"屏東縣"},"943":{"City":"屏東縣"},"944":{"City":"屏東縣"},"945":{"City":"屏東縣"},"946":{"City":"屏東縣"},"947":{"City":"屏東縣"},"950":{"City":"台東縣"},"951":{"City":"台東縣"},"952":{"City":"台東縣"},"953":{"City":"台東縣"},"954":{"City":"台東縣"},"955":{"City":"台東縣"},"956":{"City":"台東縣"},"957":{"City":"台東縣"},"958":{"City":"台東縣"},"959":{"City":"台東縣"},"961":{"City":"台東縣"},"962":{"City":"台東縣"},"963":{"City":"台東縣"},"964":{"City":"台東縣"},"965":{"City":"台東縣"},"966":{"City":"台東縣"},"970":{"City":"花蓮縣"},"971":{"City":"花蓮縣"},"972":{"City":"花蓮縣"},"973":{"City":"花蓮縣"},"974":{"City":"花蓮縣"},"975":{"City":"花蓮縣"},"976":{"City":"花蓮縣"},"977":{"City":"花蓮縣"},"978":{"City":"花蓮縣"},"979":{"City":"花蓮縣"},"981":{"City":"花蓮縣"},"982":{"City":"花蓮縣"},"983":{"City":"花蓮縣"},"AAA":{"City":"海外地"}};