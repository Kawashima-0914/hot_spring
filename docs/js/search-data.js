const searchData = [
  {
    name: "網走湖畔温泉",
    kana: "あばしりこはん",
    prefecture: "北海道",
    file: "spring_each/abashirikohanonsen_abashirikohan_hokkaidou.html"
  },
  {
    name: "油山温泉",
    kana: "ゆやま",
    prefecture: "静岡県",
    file: "spring_each/aburayamaonsen_yuyama_shizuoka.html"
  },
  {
    name: "あいのの温泉",
    kana: "あいのの",
    prefecture: "秋田県",
    file: "spring_each/ainonoonsen_ainono_akita.html"
  },
  {
    name: "相生の湯",
    kana: "あいおいのゆ",
    prefecture: "千葉県",
    file: "spring_each/aioinoyu_aioinoyu_chiba.html"
  },
  {
    name: "愛山渓温泉",
    kana: "あいざんけい",
    prefecture: "北海道",
    file: "spring_each/aizankeionsen_aizankei_hokkaidou.html"
  },
  {
    name: "会津東山温泉",
    kana: "あいづひがしやま",
    prefecture: "福島県",
    file: "spring_each/aizuhigashiyamaonsen_aizuhigashiyama_fukushima.html"
  },
  {
    name: "会津高原温泉",
    kana: "あいづこうげん",
    prefecture: "福島県",
    file: "spring_each/aizukougenonsen_aizukougen_fukushima.html"
  },
  {
    name: "会津神指温泉",
    kana: "あいづこうざし",
    prefecture: "福島県",
    file: "spring_each/aizukouzashionsen_aizukouzashi_fukushima.html"
  },
  {
    name: "鯵ヶ沢高原温泉",
    kana: "あじがさわこうげん",
    prefecture: "青森県",
    file: "spring_each/ajikesawakougenonsen_ajigasawakougen_aomori.html"
  },
  {
    name: "鰺ヶ沢温泉",
    kana: "あじがさわ",
    prefecture: "青森県",
    file: "spring_each/ajikesawaonsen_ajigasawa_aomori.html"
  },
  {
    name: "あじ温泉",
    kana: "あじ",
    prefecture: "香川県",
    file: "spring_each/ajionsen_aji_kagawa.html"
  },
  {
    name: "網代温泉",
    kana: "あじろ",
    prefecture: "静岡県",
    file: "spring_each/ajiroonsen_ajiro_shizuoka.html"
  },
  {
    name: "阿知須温泉",
    kana: "あじす",
    prefecture: "山口県",
    file: "spring_each/ajisuonsen_ajisu_yamaguchi.html"
  },
  {
    name: "赤川温泉",
    kana: "あかがわ",
    prefecture: "大分県",
    file: "spring_each/akagawaonsen_akagawa_ooita.html"
  },
  {
    name: "赤城高原温泉",
    kana: "あかぎこうげん",
    prefecture: "群馬県",
    file: "spring_each/akagikougenonsen_akagikougen_gunma.html"
  },
  {
    name: "赤城温泉",
    kana: "あかぎ",
    prefecture: "群馬県",
    file: "spring_each/akagionsen_akagi_gunma.html"
  },
  {
    name: "赤倉温泉",
    kana: "あかくら",
    prefecture: "新潟県",
    file: "spring_each/akakuraonsen_akakura_niigata.html"
  },
  {
    name: "赤水温泉",
    kana: "あかみず",
    prefecture: "熊本県",
    file: "spring_each/akamizuonsen_akamizu_kumamoto.html"
  },
  {
    name: "赤根温泉",
    kana: "あかね",
    prefecture: "大分県",
    file: "spring_each/akaneonsen_akane_ooita.html"
  },
  {
    name: "阿寒湖温泉",
    kana: "あかんこ",
    prefecture: "北海道",
    file: "spring_each/akanmizuumionsen_akanko_hokkaidou.html"
  },
  {
    name: "赤瀬温泉",
    kana: "あかせ",
    prefecture: "熊本県",
    file: "spring_each/akaseonsen_akase_kumamoto.html"
  },
  {
    name: "明石温泉",
    kana: "あかし",
    prefecture: "兵庫県",
    file: "spring_each/akashionsen_akashi_hyougo.html"
  },
  {
    name: "赤谷温泉",
    kana: "あかや",
    prefecture: "埼玉県",
    file: "spring_each/akayaonsen_akaya_saitama.html"
  },
  {
    name: "赤湯温泉",
    kana: "あかゆ",
    prefecture: "山形県",
    file: "spring_each/akayuonsen_akayu_yamagata.html"
  },
  {
    name: "赤沢温泉",
    kana: "あかざわ",
    prefecture: "静岡県",
    file: "spring_each/akazawaonsen_akazawa_shizuoka.html"
  },
  {
    name: "秋の宮温泉郷",
    kana: "あきのみや",
    prefecture: "秋田県",
    file: "spring_each/akinomiyaonsensato_akinomiya_akita.html"
  },
  {
    name: "秋田温泉",
    kana: "あきた",
    prefecture: "秋田県",
    file: "spring_each/akitaonsen_akita_akita.html"
  },
  {
    name: "秋山雛鶴の湯",
    kana: "あきやまひなつるのゆ",
    prefecture: "山梨県",
    file: "spring_each/akiyamahinatsurunoyu_akiyamahinatsurunoyu_yamanashi.html"
  },
  {
    name: "秋月温泉",
    kana: "あきづき",
    prefecture: "福岡県",
    file: "spring_each/akizukionsen_akizuki_fukuoka.html"
  },
  {
    name: "赤穂温泉",
    kana: "あこう",
    prefecture: "兵庫県",
    file: "spring_each/akouonsen_akou_hyougo.html"
  },
  {
    name: "阿久根温泉",
    kana: "あくね",
    prefecture: "鹿児島県",
    file: "spring_each/akuneonsen_akune_kakoshima.html"
  },
  {
    name: "秋保温泉",
    kana: "あきう",
    prefecture: "宮城県",
    file: "spring_each/akyuuonsen_akiu_miyagi.html"
  },
  {
    name: "天城船原温泉",
    kana: "あまぎふなばら",
    prefecture: "静岡県",
    file: "spring_each/amagifuneharaonsen_amagifunabara_shizuoka.html"
  },
  {
    name: "天城・持越温泉",
    kana: "あまぎ・もちこし",
    prefecture: "静岡県",
    file: "spring_each/amagimochikoshionsen_amagimochikoshi_shizuoka.html"
  },
  {
    name: "天城湯ヶ島温泉",
    kana: "あまぎゆがしま",
    prefecture: "静岡県",
    file: "spring_each/amagiyukeshimaonsen_amagiyugashima_shizuoka.html"
  },
  {
    name: "天草松島温泉",
    kana: "あまくさまつしま",
    prefecture: "熊本県",
    file: "spring_each/amakusamatsushimaonsen_amakusamatsushima_kumamoto.html"
  },
  {
    name: "天草温泉",
    kana: "あまくさ",
    prefecture: "熊本県",
    file: "spring_each/amakusaonsen_amakusa_kumamoto.html"
  },
  {
    name: "天草パール温泉",
    kana: "あまくさぱーる",
    prefecture: "熊本県",
    file: "spring_each/amakusapaaruonsen_amakusapaaru_kumamoto.html"
  },
  {
    name: "天草苓北町麟泉の湯",
    kana: "あまくされいほくまちりんせんのゆ",
    prefecture: "熊本県",
    file: "spring_each/amakusareihokumachirinizuminoyu_amakusareihokumachirinsennoyu_kumamoto.html"
  },
  {
    name: "天草下田温泉",
    kana: "あまくさしもだ",
    prefecture: "熊本県",
    file: "spring_each/amakusashimodaonsen_amakusashimoda_kumamoto.html"
  },
  {
    name: "天草柳港温泉",
    kana: "あまくさやなぎこう",
    prefecture: "熊本県",
    file: "spring_each/amakusayanagiminatoonsen_amakusayanagikou_kumamoto.html"
  },
  {
    name: "天草弓ヶ浜温泉",
    kana: "あまくさゆみがはま",
    prefecture: "熊本県",
    file: "spring_each/amakusayumikehamaonsen_amakusayumigahama_kumamoto.html"
  },
  {
    name: "天橋立・宮津温泉ピント湯",
    kana: "あまのはしだて・みやづぴんとゆ",
    prefecture: "京都府",
    file: "spring_each/amanohashidatemiyazuonsenpintoyu_amanohashidatemiyazupintoyu_kyoutofu.html"
  },
  {
    name: "天橋立・成相観音温泉",
    kana: "あまのはしだて・なりあいかんのん",
    prefecture: "京都府",
    file: "spring_each/amanohashidatenariaikannononsen_amanohashidatenariaikannon_kyoutofu.html"
  },
  {
    name: "天橋立温泉",
    kana: "あまのはしだて",
    prefecture: "京都府",
    file: "spring_each/amanohashidateonsen_amanohashidate_kyoutofu.html"
  },
  {
    name: "あまるべ温泉(香住)",
    kana: "あまるべ（かすみ）",
    prefecture: "兵庫県",
    file: "spring_each/amarubeonsen(kasumi)_1_hyougo.html"
  },
  {
    name: "天津小湊温泉",
    kana: "あまつこみなと",
    prefecture: "千葉県",
    file: "spring_each/amatsukominatoonsen_amatsukominato_chiba.html"
  },
  {
    name: "雨畑湖温泉",
    kana: "あめはたこ",
    prefecture: "山梨県",
    file: "spring_each/amehatakemizuumionsen_amehatako_yamanashi.html"
  },
  {
    name: "網張温泉",
    kana: "あみはり",
    prefecture: "岩手県",
    file: "spring_each/amiharionsen_amihari_iwate.html"
  },
  {
    name: "穴原温泉",
    kana: "あなばら",
    prefecture: "福島県",
    file: "spring_each/anaharaonsen_anabara_fukushima.html"
  },
  {
    name: "安楽温泉",
    kana: "新川渓谷温泉）（あんらく（しんかわけいこくきょう）",
    prefecture: "鹿児島県",
    file: "spring_each/anrakuonsen_1_kakoshima.html"
  },
  {
    name: "青羽根温泉",
    kana: "あおはね",
    prefecture: "静岡県",
    file: "spring_each/aobaneonsen_aohane_shizuoka.html"
  },
  {
    name: "青木鉱泉",
    kana: "あおきこうせん",
    prefecture: "山梨県",
    file: "spring_each/aokikousen_aokikousen_yamanashi.html"
  },
  {
    name: "青根温泉",
    kana: "あおね",
    prefecture: "宮城県",
    file: "spring_each/aoneonsen_aone_miyagi.html"
  },
  {
    name: "青荷温泉",
    kana: "あおに",
    prefecture: "青森県",
    file: "spring_each/aonionsen_aoni_aomori.html"
  },
  {
    name: "青島温泉",
    kana: "あおしま",
    prefecture: "宮崎県",
    file: "spring_each/aoshimaonsen_aoshima_miyazaki.html"
  },
  {
    name: "安比高原温泉郷",
    kana: "あっぴこうげん",
    prefecture: "岩手県",
    file: "spring_each/appikougenonsensato_appikougen_iwate.html"
  },
  {
    name: "安比温泉",
    kana: "あっぴ",
    prefecture: "岩手県",
    file: "spring_each/appionsen_appi_iwate.html"
  },
  {
    name: "荒尾温泉",
    kana: "あらお",
    prefecture: "熊本県",
    file: "spring_each/araoonsen_arao_kumamoto.html"
  },
  {
    name: "嵐山渓谷温泉",
    kana: "らんざんけいこく",
    prefecture: "埼玉県",
    file: "spring_each/arashiyamakeikokuonsen_ranzankeikoku_saitama.html"
  },
  {
    name: "嵐山温泉",
    kana: "あらしやま",
    prefecture: "京都府",
    file: "spring_each/arashiyamaonsen_arashiyama_kyoutofu.html"
  },
  {
    name: "嵐山嵯峨野温泉",
    kana: "あらしやまさがの",
    prefecture: "京都府",
    file: "spring_each/arashiyamasaganoonsen_arashiyamasagano_kyoutofu.html"
  },
  {
    name: "新湯温泉",
    kana: "しんゆ",
    prefecture: "鹿児島県",
    file: "spring_each/arayuonsen_shinyu_kakoshima.html"
  },
  {
    name: "新湯田中温泉",
    kana: "しんゆだなか",
    prefecture: "長野県",
    file: "spring_each/arayutanakaonsen_shinyudanaka_nagano.html"
  },
  {
    name: "有田温泉",
    kana: "ありた",
    prefecture: "佐賀県",
    file: "spring_each/aridaonsen_arita_saga.html"
  },
  {
    name: "有福温泉",
    kana: "ありふく",
    prefecture: "島根県",
    file: "spring_each/arifukuonsen_arifuku_shimane.html"
  },
  {
    name: "有馬温泉",
    kana: "ありま",
    prefecture: "兵庫県",
    file: "spring_each/arimaonsen_arima_hyougo.html"
  },
  {
    name: "有村温泉",
    kana: "ありむら",
    prefecture: "鹿児島県",
    file: "spring_each/arimuraonsen_arimura_kakoshima.html"
  },
  {
    name: "旭岳温泉",
    kana: "あさひだけ",
    prefecture: "北海道",
    file: "spring_each/asahidakeonsen_asahidake_hokkaidou.html"
  },
  {
    name: "旭川温泉",
    kana: "あさひかわ",
    prefecture: "北海道",
    file: "spring_each/asahikawaonsen_asahikawa_hokkaidou.html"
  },
  {
    name: "浅間隠温泉郷",
    kana: "あさまかくし",
    prefecture: "群馬県",
    file: "spring_each/asamainonsensato_asamakakushi_gunma.html"
  },
  {
    name: "浅間高原温泉",
    kana: "あさまこうげん",
    prefecture: "群馬県",
    file: "spring_each/asamakougenonsen_asamakougen_gunma.html"
  },
  {
    name: "浅間温泉",
    kana: "あさま",
    prefecture: "長野県",
    file: "spring_each/asamaonsen_asama_nagano.html"
  },
  {
    name: "浅茂川浦島温泉",
    kana: "あさもがわうらしま",
    prefecture: "京都府",
    file: "spring_each/asamogawaurashimaonsen_asamogawaurashima_kyoutofu.html"
  },
  {
    name: "浅虫温泉",
    kana: "あさむし",
    prefecture: "青森県",
    file: "spring_each/asamushionsen_asamushi_aomori.html"
  },
  {
    name: "朝里川温泉",
    kana: "あさりがわ",
    prefecture: "北海道",
    file: "spring_each/asasatokawaonsen_asarigawa_hokkaidou.html"
  },
  {
    name: "芦安温泉",
    kana: "あしやす",
    prefecture: "山梨県",
    file: "spring_each/ashianonsen_ashiyasu_yamanashi.html"
  },
  {
    name: "芦別温泉",
    kana: "あしべつ",
    prefecture: "北海道",
    file: "spring_each/ashibetsuonsen_ashibetsu_hokkaidou.html"
  },
  {
    name: "あしがらの温泉",
    kana: "あしがらの",
    prefecture: "神奈川県",
    file: "spring_each/ashigaranoonsen_ashigarano_kanagawa.html"
  },
  {
    name: "芦ノ牧温泉",
    kana: "あしのまき",
    prefecture: "福島県",
    file: "spring_each/ashinomakionsen_ashinomaki_fukushima.html"
  },
  {
    name: "芦ノ湖温泉",
    kana: "あしのこ",
    prefecture: "神奈川県",
    file: "spring_each/ashinomizuumionsen_ashinoko_kanagawa.html"
  },
  {
    name: "芦野温泉",
    kana: "あしの",
    prefecture: "栃木県",
    file: "spring_each/ashinoonsen_ashino_tochigi.html"
  },
  {
    name: "あしずり温泉郷",
    kana: "あしずり",
    prefecture: "高知県",
    file: "spring_each/ashizurionsensato_ashizuri_kouchi.html"
  },
  {
    name: "阿蘇火の山温泉",
    kana: "あそひのやま",
    prefecture: "熊本県",
    file: "spring_each/asohinoyamaonsen_asohinoyama_kumamoto.html"
  },
  {
    name: "阿蘇温泉",
    kana: "あそ",
    prefecture: "熊本県",
    file: "spring_each/asoonsen_aso_kumamoto.html"
  },
  {
    name: "阿蘇白水温泉",
    kana: "あそはくすい",
    prefecture: "熊本県",
    file: "spring_each/asoshirouzuonsen_asohakusui_kumamoto.html"
  },
  {
    name: "阿蘇高森温泉",
    kana: "阿蘇温泉郷）（あそたかもり（あそ）",
    prefecture: "熊本県",
    file: "spring_each/asotakamorionsen_1_kumamoto.html"
  },
  {
    name: "阿蘇内牧温泉",
    kana: "あそうちのまき",
    prefecture: "熊本県",
    file: "spring_each/asouchimakionsen_asouchinomaki_kumamoto.html"
  },
  {
    name: "麻生釣温泉",
    kana: "阿蘇鶴温泉）（あそづる",
    prefecture: "熊本県",
    file: "spring_each/asoutsurionsen_1_kumamoto.html"
  },
  {
    name: "熱川温泉",
    kana: "あたがわ",
    prefecture: "静岡県",
    file: "spring_each/atagawaonsen_atagawa_shizuoka.html"
  },
  {
    name: "熱海伊豆山温泉",
    kana: "あたみいずさん",
    prefecture: "静岡県",
    file: "spring_each/atamiizuyamaonsen_atamiizusan_shizuoka.html"
  },
  {
    name: "熱海温泉",
    kana: "あたみ",
    prefecture: "静岡県",
    file: "spring_each/atamionsen_atami_shizuoka.html"
  },
  {
    name: "新鹿沢温泉",
    kana: "しんかざわ",
    prefecture: "群馬県",
    file: "spring_each/atashikasawaonsen_shinkazawa_gunma.html"
  },
  {
    name: "左沢温泉",
    kana: "あてらさわ",
    prefecture: "山形県",
    file: "spring_each/aterazawaonsen_aterasawa_yamagata.html"
  },
  {
    name: "あつぎ飯山温泉",
    kana: "あつぎいいやま",
    prefecture: "神奈川県",
    file: "spring_each/atsugiiiyamaonsen_atsugiiiyama_kanagawa.html"
  },
  {
    name: "温海温泉,あつみ温泉",
    kana: "あつみ",
    prefecture: "山形県",
    file: "spring_each/atsumionsen,atsumionsen_atsumi_yamagata.html"
  },
  {
    name: "淡路島・南淡路温泉郷",
    kana: "あわじしま・みなみあわじ",
    prefecture: "兵庫県",
    file: "spring_each/awajishimanandanroonsenkyou_awajishimaminamiawaji_hyougo.html"
  },
  {
    name: "淡路島・洲本温泉",
    kana: "あわじしま・すもと",
    prefecture: "兵庫県",
    file: "spring_each/awajishimasumotoonsen_awajishimasumoto_hyougo.html"
  },
  {
    name: "淡路島うずしお温泉",
    kana: "あわじしまうずしお",
    prefecture: "兵庫県",
    file: "spring_each/awajishimauzushioonsen_awajishimauzushio_hyougo.html"
  },
  {
    name: "泡の湯温泉",
    kana: "あわのゆ",
    prefecture: "山形県",
    file: "spring_each/awanoyuonizumi_awanoyu_yamagata.html"
  },
  {
    name: "あわら温泉",
    kana: "芦原温泉）（あわら",
    prefecture: "福井県",
    file: "spring_each/awaraonsen_1_fukui.html"
  },
  {
    name: "粟津温泉",
    kana: "あわづ",
    prefecture: "石川県",
    file: "spring_each/awazuonsen_awazu_ishikawa.html"
  },
  {
    name: "綾部・福知山温泉",
    kana: "あやべふくちやま",
    prefecture: "京都府",
    file: "spring_each/ayabefukuchiyamaonsen_ayabefukuchiyama_kyoutofu.html"
  },
  {
    name: "畔地温泉",
    kana: "あぜち",
    prefecture: "新潟県",
    file: "spring_each/azechionizumi_azechi_niigata.html"
  },
  {
    name: "小豆温泉",
    kana: "あずき",
    prefecture: "福島県",
    file: "spring_each/azukionsen_azuki_fukushima.html"
  },
  {
    name: "吾妻峡温泉",
    kana: "あがつまきょう",
    prefecture: "群馬県",
    file: "spring_each/azumakyouonsen_agatsumakyou_gunma.html"
  },
  {
    name: "あづまね温泉",
    kana: "あづまね",
    prefecture: "岩手県",
    file: "spring_each/azumaneonsen_azumane_iwate.html"
  },
  {
    name: "あずまや温泉",
    kana: "あずまや",
    prefecture: "長野県",
    file: "spring_each/azumayaonsen_azumaya_nagano.html"
  },
  {
    name: "安曇野みさと温泉",
    kana: "あずみのみさとおんんせん",
    prefecture: "長野県",
    file: "spring_each/azuminomisatoonsen_azuminomisatoonnsen_nagano.html"
  },
  {
    name: "馬場の湯温泉",
    kana: "ばばのゆ",
    prefecture: "福島県",
    file: "spring_each/babanoyuonizumi_babanoyu_fukushima.html"
  },
  {
    name: "磐梯熱海温泉",
    kana: "ばんだいあたみ",
    prefecture: "福島県",
    file: "spring_each/bandaiatamionsen_bandaiatami_fukushima.html"
  },
  {
    name: "磐梯猪苗代はやま温泉",
    kana: "ばんだいいなわしろはやま",
    prefecture: "福島県",
    file: "spring_each/bandaiinawashirohayamaonsen_bandaiinawashirohayama_fukushima.html"
  },
  {
    name: "磐梯宝温泉",
    kana: "ばんだいたから",
    prefecture: "福島県",
    file: "spring_each/bandaitakaraonsen_bandaitakara_fukushima.html"
  },
  {
    name: "芭蕉月待ちの湯",
    kana: "ばしょうつきまちのゆ",
    prefecture: "山梨県",
    file: "spring_each/bashoutsukimachichinoyu_bashoutsukimachinoyu_yamanashi.html"
  },
  {
    name: "べふ峡温泉",
    kana: "べふきょう",
    prefecture: "高知県",
    file: "spring_each/befukyouonsen_befukyou_kouchi.html"
  },
  {
    name: "弁天島温泉",
    kana: "べんてんじま",
    prefecture: "静岡県",
    file: "spring_each/bentenshimaonsen_bentenjima_shizuoka.html"
  },
  {
    name: "別府温泉郷",
    kana: "べっぷ",
    prefecture: "大分県",
    file: "spring_each/beppuonsensato_beppu_ooita.html"
  },
  {
    name: "別所温泉",
    kana: "神奈川県）（べっしょ",
    prefecture: "神奈川県",
    file: "spring_each/besshoonsen_1_kanagawa.html"
  },
  {
    name: "別所温泉",
    kana: "べっしょ",
    prefecture: "長野県",
    file: "spring_each/besshoonsen_bessho_nagano.html"
  },
  {
    name: "美唄温泉",
    kana: "びばい",
    prefecture: "北海道",
    file: "spring_each/bibaionsen_bibai_hokkaidou.html"
  },
  {
    name: "美又温泉",
    kana: "みまた",
    prefecture: "島根県",
    file: "spring_each/bimataonsen_mimata_shimane.html"
  },
  {
    name: "美留和温泉",
    kana: "びるわ",
    prefecture: "北海道",
    file: "spring_each/biruwaonsen_biruwa_hokkaidou.html"
  },
  {
    name: "びわ湖おごと温泉",
    kana: "びわこおごと",
    prefecture: "滋賀県",
    file: "spring_each/biwamizuumiogotoonsen_biwakoogoto_shiga.html"
  },
  {
    name: "渤海温泉",
    kana: "ぼっかい",
    prefecture: "石川県",
    file: "spring_each/bokkaionsen_bokkai_ishikawa.html"
  },
  {
    name: "坊中温泉",
    kana: "ぼうちゅう",
    prefecture: "熊本県",
    file: "spring_each/bouchuuonsen_bouchuu_kumamoto.html"
  },
  {
    name: "房総白浜温泉",
    kana: "ぼうそうしらはま",
    prefecture: "千葉県",
    file: "spring_each/bousoushirahamaonsen_bousoushirahama_chiba.html"
  },
  {
    name: "武尊温泉",
    kana: "ほだか",
    prefecture: "群馬県",
    file: "spring_each/busononsen_hodaka_gunma.html"
  },
  {
    name: "秩父・西谷津温泉",
    kana: "ちちぶ・にしやつ",
    prefecture: "埼玉県",
    file: "spring_each/chichibunishitanitsuonsen_chichibunishiyatsu_saitama.html"
  },
  {
    name: "秩父・四季彩乃湯温泉",
    kana: "ちちぶ・しきさいのゆ",
    prefecture: "埼玉県",
    file: "spring_each/chichibushikiayanoyuonizumi_chichibushikisainoyu_saitama.html"
  },
  {
    name: "秩父高篠鉱泉郷",
    kana: "ちちぶたかしのこうせんきょう",
    prefecture: "埼玉県",
    file: "spring_each/chichibutakashinokousensato_chichibutakashinokousenkyou_saitama.html"
  },
  {
    name: "千頭温泉",
    kana: "せんず",
    prefecture: "静岡県",
    file: "spring_each/chikamionsen_senzu_shizuoka.html"
  },
  {
    name: "筑後川温泉",
    kana: "ちくごがわ",
    prefecture: "福岡県",
    file: "spring_each/chikugokawaonsen_chikugogawa_fukuoka.html"
  },
  {
    name: "千倉海岸温泉",
    kana: "ちくらかいがん",
    prefecture: "千葉県",
    file: "spring_each/chikurakaiganonsen_chikurakaigan_chiba.html"
  },
  {
    name: "千倉海底温泉",
    kana: "ちくらかいてい",
    prefecture: "千葉県",
    file: "spring_each/chikurakaiteionsen_chikurakaitei_chiba.html"
  },
  {
    name: "千倉元湯温泉",
    kana: "ちくらゆもと",
    prefecture: "千葉県",
    file: "spring_each/chikuramotoyuonsen_chikurayumoto_chiba.html"
  },
  {
    name: "千倉瀬戸浜温泉",
    kana: "ちくらせとはま",
    prefecture: "千葉県",
    file: "spring_each/chikurasetohamaonsen_chikurasetohama_chiba.html"
  },
  {
    name: "千里浜やわらぎ温泉",
    kana: "ちりはまやわらぎ",
    prefecture: "石川県",
    file: "spring_each/chirihamayawaragionsen_chirihamayawaragi_ishikawa.html"
  },
  {
    name: "長者原温泉",
    kana: "ちょうじゃばる",
    prefecture: "大分県",
    file: "spring_each/choujagaharaonsen_choujabaru_ooita.html"
  },
  {
    name: "鳥海温泉",
    kana: "ちょうかい",
    prefecture: "山形県",
    file: "spring_each/choukaionsen_choukai_yamagata.html"
  },
  {
    name: "長生温泉",
    kana: "ちょうせい",
    prefecture: "千葉県",
    file: "spring_each/chouseionsen_chousei_chiba.html"
  },
  {
    name: "忠治温泉",
    kana: "ちゅうじ",
    prefecture: "群馬県",
    file: "spring_each/chuujionsen_chuuji_gunma.html"
  },
  {
    name: "中禅寺温泉",
    kana: "ちゅうぜんじ",
    prefecture: "栃木県",
    file: "spring_each/chuuzenjionsen_chuuzenji_tochigi.html"
  },
  {
    name: "大神温泉",
    kana: "おおがみ",
    prefecture: "大分県",
    file: "spring_each/daijinonsen_oogami_ooita.html"
  },
  {
    name: "大牧温泉",
    kana: "おおまき",
    prefecture: "富山県",
    file: "spring_each/daimakionsen_oomaki_toyama.html"
  },
  {
    name: "台温泉",
    kana: "花巻温泉郷）（だい（はなまき）",
    prefecture: "岩手県",
    file: "spring_each/daionsen_1_iwate.html"
  },
  {
    name: "濁河温泉",
    kana: "にごりご",
    prefecture: "岐阜県",
    file: "spring_each/dakukawaonsen_nigorigo_gifu.html"
  },
  {
    name: "鈍川温泉",
    kana: "にぶかわ",
    prefecture: "愛媛県",
    file: "spring_each/donkawaonsen_nibukawa_ehime.html"
  },
  {
    name: "殿湯温泉",
    kana: "とのゆ",
    prefecture: "鹿児島県",
    file: "spring_each/donoyuonizumi_tonoyu_kakoshima.html"
  },
  {
    name: "道後温泉",
    kana: "どうご",
    prefecture: "愛媛県",
    file: "spring_each/dougoonsen_dougo_ehime.html"
  },
  {
    name: "洞川温泉",
    kana: "どろがわ",
    prefecture: "奈良県",
    file: "spring_each/doukawaonsen_dorogawa_nara.html"
  },
  {
    name: "堂ヶ島温泉",
    kana: "どうがしま",
    prefecture: "静岡県",
    file: "spring_each/doukeshimaonsen_dougashima_shizuoka.html"
  },
  {
    name: "道志の湯温泉",
    kana: "どうしのゆ",
    prefecture: "山梨県",
    file: "spring_each/doushinoyuonizumi_doushinoyu_yamanashi.html"
  },
  {
    name: "えびの高原温泉",
    kana: "えびのこうげん",
    prefecture: "宮崎県",
    file: "spring_each/ebinokougenonsen_ebinokougen_miyazaki.html"
  },
  {
    name: "烏帽子岩温泉",
    kana: "えぼしいわ",
    prefecture: "大分県",
    file: "spring_each/eboshiiwaonsen_eboshiiwa_ooita.html"
  },
  {
    name: "越後中里温泉",
    kana: "えちごなかざと",
    prefecture: "新潟県",
    file: "spring_each/echigonakazatoonsen_echigonakazato_niigata.html"
  },
  {
    name: "越後湯沢温泉",
    kana: "えちごゆざわ",
    prefecture: "新潟県",
    file: "spring_each/echigoyuzawaonsen_echigoyuzawa_niigata.html"
  },
  {
    name: "越前町糸生温泉",
    kana: "えちぜんちょういとう",
    prefecture: "福井県",
    file: "spring_each/echizenmachiitoseionizumi_echizenchouitou_fukui.html"
  },
  {
    name: "越前南部温泉",
    kana: "えちぜんなんぶ",
    prefecture: "福井県",
    file: "spring_each/echizennanbuonsen_echizennanbu_fukui.html"
  },
  {
    name: "永源寺温泉",
    kana: "えいげんじ",
    prefecture: "滋賀県",
    file: "spring_each/eigenjionsen_eigenji_shiga.html"
  },
  {
    name: "恵那峡温泉",
    kana: "えなきょう",
    prefecture: "岐阜県",
    file: "spring_each/enakyouonsen_enakyou_gifu.html"
  },
  {
    name: "塩山温泉",
    kana: "えんざん",
    prefecture: "山梨県",
    file: "spring_each/enzanonsen_enzan_yamanashi.html"
  },
  {
    name: "恵山温泉郷",
    kana: "えさん",
    prefecture: "北海道",
    file: "spring_each/esanonsensato_esan_hokkaidou.html"
  },
  {
    name: "枝幸温泉",
    kana: "えさし",
    prefecture: "北海道",
    file: "spring_each/esashionsen_esashi_hokkaidou.html"
  },
  {
    name: "越中となみ野温泉",
    kana: "えっちゅうとなみの",
    prefecture: "富山県",
    file: "spring_each/etchuutonaminoonsen_etchuutonamino_toyama.html"
  },
  {
    name: "越中つるぎ温泉",
    kana: "えっちゅうつるぎ",
    prefecture: "富山県",
    file: "spring_each/etchuutsurugionsen_etchuutsurugi_toyama.html"
  },
  {
    name: "富士青木ヶ原樹海温泉",
    kana: "ふじあおきがはらじゅかい",
    prefecture: "山梨県",
    file: "spring_each/fujiaokikegenjuumionsen_fujiaokigaharajukai_yamanashi.html"
  },
  {
    name: "富士見温泉見晴らしの湯",
    kana: "ふじみみはらしのゆ",
    prefecture: "群馬県",
    file: "spring_each/fujimionsenmiharashinoyu_fujimimiharashinoyu_gunma.html"
  },
  {
    name: "藤岡温泉",
    kana: "ふじおか",
    prefecture: "群馬県",
    file: "spring_each/fujiokaonsen_fujioka_gunma.html"
  },
  {
    name: "富士西湖温泉",
    kana: "ふじさいこ",
    prefecture: "山梨県",
    file: "spring_each/fujisaikoonsen_fujisaiko_yamanashi.html"
  },
  {
    name: "富士田貫湖温泉",
    kana: "ふじたぬきこ",
    prefecture: "静岡県",
    file: "spring_each/fujitakanmizuumionsen_fujitanukiko_shizuoka.html"
  },
  {
    name: "ふじやま温泉",
    kana: "ふじやま",
    prefecture: "山梨県",
    file: "spring_each/fujiyamaonsen_fujiyama_yamanashi.html"
  },
  {
    name: "深沢温泉",
    kana: "山梨県）（ふかさわ",
    prefecture: "山梨県",
    file: "spring_each/fukazawaonsen_1_yamanashi.html"
  },
  {
    name: "吹上温泉",
    kana: "鹿児島県）（ふきあげ",
    prefecture: "鹿児島県",
    file: "spring_each/fukiageonsen_1_kakoshima.html"
  },
  {
    name: "福光アローザ温泉",
    kana: "ふくみつあろーざ",
    prefecture: "富山県",
    file: "spring_each/fukumitsuaroozaonsen_fukumitsuarooza_toyama.html"
  },
  {
    name: "伏尾温泉",
    kana: "ふしお",
    prefecture: "大阪府",
    file: "spring_each/fukuoonsen_fushio_oosakafu.html"
  },
  {
    name: "袋田温泉",
    kana: "ふくろだ",
    prefecture: "茨城県",
    file: "spring_each/fukurodaonsen_fukuroda_ibaraki.html"
  },
  {
    name: "富良野温泉",
    kana: "ふらの",
    prefecture: "北海道",
    file: "spring_each/furanoonsen_furano_hokkaidou.html"
  },
  {
    name: "富良野島の下温泉",
    kana: "ふらのしまのした",
    prefecture: "北海道",
    file: "spring_each/furanoshimanoshitaonsen_furanoshimanoshita_hokkaidou.html"
  },
  {
    name: "古里温泉",
    kana: "ふるさと",
    prefecture: "鹿児島県",
    file: "spring_each/furusatoonsen_furusato_kakoshima.html"
  },
  {
    name: "浮島温泉",
    kana: "ふとう",
    prefecture: "静岡県",
    file: "spring_each/fushimaonsen_futou_shizuoka.html"
  },
  {
    name: "伏見温泉",
    kana: "ふしみ",
    prefecture: "北海道",
    file: "spring_each/fushimionsen_fushimi_hokkaidou.html"
  },
  {
    name: "二股ラジウム温泉",
    kana: "ふたまたらじうむ",
    prefecture: "北海道",
    file: "spring_each/futamatarajiumuonsen_futamatarajiumu_hokkaidou.html"
  },
  {
    name: "二見温泉",
    kana: "ふたみ",
    prefecture: "三重県",
    file: "spring_each/futamionsen_futami_mie.html"
  },
  {
    name: "二日市温泉",
    kana: "ふつかいち",
    prefecture: "福岡県",
    file: "spring_each/futsukaichionsen_futsukaichi_fukuoka.html"
  },
  {
    name: "浮山温泉",
    kana: "うきやま",
    prefecture: "静岡県",
    file: "spring_each/fuyamaonsen_ukiyama_shizuoka.html"
  },
  {
    name: "岳の湯温泉",
    kana: "熊本県）（たけのゆ",
    prefecture: "熊本県",
    file: "spring_each/gakunoyuonizumi_1_kumamoto.html"
  },
  {
    name: "岳温泉",
    kana: "だけ",
    prefecture: "福島県",
    file: "spring_each/gakuonsen_dake_fukushima.html"
  },
  {
    name: "蒲郡温泉",
    kana: "がまごおり",
    prefecture: "愛知県",
    file: "spring_each/gamagoorionsen_gamagoori_aichi.html"
  },
  {
    name: "がまの湯温泉",
    kana: "がまのゆ",
    prefecture: "山形県",
    file: "spring_each/gamanoyuonizumi_gamanoyu_yamagata.html"
  },
  {
    name: "俄虫温泉",
    kana: "がむし",
    prefecture: "北海道",
    file: "spring_each/gamushionsen_gamushi_hokkaidou.html"
  },
  {
    name: "月ヶ瀬温泉",
    kana: "つきがせ",
    prefecture: "静岡県",
    file: "spring_each/gatsukeseonsen_tsukigase_shizuoka.html"
  },
  {
    name: "月の湯温泉",
    kana: "つきのゆ",
    prefecture: "静岡県",
    file: "spring_each/gatsunoyuonizumi_tsukinoyu_shizuoka.html"
  },
  {
    name: "鯨波松島温泉",
    kana: "くじらなみまつしま",
    prefecture: "新潟県",
    file: "spring_each/geihamatsushimaonsen_kujiranamimatsushima_niigata.html"
  },
  {
    name: "厳美渓温泉",
    kana: "げんびけい",
    prefecture: "岩手県",
    file: "spring_each/genbikeionsen_genbikei_iwate.html"
  },
  {
    name: "玄海さつき温泉",
    kana: "げんかいさつき",
    prefecture: "福岡県",
    file: "spring_each/genkaisatsukionsen_genkaisatsuki_fukuoka.html"
  },
  {
    name: "下呂温泉",
    kana: "げろ",
    prefecture: "岐阜県",
    file: "spring_each/geroonsen_gero_gifu.html"
  },
  {
    name: "月川温泉",
    kana: "つきかわ",
    prefecture: "長野県",
    file: "spring_each/gessenonsen_tsukikawa_nagano.html"
  },
  {
    name: "銀山温泉",
    kana: "ぎんざん",
    prefecture: "山形県",
    file: "spring_each/ginzanonsen_ginzan_yamagata.html"
  },
  {
    name: "五條リバーサイド温泉",
    kana: "ごじょうりばーさいど",
    prefecture: "奈良県",
    file: "spring_each/gojouribaasaidoonsen_gojouribaasaido_nara.html"
  },
  {
    name: "五十沢温泉",
    kana: "いかざわ",
    prefecture: "新潟県",
    file: "spring_each/gojuusawaonsen_ikazawa_niigata.html"
  },
  {
    name: "五色温泉",
    kana: "福島県）（ごしき",
    prefecture: "福島県",
    file: "spring_each/goshikionsen_1_fukushima.html"
  },
  {
    name: "五色温泉",
    kana: "北海道）（ごしき",
    prefecture: "北海道",
    file: "spring_each/goshikionsen_1_hokkaidou.html"
  },
  {
    name: "後生掛温泉",
    kana: "ごしょうがけ",
    prefecture: "秋田県",
    file: "spring_each/goshougakeonsen_goshougake_akita.html"
  },
  {
    name: "御殿場東田中温泉",
    kana: "ごてんばひがしたなか",
    prefecture: "静岡県",
    file: "spring_each/gotenbahigashidachuuonizumi_gotenbahigashitanaka_shizuoka.html"
  },
  {
    name: "御殿場高原温泉",
    kana: "ごてんばこうげん",
    prefecture: "静岡県",
    file: "spring_each/gotenbakougenonsen_gotenbakougen_shizuoka.html"
  },
  {
    name: "御殿場乙女温泉乙女2号泉",
    kana: "ごてんばおとめおとめにごうせん",
    prefecture: "静岡県",
    file: "spring_each/gotenbaotomeonsenotome2gouizumi_gotenbaotomeotomenigousen_shizuoka.html"
  },
  {
    name: "碁点温泉",
    kana: "ごてん",
    prefecture: "山形県",
    file: "spring_each/gotenonsen_goten_yamagata.html"
  },
  {
    name: "合志温泉",
    kana: "こうし",
    prefecture: "熊本県",
    file: "spring_each/goushionsen_koushi_kumamoto.html"
  },
  {
    name: "ハチ北温泉",
    kana: "はちきた",
    prefecture: "兵庫県",
    file: "spring_each/hachikitaonsen_hachikita_hyougo.html"
  },
  {
    name: "八幡ひまわり温泉",
    kana: "やはたひまわり",
    prefecture: "福岡県",
    file: "spring_each/hachimanhimawarionsen_yahatahimawari_fukuoka.html"
  },
  {
    name: "八幡温泉",
    kana: "やはた",
    prefecture: "福岡県",
    file: "spring_each/hachimanonsen_yahata_fukuoka.html"
  },
  {
    name: "八幡平温泉郷",
    kana: "はちまんたい",
    prefecture: "岩手県",
    file: "spring_each/hachimantaionsensato_hachimantai_iwate.html"
  },
  {
    name: "八面山金色温泉",
    kana: "はちめんざんかないろ",
    prefecture: "大分県",
    file: "spring_each/hachimenyamakiniroonsen_hachimenzankanairo_ooita.html"
  },
  {
    name: "波賀東山温泉",
    kana: "はがひがしやま",
    prefecture: "兵庫県",
    file: "spring_each/hagahigashiyamaonsen_hagahigashiyama_hyougo.html"
  },
  {
    name: "波賀温泉",
    kana: "はが",
    prefecture: "兵庫県",
    file: "spring_each/hagaonsen_haga_hyougo.html"
  },
  {
    name: "はげの湯温泉",
    kana: "はげのゆ",
    prefecture: "熊本県",
    file: "spring_each/hagenoyuonizumi_hagenoyu_kumamoto.html"
  },
  {
    name: "萩阿武川温泉",
    kana: "はぎあぶがわ",
    prefecture: "山口県",
    file: "spring_each/hagiabukawaonsen_hagiabugawa_yamaguchi.html"
  },
  {
    name: "はぎ温泉",
    kana: "はぎ",
    prefecture: "山口県",
    file: "spring_each/hagionsen_hagi_yamaguchi.html"
  },
  {
    name: "萩温泉郷",
    kana: "はぎ",
    prefecture: "山口県",
    file: "spring_each/hagionsensato_hagi_yamaguchi.html"
  },
  {
    name: "母畑温泉",
    kana: "ぼばた",
    prefecture: "福島県",
    file: "spring_each/hahahatakeonsen_bobata_fukushima.html"
  },
  {
    name: "盃温泉郷",
    kana: "さかずき",
    prefecture: "北海道",
    file: "spring_each/haionsensato_sakazuki_hokkaidou.html"
  },
  {
    name: "函館温泉",
    kana: "はこだて",
    prefecture: "北海道",
    file: "spring_each/hakodateonsen_hakodate_hokkaidou.html"
  },
  {
    name: "箱根芦ノ湯温泉",
    kana: "はこねあしのゆ",
    prefecture: "神奈川県",
    file: "spring_each/hakoneashinoyuonizumi_hakoneashinoyu_kanagawa.html"
  },
  {
    name: "箱根強羅温泉",
    kana: "はこねごうら",
    prefecture: "神奈川県",
    file: "spring_each/hakonegouraonsen_hakonegoura_kanagawa.html"
  },
  {
    name: "箱根大平台温泉",
    kana: "はこねおおひらだい",
    prefecture: "神奈川県",
    file: "spring_each/hakoneoohiradaionsen_hakoneoohiradai_kanagawa.html"
  },
  {
    name: "箱根大涌谷温泉",
    kana: "はこねおおわくだに",
    prefecture: "神奈川県",
    file: "spring_each/hakoneoowakudanionsen_hakoneoowakudani_kanagawa.html"
  },
  {
    name: "箱根仙石原温泉",
    kana: "はこねせんごくばら",
    prefecture: "神奈川県",
    file: "spring_each/hakonesengokuharaonsen_hakonesengokubara_kanagawa.html"
  },
  {
    name: "箱根仙石原俵石温泉",
    kana: "はこねせんごくはらひょうせき",
    prefecture: "神奈川県",
    file: "spring_each/hakonesengokuharatawaraishionsen_hakonesengokuharahyouseki_kanagawa.html"
  },
  {
    name: "箱根峠温泉",
    kana: "はこねとうげ",
    prefecture: "静岡県",
    file: "spring_each/hakonetougeonsen_hakonetouge_shizuoka.html"
  },
  {
    name: "箱根湯本温泉",
    kana: "はこねゆもと",
    prefecture: "神奈川県",
    file: "spring_each/hakoneyumotoonsen_hakoneyumoto_kanagawa.html"
  },
  {
    name: "白馬八方温泉",
    kana: "はくばはっぽう",
    prefecture: "長野県",
    file: "spring_each/hakubahappouonsen_hakubahappou_nagano.html"
  },
  {
    name: "白馬姫川温泉",
    kana: "はくばひめかわ",
    prefecture: "長野県",
    file: "spring_each/hakubahimegawaonsen_hakubahimekawa_nagano.html"
  },
  {
    name: "白馬かたくり温泉",
    kana: "はくばかたくり",
    prefecture: "長野県",
    file: "spring_each/hakubakatakurionsen_hakubakatakuri_nagano.html"
  },
  {
    name: "白馬乗鞍温泉",
    kana: "はくばのりくら",
    prefecture: "長野県",
    file: "spring_each/hakubanorikuraonsen_hakubanorikura_nagano.html"
  },
  {
    name: "白馬龍神温泉",
    kana: "はくばりゅうじん",
    prefecture: "長野県",
    file: "spring_each/hakubaryuujinonsen_hakubaryuujin_nagano.html"
  },
  {
    name: "白布温泉",
    kana: "しらぶ",
    prefecture: "山形県",
    file: "spring_each/hakufuonsen_shirabu_yamagata.html"
  },
  {
    name: "浜平温泉",
    kana: "はまびら",
    prefecture: "鹿児島県",
    file: "spring_each/hamahiraonsen_hamabira_kakoshima.html"
  },
  {
    name: "浜村温泉",
    kana: "はまむら",
    prefecture: "鳥取県",
    file: "spring_each/hamamuraonsen_hamamura_tottori.html"
  },
  {
    name: "浜名湖かんざんじ",
    kana: "舘山寺）温泉（はまなこかんざんじ",
    prefecture: "静岡県",
    file: "spring_each/hamanakokanzanji_1_shizuoka.html"
  },
  {
    name: "はまなす温泉",
    kana: "はまなす",
    prefecture: "石川県",
    file: "spring_each/hamanasuonsen_hamanasu_ishikawa.html"
  },
  {
    name: "浜の湯温泉",
    kana: "はまのゆ",
    prefecture: "熊本県",
    file: "spring_each/hamanoyuonizumi_hamanoyu_kumamoto.html"
  },
  {
    name: "浜坂温泉",
    kana: "はまさか",
    prefecture: "兵庫県",
    file: "spring_each/hamasakaonsen_hamasaka_hyougo.html"
  },
  {
    name: "浜坂温泉郷",
    kana: "はまさか",
    prefecture: "兵庫県",
    file: "spring_each/hamasakaonsensato_hamasaka_hyougo.html"
  },
  {
    name: "浜詰温泉",
    kana: "はまづめ",
    prefecture: "京都府",
    file: "spring_each/hamatsumeonsen_hamazume_kyoutofu.html"
  },
  {
    name: "浜脇温泉",
    kana: "はまわき",
    prefecture: "大分県",
    file: "spring_each/hamawakionsen_hamawaki_ooita.html"
  },
  {
    name: "花巻南温泉峡渡り温泉",
    kana: "はなまきみなみきょうわたり",
    prefecture: "岩手県",
    file: "spring_each/hanamakiminamionsenkyouwatarionsen_hanamakiminamikyouwatari_iwate.html"
  },
  {
    name: "花巻温泉",
    kana: "はなまき",
    prefecture: "岩手県",
    file: "spring_each/hanamakionsen_hanamaki_iwate.html"
  },
  {
    name: "花咲温泉",
    kana: "はなさく",
    prefecture: "群馬県",
    file: "spring_each/hanasakionsen_hanasaku_gunma.html"
  },
  {
    name: "花敷温泉",
    kana: "はなしき",
    prefecture: "群馬県",
    file: "spring_each/hanashikionsen_hanashiki_gunma.html"
  },
  {
    name: "花山温泉",
    kana: "はなやま",
    prefecture: "和歌山県",
    file: "spring_each/hanayamaonsen_hanayama_wakayama.html"
  },
  {
    name: "半出来・吾妻温泉",
    kana: "はんでき・あがつま",
    prefecture: "群馬県",
    file: "spring_each/handekiazumaonsen_handekiagatsuma_gunma.html"
  },
  {
    name: "原保温泉",
    kana: "わらぼ",
    prefecture: "静岡県",
    file: "spring_each/harahoonizumi_warabo_shizuoka.html"
  },
  {
    name: "原城温泉",
    kana: "はらじょう",
    prefecture: "長崎県",
    file: "spring_each/harashiroonsen_harajou_nagasaki.html"
  },
  {
    name: "原鶴温泉",
    kana: "はらづる",
    prefecture: "福岡県",
    file: "spring_each/haratsuruonsen_harazuru_fukuoka.html"
  },
  {
    name: "榛名湖温泉",
    kana: "はるなこ",
    prefecture: "群馬県",
    file: "spring_each/harunamizuumionsen_harunako_gunma.html"
  },
  {
    name: "波佐見温泉",
    kana: "はさみ",
    prefecture: "長崎県",
    file: "spring_each/hasamionsen_hasami_nagasaki.html"
  },
  {
    name: "畑毛温泉",
    kana: "はたけ",
    prefecture: "静岡県",
    file: "spring_each/hatakeonsen_hatake_shizuoka.html"
  },
  {
    name: "幡谷温泉",
    kana: "はたや",
    prefecture: "群馬県",
    file: "spring_each/hatayaonsen_hataya_gunma.html"
  },
  {
    name: "八丁浜小浜温泉",
    kana: "はっちょうはまこばま",
    prefecture: "京都府",
    file: "spring_each/hatchouhamaobamaonsen_hatchouhamakobama_kyoutofu.html"
  },
  {
    name: "鳩の湯温泉",
    kana: "はとのゆ",
    prefecture: "群馬県",
    file: "spring_each/hatonoyuonizumi_hatonoyu_gunma.html"
  },
  {
    name: "羽鳥湖温泉",
    kana: "はとりこ",
    prefecture: "福島県",
    file: "spring_each/hatorimizuumionsen_hatoriko_fukushima.html"
  },
  {
    name: "ハツカ石温泉",
    kana: "はつかいし",
    prefecture: "新潟県",
    file: "spring_each/hatsukaishionsen_hatsukaishi_niigata.html"
  },
  {
    name: "はわい温泉",
    kana: "はわい",
    prefecture: "鳥取県",
    file: "spring_each/hawaionsen_hawai_tottori.html"
  },
  {
    name: "はやぶさ温泉",
    kana: "はやぶさ",
    prefecture: "山梨県",
    file: "spring_each/hayabusaonsen_hayabusa_yamanashi.html"
  },
  {
    name: "林田温泉",
    kana: "はやしだ",
    prefecture: "鹿児島県",
    file: "spring_each/hayashidaonsen_hayashida_kakoshima.html"
  },
  {
    name: "早太郎温泉",
    kana: "はやたろう",
    prefecture: "長野県",
    file: "spring_each/hayatarouonsen_hayatarou_nagano.html"
  },
  {
    name: "飛騨高山温泉",
    kana: "ひだたかやま",
    prefecture: "岐阜県",
    file: "spring_each/hidatakayamaonsen_hidatakayama_gifu.html"
  },
  {
    name: "英彦山温泉",
    kana: "ひこさん",
    prefecture: "福岡県",
    file: "spring_each/hidehikoyamaonsen_hikosan_fukuoka.html"
  },
  {
    name: "栄之尾温泉",
    kana: "霧島温泉郷）（さかえのお（きりしま）",
    prefecture: "鹿児島県",
    file: "spring_each/hideyukioonsen_1_kakoshima.html"
  },
  {
    name: "檜枝岐温泉",
    kana: "ひのえまた",
    prefecture: "福島県",
    file: "spring_each/hiekionsen_hinoemata_fukushima.html"
  },
  {
    name: "東八幡平温泉",
    kana: "ひがしはちまんたい",
    prefecture: "岩手県",
    file: "spring_each/higashihachimantaionsen_higashihachimantai_iwate.html"
  },
  {
    name: "東神楽温泉",
    kana: "ひがしかぐら",
    prefecture: "北海道",
    file: "spring_each/higashikaguraonsen_higashikagura_hokkaidou.html"
  },
  {
    name: "東鳴子温泉",
    kana: "鳴子温泉郷）（ひがしなるこ（なるこ）",
    prefecture: "宮城県",
    file: "spring_each/higashinarukoonsen_1_miyagi.html"
  },
  {
    name: "東トロコ温泉",
    kana: "ひがしとろこ",
    prefecture: "秋田県",
    file: "spring_each/higashitorokoonsen_higashitoroko_akita.html"
  },
  {
    name: "肘折温泉",
    kana: "ひじおり",
    prefecture: "山形県",
    file: "spring_each/hijiorionsen_hijiori_yamagata.html"
  },
  {
    name: "日置川温泉",
    kana: "ひきがわ",
    prefecture: "和歌山県",
    file: "spring_each/hikigawaonsen_hikigawa_wakayama.html"
  },
  {
    name: "匹見峡温泉",
    kana: "ひきみきょう",
    prefecture: "島根県",
    file: "spring_each/hikimikyouonsen_hikimikyou_shimane.html"
  },
  {
    name: "姫川温泉",
    kana: "ひめかわ",
    prefecture: "新潟県",
    file: "spring_each/himegawaonsen_himekawa_niigata.html"
  },
  {
    name: "姫木温泉",
    kana: "ひめき",
    prefecture: "長野県",
    file: "spring_each/himekionsen_himeki_nagano.html"
  },
  {
    name: "ひみ阿尾の浦温泉",
    kana: "ひみあおのうら",
    prefecture: "富山県",
    file: "spring_each/himiaonouraonsen_himiaonoura_toyama.html"
  },
  {
    name: "氷見温泉郷",
    kana: "ひみ",
    prefecture: "富山県",
    file: "spring_each/himionsensato_himi_toyama.html"
  },
  {
    name: "日奈久温泉",
    kana: "ひなぐ",
    prefecture: "熊本県",
    file: "spring_each/hinaguonsen_hinagu_kumamoto.html"
  },
  {
    name: "日之出温泉",
    kana: "新川渓谷温泉郷）（ひので（しんかわけいこく）",
    prefecture: "鹿児島県",
    file: "spring_each/hinodeonsen_1_kakoshima.html"
  },
  {
    name: "日出温泉",
    kana: "ひじ",
    prefecture: "大分県",
    file: "spring_each/hinodeonsen_hiji_ooita.html"
  },
  {
    name: "火の谷温泉",
    kana: "ひのたに",
    prefecture: "三重県",
    file: "spring_each/hinotanionsen_hinotani_mie.html"
  },
  {
    name: "斐乃上温泉",
    kana: "ひのがみ",
    prefecture: "島根県",
    file: "spring_each/hinoueonsen_hinogami_shimane.html"
  },
  {
    name: "平戸温泉",
    kana: "ひらど",
    prefecture: "長崎県",
    file: "spring_each/hiradoonsen_hirado_nagasaki.html"
  },
  {
    name: "平戸千里ケ浜温泉",
    kana: "ひらどせんりがはま",
    prefecture: "長崎県",
    file: "spring_each/hiradosenrikehamaonsen_hiradosenrigahama_nagasaki.html"
  },
  {
    name: "平戸たびら温泉",
    kana: "ひらどたびら",
    prefecture: "長崎県",
    file: "spring_each/hiradotabiraonsen_hiradotabira_nagasaki.html"
  },
  {
    name: "比羅夫温泉",
    kana: "ひらふ",
    prefecture: "北海道",
    file: "spring_each/hirafuonsen_hirafu_hokkaidou.html"
  },
  {
    name: "平磯温泉",
    kana: "ひらいそ",
    prefecture: "北海道",
    file: "spring_each/hiraisoonsen_hiraiso_hokkaidou.html"
  },
  {
    name: "平潟港温泉",
    kana: "ひらがた",
    prefecture: "茨城県",
    file: "spring_each/hirakataminatoonsen_hiragata_ibaraki.html"
  },
  {
    name: "平山・北沼上温泉",
    kana: "ひらやま・きたぬまがみ",
    prefecture: "静岡県",
    file: "spring_each/hirayamakitanumaueonsen_hirayamakitanumagami_shizuoka.html"
  },
  {
    name: "平山温泉",
    kana: "ひらやま",
    prefecture: "熊本県",
    file: "spring_each/hirayamaonsen_hirayama_kumamoto.html"
  },
  {
    name: "平湯温泉",
    kana: "奥飛騨温泉郷）（ひらゆ（おくひだ）",
    prefecture: "岐阜県",
    file: "spring_each/hirayuonsen_1_gifu.html"
  },
  {
    name: "広沢寺温泉",
    kana: "こうたくじ",
    prefecture: "神奈川県",
    file: "spring_each/hirosawateraonsen_koutakuji_kanagawa.html"
  },
  {
    name: "広島温泉",
    kana: "ひろしま",
    prefecture: "広島県",
    file: "spring_each/hiroshimaonsen_hiroshima_hiroshima.html"
  },
  {
    name: "広田温泉",
    kana: "ひろた",
    prefecture: "新潟県",
    file: "spring_each/hirotaonsen_hirota_niigata.html"
  },
  {
    name: "昼神温泉",
    kana: "ひるがみ",
    prefecture: "長野県",
    file: "spring_each/hirugamionsen_hirugami_nagano.html"
  },
  {
    name: "久山温泉",
    kana: "ひさやま",
    prefecture: "福岡県",
    file: "spring_each/hisayamaonsen_hisayama_fukuoka.html"
  },
  {
    name: "日田温泉",
    kana: "ひた",
    prefecture: "大分県",
    file: "spring_each/hitaonsen_hita_ooita.html"
  },
  {
    name: "仁伏温泉",
    kana: "にぶし",
    prefecture: "北海道",
    file: "spring_each/hitoshifukuonsen_nibushi_hokkaidou.html"
  },
  {
    name: "人吉温泉",
    kana: "ひとよし",
    prefecture: "熊本県",
    file: "spring_each/hitoyoshionsen_hitoyoshi_kumamoto.html"
  },
  {
    name: "冷川温泉",
    kana: "ひえかわ",
    prefecture: "静岡県",
    file: "spring_each/hiyakawaonsen_hiekawa_shizuoka.html"
  },
  {
    name: "ひよし温泉",
    kana: "ひよし",
    prefecture: "京都府",
    file: "spring_each/hiyoshionsen_hiyoshi_kyoutofu.html"
  },
  {
    name: "穂高温泉郷",
    kana: "ほだか",
    prefecture: "長野県",
    file: "spring_each/hodakaonsensato_hodaka_nagano.html"
  },
  {
    name: "法華院温泉",
    kana: "ほっけいん",
    prefecture: "大分県",
    file: "spring_each/hokkeinonsen_hokkein_ooita.html"
  },
  {
    name: "本別温泉",
    kana: "ほんべつ",
    prefecture: "北海道",
    file: "spring_each/honbetsuonsen_honbetsu_hokkaidou.html"
  },
  {
    name: "本渡温泉",
    kana: "ほんど",
    prefecture: "熊本県",
    file: "spring_each/hondoonsen_hondo_kumamoto.html"
  },
  {
    name: "本白根温泉",
    kana: "もとしらね",
    prefecture: "群馬県",
    file: "spring_each/honshironeonsen_motoshirane_gunma.html"
  },
  {
    name: "星川温泉",
    kana: "ほしかわ",
    prefecture: "長野県",
    file: "spring_each/hoshikawaonsen_hoshikawa_nagano.html"
  },
  {
    name: "星野温泉",
    kana: "ほしの",
    prefecture: "福岡県",
    file: "spring_each/hoshinoonsen_hoshino_fukuoka.html"
  },
  {
    name: "堀田温泉",
    kana: "別府温泉郷）（ほりた（べっぷ）",
    prefecture: "大分県",
    file: "spring_each/hottaonsen_1_ooita.html"
  },
  {
    name: "ほったらかし温泉",
    kana: "ほったらかし",
    prefecture: "山梨県",
    file: "spring_each/hottarakashionsen_hottarakashi_yamanashi.html"
  },
  {
    name: "法能温泉",
    kana: "ほうのう",
    prefecture: "山梨県",
    file: "spring_each/hounouonsen_hounou_yamanashi.html"
  },
  {
    name: "宝来温泉",
    kana: "ほうらい",
    prefecture: "奈良県",
    file: "spring_each/houraionsen_hourai_nara.html"
  },
  {
    name: "宝泉寺温泉",
    kana: "ほうせんじ",
    prefecture: "大分県",
    file: "spring_each/housenteraonsen_housenji_ooita.html"
  },
  {
    name: "法泉寺温泉",
    kana: "ほうせんじ",
    prefecture: "静岡県",
    file: "spring_each/housenteraonsen_housenji_shizuoka.html"
  },
  {
    name: "法師温泉",
    kana: "ほうし",
    prefecture: "群馬県",
    file: "spring_each/houshionsen_houshi_gunma.html"
  },
  {
    name: "指宿温泉",
    kana: "いぶすき",
    prefecture: "鹿児島県",
    file: "spring_each/ibusukionsen_ibusuki_kakoshima.html"
  },
  {
    name: "一の俣温泉",
    kana: "いちのまた",
    prefecture: "山口県",
    file: "spring_each/ichinomataonsen_ichinomata_yamaguchi.html"
  },
  {
    name: "一関温泉郷",
    kana: "いちのせき",
    prefecture: "岩手県",
    file: "spring_each/ichinosekionsensato_ichinoseki_iwate.html"
  },
  {
    name: "一里野温泉",
    kana: "いちりの",
    prefecture: "石川県",
    file: "spring_each/ichirinoonsen_ichirino_ishikawa.html"
  },
  {
    name: "伊賀青山朝妻温泉",
    kana: "あさつま",
    prefecture: "三重県",
    file: "spring_each/igaaoyamaasazumaonsen_asatsuma_mie.html"
  },
  {
    name: "伊賀温泉",
    kana: "いが",
    prefecture: "三重県",
    file: "spring_each/igaonsen_iga_mie.html"
  },
  {
    name: "飯田温泉",
    kana: "いいだ",
    prefecture: "山形県",
    file: "spring_each/iidaonsen_iida_yamagata.html"
  },
  {
    name: "飯田城温泉",
    kana: "いいだじょう",
    prefecture: "長野県",
    file: "spring_each/iidashiroonsen_iidajou_nagano.html"
  },
  {
    name: "飯森山温泉",
    kana: "いいもりやま",
    prefecture: "山形県",
    file: "spring_each/iimoriyamaonsen_iimoriyama_yamagata.html"
  },
  {
    name: "飯岡温泉",
    kana: "いいおか",
    prefecture: "千葉県",
    file: "spring_each/iiokaonsen_iioka_chiba.html"
  },
  {
    name: "飯山温泉",
    kana: "いいやま",
    prefecture: "神奈川県",
    file: "spring_each/iiyamaonsen_iiyama_kanagawa.html"
  },
  {
    name: "飯坂温泉",
    kana: "いいざか",
    prefecture: "福島県",
    file: "spring_each/iizakaonsen_iizaka_fukushima.html"
  },
  {
    name: "伊香保温泉",
    kana: "いかほ",
    prefecture: "群馬県",
    file: "spring_each/ikahoonsen_ikaho_gunma.html"
  },
  {
    name: "池の平温泉",
    kana: "いけのたいら",
    prefecture: "長野県",
    file: "spring_each/ikenoheionizumi_ikenotaira_nagano.html"
  },
  {
    name: "今井浜温泉",
    kana: "いまいはま",
    prefecture: "静岡県",
    file: "spring_each/imaihamaonsen_imaihama_shizuoka.html"
  },
  {
    name: "今板温泉",
    kana: "五頭温泉郷）（いまいた（ごず）",
    prefecture: "新潟県",
    file: "spring_each/imaitaonsen_1_niigata.html"
  },
  {
    name: "藺牟田温泉",
    kana: "いむた",
    prefecture: "鹿児島県",
    file: "spring_each/imutaonsen_imuta_kakoshima.html"
  },
  {
    name: "稲垣温泉",
    kana: "いながき",
    prefecture: "青森県",
    file: "spring_each/inagakionsen_inagaki_aomori.html"
  },
  {
    name: "猪名川豊壽温泉",
    kana: "いながわほうじゅ",
    prefecture: "兵庫県",
    file: "spring_each/inagawatoyoshionsen_inagawahouju_hyougo.html"
  },
  {
    name: "稲荷山温泉",
    kana: "いなりやま",
    prefecture: "長野県",
    file: "spring_each/inariyamaonsen_inariyama_nagano.html"
  },
  {
    name: "稲佐山温泉",
    kana: "いなさやま",
    prefecture: "長崎県",
    file: "spring_each/inasayamaonsen_inasayama_nagasaki.html"
  },
  {
    name: "稲取温泉",
    kana: "いなとり",
    prefecture: "静岡県",
    file: "spring_each/inatorionsen_inatori_shizuoka.html"
  },
  {
    name: "猪苗代温泉",
    kana: "いなわしろ",
    prefecture: "福島県",
    file: "spring_each/inawashiroonsen_inawashiro_fukushima.html"
  },
  {
    name: "猪苗代四季の湯温泉",
    kana: "いなわしろしきのゆ",
    prefecture: "福島県",
    file: "spring_each/inawashiroshikinoyuonizumi_inawashiroshikinoyu_fukushima.html"
  },
  {
    name: "稲子川温泉",
    kana: "いなごかわ",
    prefecture: "静岡県",
    file: "spring_each/inekokawaonsen_inagokawa_shizuoka.html"
  },
  {
    name: "井頭温泉",
    kana: "いがしら",
    prefecture: "栃木県",
    file: "spring_each/inokashiraonsen_igashira_tochigi.html"
  },
  {
    name: "猪の倉温泉",
    kana: "いのくら",
    prefecture: "三重県",
    file: "spring_each/inoshishinokuraonsen_inokura_mie.html"
  },
  {
    name: "猪ノ田温泉",
    kana: "いのだ",
    prefecture: "群馬県",
    file: "spring_each/inoshishinotaonsen_inoda_gunma.html"
  },
  {
    name: "犬吠埼温泉",
    kana: "いぬぼうさき",
    prefecture: "千葉県",
    file: "spring_each/inubouzakionsen_inubousaki_chiba.html"
  },
  {
    name: "犬鳴山温泉",
    kana: "いぬなきやま",
    prefecture: "大阪府",
    file: "spring_each/inunakiyamaonsen_inunakiyama_oosakafu.html"
  },
  {
    name: "犬山温泉",
    kana: "いぬやま",
    prefecture: "愛知県",
    file: "spring_each/inuyamaonsen_inuyama_aichi.html"
  },
  {
    name: "硫黄谷温泉",
    kana: "いおうだに",
    prefecture: "鹿児島県",
    file: "spring_each/ioutanionsen_ioudani_kakoshima.html"
  },
  {
    name: "一本松温泉",
    kana: "いっぽんまつ",
    prefecture: "秋田県",
    file: "spring_each/ipponmatsuonsen_ipponmatsu_akita.html"
  },
  {
    name: "入広瀬ニュー浅草岳温泉",
    kana: "いりひろせにゅーあさくさだけ",
    prefecture: "新潟県",
    file: "spring_each/irihirosenyuuasakusagakuonsen_irihirosenyuuasakusadake_niigata.html"
  },
  {
    name: "いろは島温泉",
    kana: "いろはじま",
    prefecture: "佐賀県",
    file: "spring_each/irohashimaonsen_irohajima_saga.html"
  },
  {
    name: "伊勢原温泉",
    kana: "いせはら",
    prefecture: "神奈川県",
    file: "spring_each/iseharaonsen_isehara_kanagawa.html"
  },
  {
    name: "伊勢志摩磯部わたかの温泉",
    kana: "いせしまいそべわたかの",
    prefecture: "三重県",
    file: "spring_each/iseshimaisobewatakanoonsen_iseshimaisobewatakano_mie.html"
  },
  {
    name: "伊勢志摩賢島温泉",
    kana: "いせしまかしこじま",
    prefecture: "三重県",
    file: "spring_each/iseshimasatoshishimaonsen_iseshimakashikojima_mie.html"
  },
  {
    name: "石部温泉",
    kana: "いしぶ",
    prefecture: "静岡県",
    file: "spring_each/ishibeonsen_ishibu_shizuoka.html"
  },
  {
    name: "石井温泉",
    kana: "いしい",
    prefecture: "兵庫県",
    file: "spring_each/ishiionsen_ishii_hyougo.html"
  },
  {
    name: "石狩太美温泉",
    kana: "いしかりふとみ",
    prefecture: "北海道",
    file: "spring_each/ishikaritabionsen_ishikarifutomi_hokkaidou.html"
  },
  {
    name: "石切温泉",
    kana: "いしきり",
    prefecture: "大阪府",
    file: "spring_each/ishikirionsen_ishikiri_oosakafu.html"
  },
  {
    name: "石和温泉",
    kana: "いさわ",
    prefecture: "山梨県",
    file: "spring_each/ishiwaonsen_isawa_yamanashi.html"
  },
  {
    name: "磯部温泉",
    kana: "いそべ",
    prefecture: "群馬県",
    file: "spring_each/isobeonsen_isobe_gunma.html"
  },
  {
    name: "磯原温泉",
    kana: "いそはら",
    prefecture: "茨城県",
    file: "spring_each/isoharaonsen_isohara_ibaraki.html"
  },
  {
    name: "いそざき温泉",
    kana: "いそざき",
    prefecture: "茨城県",
    file: "spring_each/isozakionsen_isozaki_ibaraki.html"
  },
  {
    name: "一勝地温泉",
    kana: "いっちょうち",
    prefecture: "熊本県",
    file: "spring_each/isshouchionizumi_itchouchi_kumamoto.html"
  },
  {
    name: "虎杖浜温泉郷",
    kana: "こじょうはま",
    prefecture: "北海道",
    file: "spring_each/itadorihamaonsensato_kojouhama_hokkaidou.html"
  },
  {
    name: "板留温泉",
    kana: "いたどめ",
    prefecture: "青森県",
    file: "spring_each/itaryuuonsen_itadome_aomori.html"
  },
  {
    name: "板室温泉",
    kana: "いたむろ",
    prefecture: "栃木県",
    file: "spring_each/itashitsuonizumi_itamuro_tochigi.html"
  },
  {
    name: "伊東温泉",
    kana: "いとう",
    prefecture: "静岡県",
    file: "spring_each/itouonsen_itou_shizuoka.html"
  },
  {
    name: "伊東市赤沢対島温泉",
    kana: "いとうしあかざわたじま",
    prefecture: "静岡県",
    file: "spring_each/itoushiakazawatsuishimaonsen_itoushiakazawatajima_shizuoka.html"
  },
  {
    name: "五浦温泉",
    kana: "いつうら",
    prefecture: "茨城県",
    file: "spring_each/itsuuraonsen_itsuura_ibaraki.html"
  },
  {
    name: "岩井温泉",
    kana: "いわい",
    prefecture: "鳥取県",
    file: "spring_each/iwaionsen_iwai_tottori.html"
  },
  {
    name: "岩井湯元温泉",
    kana: "いわいゆもと",
    prefecture: "千葉県",
    file: "spring_each/iwaiyumotoonsen_iwaiyumoto_chiba.html"
  },
  {
    name: "岩地温泉",
    kana: "いわち",
    prefecture: "静岡県",
    file: "spring_each/iwajionsen_iwachi_shizuoka.html"
  },
  {
    name: "いわき塩屋崎温泉",
    kana: "いわきしおやざき",
    prefecture: "福島県",
    file: "spring_each/iwakishioyasakionsen_iwakishioyazaki_fukushima.html"
  },
  {
    name: "いわき湯本温泉",
    kana: "いわきゆもと",
    prefecture: "福島県",
    file: "spring_each/iwakiyumotoonsen_iwakiyumoto_fukushima.html"
  },
  {
    name: "岩室温泉",
    kana: "いわむろ",
    prefecture: "新潟県",
    file: "spring_each/iwamuroonsen_iwamuro_niigata.html"
  },
  {
    name: "いわない温泉",
    kana: "いわない",
    prefecture: "北海道",
    file: "spring_each/iwanaionsen_iwanai_hokkaidou.html"
  },
  {
    name: "岩尾別温泉",
    kana: "いわおべつ",
    prefecture: "北海道",
    file: "spring_each/iwaobetsuonsen_iwaobetsu_hokkaidou.html"
  },
  {
    name: "岩下温泉",
    kana: "いわした",
    prefecture: "山梨県",
    file: "spring_each/iwashitaonsen_iwashita_yamanashi.html"
  },
  {
    name: "岩滝温泉",
    kana: "いわたき",
    prefecture: "京都府",
    file: "spring_each/iwatakionsen_iwataki_kyoutofu.html"
  },
  {
    name: "岩手山焼走り温泉",
    kana: "いわてさんやけはしり",
    prefecture: "岩手県",
    file: "spring_each/iwateyamayakihashirionsen_iwatesanyakehashiri_iwate.html"
  },
  {
    name: "岩手湯本温泉",
    kana: "いわてゆもと",
    prefecture: "岩手県",
    file: "spring_each/iwateyumotoonsen_iwateyumoto_iwate.html"
  },
  {
    name: "岩屋温泉",
    kana: "いわや",
    prefecture: "兵庫県",
    file: "spring_each/iwayaonsen_iwaya_hyougo.html"
  },
  {
    name: "祖谷渓温泉",
    kana: "いやけい",
    prefecture: "徳島県",
    file: "spring_each/iyakeionsen_iyakei_tokushima.html"
  },
  {
    name: "伊豆片瀬温泉",
    kana: "いずかたせ",
    prefecture: "静岡県",
    file: "spring_each/izukataseonsen_izukatase_shizuoka.html"
  },
  {
    name: "伊豆駒の湯温泉",
    kana: "いずこまのゆ",
    prefecture: "静岡県",
    file: "spring_each/izukomanoyuonizumi_izukomanoyu_shizuoka.html"
  },
  {
    name: "伊豆高原温泉",
    kana: "いずこうげん",
    prefecture: "静岡県",
    file: "spring_each/izukougenonsen_izukougen_shizuoka.html"
  },
  {
    name: "泉",
    kana: "伊豆湯河原）温泉（いずみ（いずゆがわら）",
    prefecture: "静岡県",
    file: "spring_each/izumi_1_shizuoka.html"
  },
  {
    name: "泉ヶ岳温泉",
    kana: "いずみがたけ",
    prefecture: "宮城県",
    file: "spring_each/izumikegakuonsen_izumigatake_miyagi.html"
  },
  {
    name: "泉崎さつき温泉",
    kana: "いずみざきさつき",
    prefecture: "福島県",
    file: "spring_each/izumisakisatsukionsen_izumizakisatsuki_fukushima.html"
  },
  {
    name: "出雲湯村温泉",
    kana: "いずもゆむら",
    prefecture: "島根県",
    file: "spring_each/izumoyumuraonsen_izumoyumura_shimane.html"
  },
  {
    name: "伊豆長岡温泉",
    kana: "いずながおか",
    prefecture: "静岡県",
    file: "spring_each/izunagaokaonsen_izunagaoka_shizuoka.html"
  },
  {
    name: "伊豆長岡温泉古奈",
    kana: "いずながおかこな",
    prefecture: "静岡県",
    file: "spring_each/izunagaokaonsenkona_izunagaokakona_shizuoka.html"
  },
  {
    name: "伊豆白浜温泉",
    kana: "いずしらはま",
    prefecture: "静岡県",
    file: "spring_each/izushirahamaonsen_izushirahama_shizuoka.html"
  },
  {
    name: "地獄谷温泉",
    kana: "熊本県）（じごくだに",
    prefecture: "熊本県",
    file: "spring_each/jigokudanionsen_1_kumamoto.html"
  },
  {
    name: "地獄温泉",
    kana: "じごく",
    prefecture: "熊本県",
    file: "spring_each/jigokuonsen_jigoku_kumamoto.html"
  },
  {
    name: "陣場ノ湯温泉",
    kana: "じんばのゆ",
    prefecture: "神奈川県",
    file: "spring_each/jinbanoyuonizumi_jinbanoyu_kanagawa.html"
  },
  {
    name: "上越・安塚雪だるま温泉",
    kana: "じょうえつ・やすづかゆきだるま",
    prefecture: "新潟県",
    file: "spring_each/jouetsuyasuzukayukidarumaonsen_jouetsuyasuzukayukidaruma_niigata.html"
  },
  {
    name: "城ケ崎温泉",
    kana: "じょうがさき",
    prefecture: "静岡県",
    file: "spring_each/jougasakionsen_jougasaki_shizuoka.html"
  },
  {
    name: "城南温泉",
    kana: "じょうなん",
    prefecture: "熊本県",
    file: "spring_each/jounanonsen_jounan_kumamoto.html"
  },
  {
    name: "城島温泉",
    kana: "きじま",
    prefecture: "大分県",
    file: "spring_each/joushimaonsen_kijima_ooita.html"
  },
  {
    name: "定山渓温泉",
    kana: "じょうざんけい",
    prefecture: "北海道",
    file: "spring_each/jouzankeionsen_jouzankei_hokkaidou.html"
  },
  {
    name: "十枚荘温泉",
    kana: "じゅうまいそう",
    prefecture: "山梨県",
    file: "spring_each/juumaisouonsen_juumaisou_yamanashi.html"
  },
  {
    name: "十谷温泉",
    kana: "じっこく",
    prefecture: "山梨県",
    file: "spring_each/juutanionsen_jikkoku_yamanashi.html"
  },
  {
    name: "壁湯温泉",
    kana: "かべゆ",
    prefecture: "大分県",
    file: "spring_each/kabeyuonizumi_kabeyu_ooita.html"
  },
  {
    name: "下部温泉",
    kana: "しもべ",
    prefecture: "山梨県",
    file: "spring_each/kabuonsen_shimobe_yamanashi.html"
  },
  {
    name: "かぶと湯温泉",
    kana: "かぶとゆ",
    prefecture: "神奈川県",
    file: "spring_each/kabutoyuonizumi_kabutoyu_kanagawa.html"
  },
  {
    name: "下風呂温泉郷",
    kana: "しもふろ",
    prefecture: "青森県",
    file: "spring_each/kafuuryoonsenkyou_shimofuro_aomori.html"
  },
  {
    name: "海潟温泉",
    kana: "かいかた",
    prefecture: "鹿児島県",
    file: "spring_each/kaigataonsen_kaikata_kakoshima.html"
  },
  {
    name: "貝掛温泉",
    kana: "かいかけ",
    prefecture: "新潟県",
    file: "spring_each/kaikakarionsen_kaikake_niigata.html"
  },
  {
    name: "皆生温泉",
    kana: "かいけ",
    prefecture: "鳥取県",
    file: "spring_each/kaikeonsen_kaike_tottori.html"
  },
  {
    name: "開聞温泉",
    kana: "かいもん",
    prefecture: "鹿児島県",
    file: "spring_each/kaimononsen_kaimon_kakoshima.html"
  },
  {
    name: "甲斐大泉温泉",
    kana: "かいおおいずみ",
    prefecture: "山梨県",
    file: "spring_each/kaiooizumionsen_kaiooizumi_yamanashi.html"
  },
  {
    name: "かいづか温泉",
    kana: "かいづか",
    prefecture: "大阪府",
    file: "spring_each/kaizukaonsen_kaizuka_oosakafu.html"
  },
  {
    name: "加治木温泉",
    kana: "かじき",
    prefecture: "鹿児島県",
    file: "spring_each/kajikionsen_kajiki_kakoshima.html"
  },
  {
    name: "掛川つま恋温泉",
    kana: "かけがわつまごい",
    prefecture: "静岡県",
    file: "spring_each/kakegawatsumakoionsen_kakegawatsumagoi_shizuoka.html"
  },
  {
    name: "鹿教湯温泉",
    kana: "かけゆ",
    prefecture: "長野県",
    file: "spring_each/kakeyuonsen_kakeyu_nagano.html"
  },
  {
    name: "柿野温泉",
    kana: "かきの",
    prefecture: "岐阜県",
    file: "spring_each/kakinoonsen_kakino_gifu.html"
  },
  {
    name: "鹿児島温泉",
    kana: "かごしま",
    prefecture: "鹿児島県",
    file: "spring_each/kakoshimaonsen_kagoshima_kakoshima.html"
  },
  {
    name: "角神温泉",
    kana: "つのがみ",
    prefecture: "新潟県",
    file: "spring_each/kakukamionsen_tsunogami_niigata.html"
  },
  {
    name: "角館温泉",
    kana: "かくのだて",
    prefecture: "秋田県",
    file: "spring_each/kakunodateonsen_kakunodate_akita.html"
  },
  {
    name: "蒲井温泉",
    kana: "かまい",
    prefecture: "京都府",
    file: "spring_each/kamaionsen_kamai_kyoutofu.html"
  },
  {
    name: "鎌先温泉",
    kana: "かまさき",
    prefecture: "宮城県",
    file: "spring_each/kamasakionsen_kamasaki_miyagi.html"
  },
  {
    name: "亀川温泉",
    kana: "別府温泉郷）（かめがわ（べっぷ）",
    prefecture: "大分県",
    file: "spring_each/kamekawaonsen_1_ooita.html"
  },
  {
    name: "亀山温泉",
    kana: "かめやま",
    prefecture: "千葉県",
    file: "spring_each/kameyamaonsen_kameyama_chiba.html"
  },
  {
    name: "神鍋温泉",
    kana: "かんなべ",
    prefecture: "兵庫県",
    file: "spring_each/kaminabeonsen_kannabe_hyougo.html"
  },
  {
    name: "神の宮温泉",
    kana: "かみのみや",
    prefecture: "新潟県",
    file: "spring_each/kaminomiyaonsen_kaminomiya_niigata.html"
  },
  {
    name: "かみのやま温泉",
    kana: "かみのやま",
    prefecture: "山形県",
    file: "spring_each/kaminoyamaonsen_kaminoyama_yamagata.html"
  },
  {
    name: "神の湯温泉",
    kana: "かみのゆ",
    prefecture: "山梨県",
    file: "spring_each/kaminoyuonizumi_kaminoyu_yamanashi.html"
  },
  {
    name: "神代温泉",
    kana: "じんだい",
    prefecture: "三重県",
    file: "spring_each/kamishiroonsen_jindai_mie.html"
  },
  {
    name: "上諏訪温泉",
    kana: "諏訪湖温泉郷）（かみすわ（すわこ）",
    prefecture: "長野県",
    file: "spring_each/kamisuwaonsen_1_nagano.html"
  },
  {
    name: "神山温泉",
    kana: "かみやま",
    prefecture: "徳島県",
    file: "spring_each/kamiyamaonsen_kamiyama_tokushima.html"
  },
  {
    name: "神湯温泉",
    kana: "かみゆ",
    prefecture: "新潟県",
    file: "spring_each/kamiyuonizumi_kamiyu_niigata.html"
  },
  {
    name: "鴨川温泉",
    kana: "かもがわ",
    prefecture: "千葉県",
    file: "spring_each/kamogawaonsen_kamogawa_chiba.html"
  },
  {
    name: "神室温泉",
    kana: "かむろ",
    prefecture: "山形県",
    file: "spring_each/kamuroonsen_kamuro_yamagata.html"
  },
  {
    name: "金矢温泉",
    kana: "かなや",
    prefecture: "岩手県",
    file: "spring_each/kanayaonsen_kanaya_iwate.html"
  },
  {
    name: "上林温泉",
    kana: "かんばやし",
    prefecture: "長野県",
    file: "spring_each/kanbayashionsen_kanbayashi_nagano.html"
  },
  {
    name: "関空温泉",
    kana: "かんくう",
    prefecture: "大阪府",
    file: "spring_each/kankuuonsen_kankuu_oosakafu.html"
  },
  {
    name: "上牧温泉",
    kana: "かみもく",
    prefecture: "群馬県",
    file: "spring_each/kanmakionsen_kamimoku_gunma.html"
  },
  {
    name: "寒の地獄温泉",
    kana: "かんのじごく",
    prefecture: "大分県",
    file: "spring_each/kannojigokuonsen_kannojigoku_ooita.html"
  },
  {
    name: "観音温泉",
    kana: "かんのん",
    prefecture: "静岡県",
    file: "spring_each/kannononsen_kannon_shizuoka.html"
  },
  {
    name: "観音滝温泉",
    kana: "かんのんだき",
    prefecture: "鹿児島県",
    file: "spring_each/kannontakionsen_kannondaki_kakoshima.html"
  },
  {
    name: "神野温泉",
    kana: "久美の浜温泉郷）（じんの（くみのはま）",
    prefecture: "京都府",
    file: "spring_each/kannoonsen_1_kyoutofu.html"
  },
  {
    name: "鹿野温泉",
    kana: "しかの",
    prefecture: "鳥取県",
    file: "spring_each/kanoonsen_shikano_tottori.html"
  },
  {
    name: "鹿屋大平温泉",
    kana: "かのやたいへい",
    prefecture: "鹿児島県",
    file: "spring_each/kanoyaoohiraonsen_kanoyataihei_kakoshima.html"
  },
  {
    name: "関平温泉",
    kana: "せきひら",
    prefecture: "鹿児島県",
    file: "spring_each/kanpeionsen_sekihira_kakoshima.html"
  },
  {
    name: "寒水沢温泉",
    kana: "かんすいざわ",
    prefecture: "青森県",
    file: "spring_each/kansuisawaonsen_kansuizawa_aomori.html"
  },
  {
    name: "観海寺温泉",
    kana: "別府温泉郷）（かんかいじ（べっぷ）",
    prefecture: "大分県",
    file: "spring_each/kanumiteraonsen_1_ooita.html"
  },
  {
    name: "カルルス温泉",
    kana: "かるるす",
    prefecture: "北海道",
    file: "spring_each/karurusuonsen_karurusu_hokkaidou.html"
  },
  {
    name: "笠置温泉",
    kana: "かさぎ",
    prefecture: "京都府",
    file: "spring_each/kasagionsen_kasagi_kyoutofu.html"
  },
  {
    name: "かしはらの湯",
    kana: "かしはらのゆ",
    prefecture: "奈良県",
    file: "spring_each/kashiharanoyu_kashiharanoyu_nara.html"
  },
  {
    name: "柏の葉キャンパスシティ温泉",
    kana: "かしわのは",
    prefecture: "千葉県",
    file: "spring_each/kashiwanohakyanpasushiteionsen_kashiwanoha_chiba.html"
  },
  {
    name: "春日居温泉",
    kana: "かすがい",
    prefecture: "山梨県",
    file: "spring_each/kasugaionsen_kasugai_yamanashi.html"
  },
  {
    name: "春日温泉",
    kana: "かすが",
    prefecture: "長野県",
    file: "spring_each/kasugaonsen_kasuga_nagano.html"
  },
  {
    name: "霞の里温泉",
    kana: "かすみのさと",
    prefecture: "鳥取県",
    file: "spring_each/kasunosatoonsen_kasuminosato_tottori.html"
  },
  {
    name: "形原温泉",
    kana: "かたはら",
    prefecture: "愛知県",
    file: "spring_each/katanoharaonsen_katahara_aichi.html"
  },
  {
    name: "片品温泉",
    kana: "かたしな",
    prefecture: "群馬県",
    file: "spring_each/katashinaonsen_katashina_gunma.html"
  },
  {
    name: "片山津温泉",
    kana: "加賀温泉郷）（かたやまづ（かが）",
    prefecture: "石川県",
    file: "spring_each/katayamazuonsen_1_ishikawa.html"
  },
  {
    name: "かつらぎ温泉",
    kana: "かつらぎ",
    prefecture: "和歌山県",
    file: "spring_each/katsuragionsen_katsuragi_wakayama.html"
  },
  {
    name: "勝浦万祝温泉",
    kana: "かつうらまいわい",
    prefecture: "千葉県",
    file: "spring_each/katsuuramanshukuonsen_katsuuramaiwai_chiba.html"
  },
  {
    name: "勝浦温泉",
    kana: "かつうら",
    prefecture: "千葉県",
    file: "spring_each/katsuuraonsen_katsuura_chiba.html"
  },
  {
    name: "川場温泉",
    kana: "かわば",
    prefecture: "群馬県",
    file: "spring_each/kawabaonsen_kawaba_gunma.html"
  },
  {
    name: "川治温泉",
    kana: "かわじ",
    prefecture: "栃木県",
    file: "spring_each/kawachionsen_kawaji_tochigi.html"
  },
  {
    name: "川古温泉",
    kana: "かわふる",
    prefecture: "群馬県",
    file: "spring_each/kawagoonsen_kawafuru_gunma.html"
  },
  {
    name: "河口湖温泉",
    kana: "かわぐちこ",
    prefecture: "山梨県",
    file: "spring_each/kawaguchikoonsen_kawaguchiko_yamanashi.html"
  },
  {
    name: "河口湖温泉郷",
    kana: "かわぐちこ",
    prefecture: "山梨県",
    file: "spring_each/kawaguchikoonsensato_kawaguchiko_yamanashi.html"
  },
  {
    name: "川口温泉",
    kana: "かわぐち",
    prefecture: "秋田県",
    file: "spring_each/kawaguchionsen_kawaguchi_akita.html"
  },
  {
    name: "川尻温泉",
    kana: "かわりし",
    prefecture: "鹿児島県",
    file: "spring_each/kawajirionsen_kawarishi_kakoshima.html"
  },
  {
    name: "川上峡温泉",
    kana: "かわかみきょう",
    prefecture: "佐賀県",
    file: "spring_each/kawakamikyouonsen_kawakamikyou_saga.html"
  },
  {
    name: "川中温泉",
    kana: "かわなか",
    prefecture: "群馬県",
    file: "spring_each/kawanakaonsen_kawanaka_gunma.html"
  },
  {
    name: "川根温泉",
    kana: "かわね",
    prefecture: "静岡県",
    file: "spring_each/kawaneonsen_kawane_shizuoka.html"
  },
  {
    name: "川原湯温泉",
    kana: "かわらゆ",
    prefecture: "群馬県",
    file: "spring_each/kawarayuonizumi_kawarayu_gunma.html"
  },
  {
    name: "川崎有馬温泉",
    kana: "かわさきありま",
    prefecture: "神奈川県",
    file: "spring_each/kawasakiarimaonsen_kawasakiarima_kanagawa.html"
  },
  {
    name: "川渡温泉",
    kana: "鳴子温泉郷）（かわたび（なるこ）",
    prefecture: "宮城県",
    file: "spring_each/kawatabionsen_1_miyagi.html"
  },
  {
    name: "川棚大崎温泉",
    kana: "かわだなおおさき",
    prefecture: "長崎県",
    file: "spring_each/kawatanaoosakionsen_kawadanaoosaki_nagasaki.html"
  },
  {
    name: "河内温泉",
    kana: "かわち",
    prefecture: "熊本県",
    file: "spring_each/kawauchionsen_kawachi_kumamoto.html"
  },
  {
    name: "川内市街地温泉",
    kana: "せんだいしがいち",
    prefecture: "鹿児島県",
    file: "spring_each/kawauchishigaichionsen_sendaishigaichi_kakoshima.html"
  },
  {
    name: "川内高城温泉",
    kana: "せんだいたき",
    prefecture: "鹿児島県",
    file: "spring_each/kawauchitakagionsen_sendaitaki_kakoshima.html"
  },
  {
    name: "川浦温泉",
    kana: "かわうら",
    prefecture: "山梨県",
    file: "spring_each/kawauraonsen_kawaura_yamanashi.html"
  },
  {
    name: "川湯温泉",
    kana: "かわゆ",
    prefecture: "北海道",
    file: "spring_each/kawayuonsen_kawayu_hokkaidou.html"
  },
  {
    name: "川底温泉",
    kana: "かわぞこ",
    prefecture: "大分県",
    file: "spring_each/kawazokoonsen_kawazoko_ooita.html"
  },
  {
    name: "河津浜温泉",
    kana: "かわづはま",
    prefecture: "静岡県",
    file: "spring_each/kawazuhamaonsen_kawazuhama_shizuoka.html"
  },
  {
    name: "河津・峰温泉",
    kana: "かわづ・みね",
    prefecture: "静岡県",
    file: "spring_each/kawazumineonsen_kawazumine_shizuoka.html"
  },
  {
    name: "河津温泉郷",
    kana: "かわづ",
    prefecture: "静岡県",
    file: "spring_each/kawazuonsensato_kawazu_shizuoka.html"
  },
  {
    name: "祁答院温泉",
    kana: "けどういん",
    prefecture: "鹿児島県",
    file: "spring_each/kedouinonsen_kedouin_kakoshima.html"
  },
  {
    name: "計石温泉",
    kana: "はかりいし",
    prefecture: "熊本県",
    file: "spring_each/keiishionsen_hakariishi_kumamoto.html"
  },
  {
    name: "剣淵温泉",
    kana: "けんぶち",
    prefecture: "北海道",
    file: "spring_each/kenbuchionsen_kenbuchi_hokkaidou.html"
  },
  {
    name: "見奈良天然温泉",
    kana: "みならてんねん",
    prefecture: "愛媛県",
    file: "spring_each/kennaratennenonsen_minaratennen_ehime.html"
  },
  {
    name: "気仙沼温泉",
    kana: "けせんぬま",
    prefecture: "宮城県",
    file: "spring_each/kesennumaonsen_kesennuma_miyagi.html"
  },
  {
    name: "吉奈温泉",
    kana: "よしな",
    prefecture: "静岡県",
    file: "spring_each/kichinaonsen_yoshina_shizuoka.html"
  },
  {
    name: "木戸池温泉",
    kana: "きどいけ",
    prefecture: "長野県",
    file: "spring_each/kidoikeonsen_kidoike_nagano.html"
  },
  {
    name: "木賀温泉",
    kana: "きが",
    prefecture: "神奈川県",
    file: "spring_each/kigaonsen_kiga_kanagawa.html"
  },
  {
    name: "紀伊見温泉",
    kana: "きいみ",
    prefecture: "和歌山県",
    file: "spring_each/kiikenonsen_kiimi_wakayama.html"
  },
  {
    name: "生地温泉",
    kana: "いくじ",
    prefecture: "富山県",
    file: "spring_each/kijionsen_ikuji_toyama.html"
  },
  {
    name: "菊池渓谷温泉",
    kana: "きくちけいこく",
    prefecture: "熊本県",
    file: "spring_each/kikuchikeikokuonsen_kikuchikeikoku_kumamoto.html"
  },
  {
    name: "菊池温泉",
    kana: "きくち",
    prefecture: "熊本県",
    file: "spring_each/kikuchionsen_kikuchi_kumamoto.html"
  },
  {
    name: "菊鹿温泉",
    kana: "きくか",
    prefecture: "熊本県",
    file: "spring_each/kikukaonsen_kikuka_kumamoto.html"
  },
  {
    name: "菊南温泉",
    kana: "きくなん",
    prefecture: "熊本県",
    file: "spring_each/kikuminamionsen_kikunan_kumamoto.html"
  },
  {
    name: "君田温泉",
    kana: "きみた",
    prefecture: "広島県",
    file: "spring_each/kimitaonsen_kimita_hiroshima.html"
  },
  {
    name: "金ヶ崎温泉",
    kana: "かながさき",
    prefecture: "秋田県",
    file: "spring_each/kinkesakionsen_kanagasaki_akita.html"
  },
  {
    name: "金桁温泉",
    kana: "かなけた",
    prefecture: "熊本県",
    file: "spring_each/kinketaonsen_kanaketa_kumamoto.html"
  },
  {
    name: "きのえ温泉",
    kana: "きのえ",
    prefecture: "広島県",
    file: "spring_each/kinoeonsen_kinoe_hiroshima.html"
  },
  {
    name: "城崎円山川ひだまり温泉",
    kana: "きのさきまるやまがわひだまり",
    prefecture: "兵庫県",
    file: "spring_each/kinosakimaruyamakawahidamarionsen_kinosakimaruyamagawahidamari_hyougo.html"
  },
  {
    name: "城崎円山川温泉",
    kana: "きのさきまるやまがわ",
    prefecture: "兵庫県",
    file: "spring_each/kinosakimaruyamakawaonsen_kinosakimaruyamagawa_hyougo.html"
  },
  {
    name: "城崎温泉",
    kana: "きのさき",
    prefecture: "兵庫県",
    file: "spring_each/kinosakionsen_kinosaki_hyougo.html"
  },
  {
    name: "錦帯橋温泉",
    kana: "きんたいきょう",
    prefecture: "山口県",
    file: "spring_each/kintaihashionsen_kintaikyou_yamaguchi.html"
  },
  {
    name: "衣笠温泉",
    kana: "きぬがさ",
    prefecture: "神奈川県",
    file: "spring_each/kinugasaonsen_kinugasa_kanagawa.html"
  },
  {
    name: "鬼怒川温泉",
    kana: "きぬがわ",
    prefecture: "栃木県",
    file: "spring_each/kinugawaonsen_kinugawa_tochigi.html"
  },
  {
    name: "吉良温泉",
    kana: "きら",
    prefecture: "愛知県",
    file: "spring_each/kiraonsen_kira_aichi.html"
  },
  {
    name: "麒麟山温泉",
    kana: "きりんざん",
    prefecture: "新潟県",
    file: "spring_each/kirinyamaonsen_kirinzan_niigata.html"
  },
  {
    name: "霧島神宮温泉",
    kana: "きりしまじんぐう",
    prefecture: "鹿児島県",
    file: "spring_each/kirishimajinguuonsen_kirishimajinguu_kakoshima.html"
  },
  {
    name: "霧島日当山温泉",
    kana: "きりしまひなたやま",
    prefecture: "鹿児島県",
    file: "spring_each/kirishimanittouyamaonsen_kirishimahinatayama_kakoshima.html"
  },
  {
    name: "霧島温泉郷",
    kana: "きりしま",
    prefecture: "鹿児島県",
    file: "spring_each/kirishimaonsensato_kirishima_kakoshima.html"
  },
  {
    name: "霧積温泉",
    kana: "きりづみ",
    prefecture: "群馬県",
    file: "spring_each/kirizumionsen_kirizumi_gunma.html"
  },
  {
    name: "キロロ温泉",
    kana: "きろろ",
    prefecture: "北海道",
    file: "spring_each/kiroroonsen_kiroro_hokkaidou.html"
  },
  {
    name: "木更津温泉",
    kana: "きさらづ",
    prefecture: "千葉県",
    file: "spring_each/kisarazuonsen_kisarazu_chiba.html"
  },
  {
    name: "紀州みなべ千里浜温泉",
    kana: "きしゅうみなべせんりはま",
    prefecture: "和歌山県",
    file: "spring_each/kishuuminabechirihamaonsen_kishuuminabesenrihama_wakayama.html"
  },
  {
    name: "紀州温泉",
    kana: "きしゅう",
    prefecture: "和歌山県",
    file: "spring_each/kishuuonsen_kishuu_wakayama.html"
  },
  {
    name: "木曽温泉",
    kana: "きそ",
    prefecture: "長野県",
    file: "spring_each/kisoonsen_kiso_nagano.html"
  },
  {
    name: "木曽御岳温泉",
    kana: "きそおんたけ",
    prefecture: "長野県",
    file: "spring_each/kisoontakeonsen_kisoontake_nagano.html"
  },
  {
    name: "北川温泉",
    kana: "ほっかわ",
    prefecture: "静岡県",
    file: "spring_each/kitagawaonsen_hokkawa_shizuoka.html"
  },
  {
    name: "北郷温泉",
    kana: "きたごう",
    prefecture: "宮崎県",
    file: "spring_each/kitagouonsen_kitagou_miyazaki.html"
  },
  {
    name: "北八ヶ岳松原湖温泉",
    kana: "きたやつがたけまつばらこ",
    prefecture: "長野県",
    file: "spring_each/kitahachikegakumatsubarakoonsen_kitayatsugatakematsubarako_nagano.html"
  },
  {
    name: "北広島温泉",
    kana: "きたひろしま",
    prefecture: "北海道",
    file: "spring_each/kitahiroshimaonsen_kitahiroshima_hokkaidou.html"
  },
  {
    name: "北見温泉",
    kana: "きたみ",
    prefecture: "北海道",
    file: "spring_each/kitamionsen_kitami_hokkaidou.html"
  },
  {
    name: "北温泉",
    kana: "きた",
    prefecture: "栃木県",
    file: "spring_each/kitaonsen_kita_tochigi.html"
  },
  {
    name: "北白川天然ラジウム温泉",
    kana: "きたしらかわてんねんらじうむ",
    prefecture: "京都府",
    file: "spring_each/kitashirakawatennenrajiumuonsen_kitashirakawatennenrajiumu_kyoutofu.html"
  },
  {
    name: "北橘温泉",
    kana: "きたたちばな",
    prefecture: "群馬県",
    file: "spring_each/kitatachibanaonsen_kitatachibana_gunma.html"
  },
  {
    name: "北湯沢温泉",
    kana: "きたゆざわ",
    prefecture: "北海道",
    file: "spring_each/kitayuzawaonsen_kitayuzawa_hokkaidou.html"
  },
  {
    name: "喜連川温泉",
    kana: "きつれがわ",
    prefecture: "栃木県",
    file: "spring_each/kitsuregawaonsen_kitsuregawa_tochigi.html"
  },
  {
    name: "清里高原KEEP温泉",
    kana: "きよさとこうげんきーぷ",
    prefecture: "山梨県",
    file: "spring_each/kiyosatokougenKEEPonsen_kiyosatokougenkiipu_yamanashi.html"
  },
  {
    name: "清里温泉",
    kana: "きよさと",
    prefecture: "北海道",
    file: "spring_each/kiyosatoonsen_kiyosato_hokkaidou.html"
  },
  {
    name: "木津温泉",
    kana: "きつ",
    prefecture: "京都府",
    file: "spring_each/kizuonsen_kitsu_kyoutofu.html"
  },
  {
    name: "小金湯温泉",
    kana: "こがねゆ",
    prefecture: "北海道",
    file: "spring_each/koganeyuonsen_koganeyu_hokkaidou.html"
  },
  {
    name: "小原温泉",
    kana: "おばら",
    prefecture: "宮城県",
    file: "spring_each/koharaonsen_obara_miyagi.html"
  },
  {
    name: "湖尻温泉",
    kana: "こじり",
    prefecture: "神奈川県",
    file: "spring_each/kojirionsen_kojiri_kanagawa.html"
  },
  {
    name: "九重温泉郷",
    kana: "くじゅう",
    prefecture: "大分県",
    file: "spring_each/kokonoeonsensato_kujuu_ooita.html"
  },
  {
    name: "志戸平温泉",
    kana: "しどたいら",
    prefecture: "岩手県",
    file: "spring_each/kokorozashikoheionizumi_shidotaira_iwate.html"
  },
  {
    name: "駒の湯温泉",
    kana: "静岡県）（こまのゆ",
    prefecture: "静岡県",
    file: "spring_each/komanoyuonizumi_1_shizuoka.html"
  },
  {
    name: "小湊温泉",
    kana: "こみなと",
    prefecture: "千葉県",
    file: "spring_each/kominatoonsen_kominato_chiba.html"
  },
  {
    name: "小室温泉",
    kana: "こむろ",
    prefecture: "静岡県",
    file: "spring_each/komuroonsen_komuro_shizuoka.html"
  },
  {
    name: "昆布川温泉",
    kana: "こんぶがわ",
    prefecture: "北海道",
    file: "spring_each/konbukawaonsen_konbugawa_hokkaidou.html"
  },
  {
    name: "こんぴら温泉郷",
    kana: "こんぴら",
    prefecture: "香川県",
    file: "spring_each/konpiraonsensato_konpira_kagawa.html"
  },
  {
    name: "小砂温泉",
    kana: "こいさご",
    prefecture: "栃木県",
    file: "spring_each/kosunaonsen_koisago_tochigi.html"
  },
  {
    name: "古湯温泉",
    kana: "ふるゆ",
    prefecture: "佐賀県",
    file: "spring_each/kotouonsen_furuyu_saga.html"
  },
  {
    name: "神戸ハーバーランド温泉",
    kana: "こうべはーばーらんど",
    prefecture: "兵庫県",
    file: "spring_each/koubehaabaarandoonsen_koubehaabaarando_hyougo.html"
  },
  {
    name: "神戸須磨温泉",
    kana: "こうべすま",
    prefecture: "兵庫県",
    file: "spring_each/koubesumaonsen_koubesuma_hyougo.html"
  },
  {
    name: "こうでら温泉",
    kana: "こうでら",
    prefecture: "兵庫県",
    file: "spring_each/kouderaonsen_koudera_hyougo.html"
  },
  {
    name: "高遠温泉",
    kana: "たかとお",
    prefecture: "長野県",
    file: "spring_each/kouenonsen_takatoo_nagano.html"
  },
  {
    name: "甲府温泉",
    kana: "こうふ",
    prefecture: "山梨県",
    file: "spring_each/koufuonsen_koufu_yamanashi.html"
  },
  {
    name: "甲府昭和温泉",
    kana: "こうふしょうわ",
    prefecture: "山梨県",
    file: "spring_each/koufushouwaonsen_koufushouwa_yamanashi.html"
  },
  {
    name: "甲賀温泉",
    kana: "こうが",
    prefecture: "滋賀県",
    file: "spring_each/koukaonsen_kouga_shiga.html"
  },
  {
    name: "こうのとり温泉",
    kana: "こうのとり",
    prefecture: "兵庫県",
    file: "spring_each/kounotorionsen_kounotori_hyougo.html"
  },
  {
    name: "鴻の鶴温泉",
    kana: "丹後町間人温泉郷）（こうのつる（たんごちょうたいざ）",
    prefecture: "京都府",
    file: "spring_each/kounotsuruonsen_1_kyoutofu.html"
  },
  {
    name: "郡山温泉",
    kana: "こおりやま",
    prefecture: "鹿児島県",
    file: "spring_each/kouriyamaonsen_kooriyama_kakoshima.html"
  },
  {
    name: "向屋温泉",
    kana: "こうや",
    prefecture: "群馬県",
    file: "spring_each/kouyaonsen_kouya_gunma.html"
  },
  {
    name: "高山温泉",
    kana: "たかやま",
    prefecture: "群馬県",
    file: "spring_each/kouzanonsen_takayama_gunma.html"
  },
  {
    name: "高山龍神温泉",
    kana: "たかやまりゅうじん",
    prefecture: "岐阜県",
    file: "spring_each/kouzanryuujinonsen_takayamaryuujin_gifu.html"
  },
  {
    name: "小涌谷温泉",
    kana: "こわきだに",
    prefecture: "神奈川県",
    file: "spring_each/kowakudanionsen_kowakidani_kanagawa.html"
  },
  {
    name: "湖山温泉",
    kana: "こやま",
    prefecture: "鳥取県",
    file: "spring_each/koyamaonsen_koyama_tottori.html"
  },
  {
    name: "口之津温泉",
    kana: "くちのつ",
    prefecture: "長崎県",
    file: "spring_each/kuchinotsuonsen_kuchinotsu_nagasaki.html"
  },
  {
    name: "口坂本温泉",
    kana: "くちさかもと",
    prefecture: "静岡県",
    file: "spring_each/kuchisakamotoonsen_kuchisakamoto_shizuoka.html"
  },
  {
    name: "久木野温泉",
    kana: "くぎの",
    prefecture: "熊本県",
    file: "spring_each/kuginoonsen_kugino_kumamoto.html"
  },
  {
    name: "久住温泉",
    kana: "くじゅう",
    prefecture: "大分県",
    file: "spring_each/kujuuonsen_kujuu_ooita.html"
  },
  {
    name: "熊野入鹿温泉",
    kana: "くまのいるか",
    prefecture: "三重県",
    file: "spring_each/kumanoirukaonsen_kumanoiruka_mie.html"
  },
  {
    name: "熊の川温泉",
    kana: "くまのかわ",
    prefecture: "佐賀県",
    file: "spring_each/kumanokawaonsen_kumanokawa_saga.html"
  },
  {
    name: "熊の湯ほたる温泉",
    kana: "くまのゆほたる",
    prefecture: "長野県",
    file: "spring_each/kumanoyuhotaruonsen_kumanoyuhotaru_nagano.html"
  },
  {
    name: "熊の湯硯川温泉",
    kana: "くまのゆすずりかわ",
    prefecture: "長野県",
    file: "spring_each/kumanoyusuzurikawaonsen_kumanoyusuzurikawa_nagano.html"
  },
  {
    name: "熊入温泉",
    kana: "くまいり",
    prefecture: "熊本県",
    file: "spring_each/kumanyuuonsen_kumairi_kumamoto.html"
  },
  {
    name: "久米川温泉",
    kana: "くめがわ",
    prefecture: "長野県",
    file: "spring_each/kumegawaonsen_kumegawa_nagano.html"
  },
  {
    name: "久美浜神の温泉",
    kana: "かんの",
    prefecture: "京都府",
    file: "spring_each/kumihamakaminoonsen_kanno_kyoutofu.html"
  },
  {
    name: "久美浜温泉",
    kana: "久美の浜温泉郷）（くみのはま（くみのはま）",
    prefecture: "京都府",
    file: "spring_each/kumihamaonsen_1_kyoutofu.html"
  },
  {
    name: "久美浜温泉",
    kana: "くみはま",
    prefecture: "京都府",
    file: "spring_each/kumihamaonsen_kumihama_kyoutofu.html"
  },
  {
    name: "久美浜シーサイド温泉",
    kana: "くみはましーさいど",
    prefecture: "京都府",
    file: "spring_each/kumihamashiisaidoonsen_kumihamashiisaido_kyoutofu.html"
  },
  {
    name: "久美の浜温泉郷",
    kana: "くみのはま",
    prefecture: "京都府",
    file: "spring_each/kuminohamaonsensato_kuminohama_kyoutofu.html"
  },
  {
    name: "雲見温泉",
    kana: "くもみ",
    prefecture: "静岡県",
    file: "spring_each/kumomionsen_kumomi_shizuoka.html"
  },
  {
    name: "くにさき六郷温泉",
    kana: "くにさきろくごう",
    prefecture: "大分県",
    file: "spring_each/kunisakirokugouonsen_kunisakirokugou_ooita.html"
  },
  {
    name: "倉渕川浦温泉",
    kana: "くらぶちかわうら",
    prefecture: "群馬県",
    file: "spring_each/kurabuchikawauraonsen_kurabuchikawaura_gunma.html"
  },
  {
    name: "倉渕温泉",
    kana: "くらぶち",
    prefecture: "群馬県",
    file: "spring_each/kurabuchionsen_kurabuchi_gunma.html"
  },
  {
    name: "くらま温泉",
    kana: "くらま",
    prefecture: "京都府",
    file: "spring_each/kuramaonsen_2_kyoutofu.html"
  },
  {
    name: "鞍馬温泉",
    kana: "くらま",
    prefecture: "京都府",
    file: "spring_each/kuramaonsen_kurama_kyoutofu.html"
  },
  {
    name: "倉真温泉",
    kana: "くらみ",
    prefecture: "静岡県",
    file: "spring_each/kuramionsen_kurami_shizuoka.html"
  },
  {
    name: "栗川温泉",
    kana: "くりかわ",
    prefecture: "鹿児島県",
    file: "spring_each/kurikawaonsen_kurikawa_kakoshima.html"
  },
  {
    name: "栗野岳温泉",
    kana: "くりのだけ",
    prefecture: "鹿児島県",
    file: "spring_each/kurinogakuonsen_kurinodake_kakoshima.html"
  },
  {
    name: "栗山温泉",
    kana: "くりやま",
    prefecture: "栃木県",
    file: "spring_each/kuriyamaonsen_kuriyama_tochigi.html"
  },
  {
    name: "黒姫温泉",
    kana: "くろひめ",
    prefecture: "長野県",
    file: "spring_each/kurohimeonsen_kurohime_nagano.html"
  },
  {
    name: "黒石温泉郷",
    kana: "くろいし",
    prefecture: "青森県",
    file: "spring_each/kuroishionsensato_kuroishi_aomori.html"
  },
  {
    name: "黒磯温泉",
    kana: "くろいそ",
    prefecture: "栃木県",
    file: "spring_each/kuroisoonsen_kuroiso_tochigi.html"
  },
  {
    name: "黒川温泉",
    kana: "くろかわ",
    prefecture: "熊本県",
    file: "spring_each/kurokawaonsen_kurokawa_kumamoto.html"
  },
  {
    name: "黒木温泉",
    kana: "くろき",
    prefecture: "福岡県",
    file: "spring_each/kurokionsen_kuroki_fukuoka.html"
  },
  {
    name: "黒沢温泉",
    kana: "くろさわ",
    prefecture: "山形県",
    file: "spring_each/kurosawaonsen_kurosawa_yamagata.html"
  },
  {
    name: "草塩温泉",
    kana: "くさしお",
    prefecture: "山梨県",
    file: "spring_each/kusashioonsen_kusashio_yamanashi.html"
  },
  {
    name: "草津温泉",
    kana: "くさつ",
    prefecture: "群馬県",
    file: "spring_each/kusatsuonsen_kusatsu_gunma.html"
  },
  {
    name: "串本温泉",
    kana: "くしもと",
    prefecture: "和歌山県",
    file: "spring_each/kushimotoonsen_kushimoto_wakayama.html"
  },
  {
    name: "屈斜路温泉",
    kana: "くっしゃろ",
    prefecture: "北海道",
    file: "spring_each/kussharoonsen_kussharo_hokkaidou.html"
  },
  {
    name: "楠川温泉",
    kana: "くすがわ",
    prefecture: "鹿児島県",
    file: "spring_each/kusunokikawaonsen_kusugawa_kakoshima.html"
  },
  {
    name: "玖珠温泉",
    kana: "くす",
    prefecture: "大分県",
    file: "spring_each/kusuonsen_kusu_ooita.html"
  },
  {
    name: "薬師温泉",
    kana: "やくし",
    prefecture: "群馬県",
    file: "spring_each/kusurishionsen_yakushi_gunma.html"
  },
  {
    name: "倶知安温泉",
    kana: "くっちゃん",
    prefecture: "北海道",
    file: "spring_each/kutchanonsen_kutchan_hokkaidou.html"
  },
  {
    name: "沓野温泉",
    kana: "くつの",
    prefecture: "長野県",
    file: "spring_each/kutsunoonsen_kutsuno_nagano.html"
  },
  {
    name: "くったり温泉",
    kana: "くったり",
    prefecture: "北海道",
    file: "spring_each/kuttarionsen_kuttari_hokkaidou.html"
  },
  {
    name: "九頭竜温泉",
    kana: "くずりゅう",
    prefecture: "福井県",
    file: "spring_each/kuzuryuuonsen_kuzuryuu_fukui.html"
  },
  {
    name: "京都温泉",
    kana: "きょうと",
    prefecture: "京都府",
    file: "spring_each/kyoutoonsen_kyouto_kyoutofu.html"
  },
  {
    name: "京都竹の郷温泉",
    kana: "きょうとたけのさと",
    prefecture: "京都府",
    file: "spring_each/kyoutotakenosatoonsen_kyoutotakenosato_kyoutofu.html"
  },
  {
    name: "休暇村乳頭温泉郷",
    kana: "きゅうかむらにゅうとう",
    prefecture: "秋田県",
    file: "spring_each/kyuukamuranyuutouonsensato_kyuukamuranyuutou_akita.html"
  },
  {
    name: "休暇村鹿沢高原雲井の湯",
    kana: "きゅうかむらかざわこうげんくもいのゆ",
    prefecture: "群馬県",
    file: "spring_each/kyuukamurashikazawakougenkumoinoyu_kyuukamurakazawakougenkumoinoyu_gunma.html"
  },
  {
    name: "九酔渓温泉",
    kana: "きゅうすいけい",
    prefecture: "大分県",
    file: "spring_each/kyuusuikeionsen_kyuusuikei_ooita.html"
  },
  {
    name: "まほらの湯",
    kana: "まほらのゆ",
    prefecture: "山梨県",
    file: "spring_each/mahoranoyu_mahoranoyu_yamanashi.html"
  },
  {
    name: "磨洞温泉",
    kana: "まどう",
    prefecture: "三重県",
    file: "spring_each/mahoraonsen_madou_mie.html"
  },
  {
    name: "舞子温泉",
    kana: "まいこ",
    prefecture: "新潟県",
    file: "spring_each/maikoonsen_maiko_niigata.html"
  },
  {
    name: "馬門温泉",
    kana: "まかど",
    prefecture: "青森県",
    file: "spring_each/makadoonsen_makado_aomori.html"
  },
  {
    name: "牧の戸温泉",
    kana: "まきのと",
    prefecture: "大分県",
    file: "spring_each/makinokoonsen_makinoto_ooita.html"
  },
  {
    name: "真木温泉",
    kana: "まぎ",
    prefecture: "山梨県",
    file: "spring_each/makionsen_magi_yamanashi.html"
  },
  {
    name: "真沢温泉",
    kana: "さなざわ",
    prefecture: "群馬県",
    file: "spring_each/makotosawaonsen_sanazawa_gunma.html"
  },
  {
    name: "幕別温泉",
    kana: "まくべつ",
    prefecture: "北海道",
    file: "spring_each/makubetsuonsen_makubetsu_hokkaidou.html"
  },
  {
    name: "満願寺温泉",
    kana: "まんがんじ",
    prefecture: "熊本県",
    file: "spring_each/manganteraonsen_manganji_kumamoto.html"
  },
  {
    name: "まにわ温泉",
    kana: "まにわ",
    prefecture: "岡山県",
    file: "spring_each/maniwaonsen_maniwa_okayama.html"
  },
  {
    name: "万座温泉",
    kana: "まんざ",
    prefecture: "群馬県",
    file: "spring_each/manzaonsen_manza_gunma.html"
  },
  {
    name: "丸駒温泉",
    kana: "まるこま",
    prefecture: "北海道",
    file: "spring_each/marukomaonsen_marukoma_hokkaidou.html"
  },
  {
    name: "丸沼温泉",
    kana: "まるぬま",
    prefecture: "群馬県",
    file: "spring_each/marunumaonsen_marunuma_gunma.html"
  },
  {
    name: "丸尾温泉",
    kana: "まるお",
    prefecture: "鹿児島県",
    file: "spring_each/maruoonsen_maruo_kakoshima.html"
  },
  {
    name: "益子温泉",
    kana: "ましこ",
    prefecture: "栃木県",
    file: "spring_each/mashikoonsen_mashiko_tochigi.html"
  },
  {
    name: "摩周温泉",
    kana: "ましゅう",
    prefecture: "北海道",
    file: "spring_each/mashuuonsen_mashuu_hokkaidou.html"
  },
  {
    name: "真玉温泉",
    kana: "またま",
    prefecture: "大分県",
    file: "spring_each/matamaonsen_matama_ooita.html"
  },
  {
    name: "まつだい芝峠温泉",
    kana: "まつだいしばとうげ",
    prefecture: "新潟県",
    file: "spring_each/matsudaishibatougeonsen_matsudaishibatouge_niigata.html"
  },
  {
    name: "松江しんじ湖温泉",
    kana: "まつえしんじこ",
    prefecture: "島根県",
    file: "spring_each/matsueshinjimizuumionsen_matsueshinjiko_shimane.html"
  },
  {
    name: "松泉宮温泉",
    kana: "しょうせんきゅう",
    prefecture: "宮崎県",
    file: "spring_each/matsuizumimiyaonsen_shousenkyuu_miyazaki.html"
  },
  {
    name: "松之山温泉",
    kana: "まつのやま",
    prefecture: "新潟県",
    file: "spring_each/matsunoyamaonsen_matsunoyama_niigata.html"
  },
  {
    name: "松の湯温泉",
    kana: "まつのゆ",
    prefecture: "群馬県",
    file: "spring_each/matsunoyuonizumi_matsunoyu_gunma.html"
  },
  {
    name: "祭畤温泉",
    kana: "まつるべ",
    prefecture: "岩手県",
    file: "spring_each/matsurijionsen_matsurube_iwate.html"
  },
  {
    name: "松島温泉",
    kana: "まつしま",
    prefecture: "熊本県",
    file: "spring_each/matsushimaonsen_matsushima_kumamoto.html"
  },
  {
    name: "松代温泉",
    kana: "まつしろ",
    prefecture: "長野県",
    file: "spring_each/matsushiroonsen_matsushiro_nagano.html"
  },
  {
    name: "松崎温泉",
    kana: "まつざき",
    prefecture: "静岡県",
    file: "spring_each/matsuzakionsen_matsuzaki_shizuoka.html"
  },
  {
    name: "松任海浜温泉",
    kana: "まっとうかいひん",
    prefecture: "石川県",
    file: "spring_each/mattoukaihinonsen_mattoukaihin_ishikawa.html"
  },
  {
    name: "馬瀬川温泉",
    kana: "まぜがわ",
    prefecture: "岐阜県",
    file: "spring_each/mazekawaonsen_mazegawa_gifu.html"
  },
  {
    name: "女鹿平温泉",
    kana: "めがひら",
    prefecture: "広島県",
    file: "spring_each/megahiraonsen_megahira_hiroshima.html"
  },
  {
    name: "女川温泉",
    kana: "おながわ",
    prefecture: "宮城県",
    file: "spring_each/megawaonsen_onagawa_miyagi.html"
  },
  {
    name: "馬頭温泉",
    kana: "ばとう",
    prefecture: "栃木県",
    file: "spring_each/mezuonsen_batou_tochigi.html"
  },
  {
    name: "みちのく城址温泉",
    kana: "みちのくじょうし",
    prefecture: "岩手県",
    file: "spring_each/michinokujoushionsen_michinokujoushi_iwate.html"
  },
  {
    name: "みはらし温泉",
    kana: "みはらし",
    prefecture: "広島県",
    file: "spring_each/miharashionsen_miharashi_hiroshima.html"
  },
  {
    name: "三保はごろも温泉",
    kana: "みほはごろも",
    prefecture: "静岡県",
    file: "spring_each/mihohagoromoonsen_mihohagoromo_shizuoka.html"
  },
  {
    name: "三川温泉",
    kana: "みかわ",
    prefecture: "新潟県",
    file: "spring_each/mikawaonsen_mikawa_niigata.html"
  },
  {
    name: "三ケ日温泉",
    kana: "みっかび",
    prefecture: "静岡県",
    file: "spring_each/mikkabionsen_mikkabi_shizuoka.html"
  },
  {
    name: "みくりが池温泉",
    kana: "みくりがいけ",
    prefecture: "富山県",
    file: "spring_each/mikurigaikeonsen_mikurigaike_toyama.html"
  },
  {
    name: "みなべ温泉",
    kana: "みなべ",
    prefecture: "和歌山県",
    file: "spring_each/minabeonsen_minabe_wakayama.html"
  },
  {
    name: "水上温泉",
    kana: "みなかみ",
    prefecture: "群馬県",
    file: "spring_each/minakamionsen_minakami_gunma.html"
  },
  {
    name: "南阿蘇温泉",
    kana: "阿蘇温泉郷）（みなみあそ（あそ）",
    prefecture: "熊本県",
    file: "spring_each/minamiasoonsen_1_kumamoto.html"
  },
  {
    name: "南阿蘇俵山温泉",
    kana: "阿蘇温泉郷）（みなみあそたわらやま（あそ）",
    prefecture: "熊本県",
    file: "spring_each/minamiasotawarayamaonsen_1_kumamoto.html"
  },
  {
    name: "南阿蘇栃木温泉",
    kana: "みなみあそとちのき",
    prefecture: "熊本県",
    file: "spring_each/minamiasotochigionsen_minamiasotochinoki_kumamoto.html"
  },
  {
    name: "南熱海",
    kana: "伊豆多賀）温泉（みなみあたみ（いずたが）",
    prefecture: "静岡県",
    file: "spring_each/minamiatami_1_shizuoka.html"
  },
  {
    name: "南熱海網代山温泉",
    kana: "みなみあたみあじろやま",
    prefecture: "静岡県",
    file: "spring_each/minamiatamiajiroyamaonsen_minamiatamiajiroyama_shizuoka.html"
  },
  {
    name: "南房総岩井温泉",
    kana: "みなみぼうそういわい",
    prefecture: "千葉県",
    file: "spring_each/minamibousouiwaionsen_minamibousouiwai_chiba.html"
  },
  {
    name: "南房総白浜温泉",
    kana: "みなみぼうそうしらはま",
    prefecture: "千葉県",
    file: "spring_each/minamibousoushirahamaonsen_minamibousoushirahama_chiba.html"
  },
  {
    name: "南知多温泉郷",
    kana: "みなみちた",
    prefecture: "愛知県",
    file: "spring_each/minamichitaonsensato_minamichita_aichi.html"
  },
  {
    name: "南知多山海温泉",
    kana: "みなみちたやまみ",
    prefecture: "愛知県",
    file: "spring_each/minamichitasankaionsen_minamichitayamami_aichi.html"
  },
  {
    name: "南田温泉",
    kana: "みなみだ",
    prefecture: "青森県",
    file: "spring_each/minamidaonsen_minamida_aomori.html"
  },
  {
    name: "南木曽富貴畑高原温泉郷",
    kana: "なぎそふきばたこうげん",
    prefecture: "長野県",
    file: "spring_each/minamigisofuukihatakekougenonsensato_nagisofukibatakougen_nagano.html"
  },
  {
    name: "南木曽温泉",
    kana: "なぎそ",
    prefecture: "長野県",
    file: "spring_each/minamigisoonsen_nagiso_nagano.html"
  },
  {
    name: "南伊豆・吉佐美温泉",
    kana: "みなみいず・きさみ",
    prefecture: "静岡県",
    file: "spring_each/minamiizukisamionsen_minamiizukisami_shizuoka.html"
  },
  {
    name: "南霧島隼人温泉",
    kana: "みなみきりしまはやと",
    prefecture: "鹿児島県",
    file: "spring_each/minamikirishimahayatoonsen_minamikirishimahayato_kakoshima.html"
  },
  {
    name: "南九州頴娃",
    kana: "みなみきゅうしゅう・えい",
    prefecture: "鹿児島県",
    file: "spring_each/minamikyuushuueia_minamikyuushuuei_kakoshima.html"
  },
  {
    name: "南小国温泉郷",
    kana: "みなみおぐに",
    prefecture: "熊本県",
    file: "spring_each/minamiogunionsensato_minamioguni_kumamoto.html"
  },
  {
    name: "南さつま・知覧温泉",
    kana: "みなみさつま・ちらん",
    prefecture: "鹿児島県",
    file: "spring_each/minamisatsumachiranonsen_minamisatsumachiran_kakoshima.html"
  },
  {
    name: "みさかの湯",
    kana: "みさかのゆ",
    prefecture: "山梨県",
    file: "spring_each/misakanoyu_misakanoyu_yamanashi.html"
  },
  {
    name: "三崎温泉",
    kana: "みさき",
    prefecture: "福島県",
    file: "spring_each/misakionsen_misaki_fukushima.html"
  },
  {
    name: "三朝温泉",
    kana: "みささ",
    prefecture: "鳥取県",
    file: "spring_each/misasaonsen_misasa_tottori.html"
  },
  {
    name: "三谷温泉",
    kana: "みや",
    prefecture: "愛知県",
    file: "spring_each/mitanionsen_miya_aichi.html"
  },
  {
    name: "三富温泉郷",
    kana: "みとみ",
    prefecture: "山梨県",
    file: "spring_each/mitomionsensato_mitomi_yamanashi.html"
  },
  {
    name: "三津浜・湯の花温泉",
    kana: "みとはま・ゆのはな",
    prefecture: "静岡県",
    file: "spring_each/mitsuhamayunohanaonsen_mitohamayunohana_shizuoka.html"
  },
  {
    name: "光徳温泉",
    kana: "こうとく",
    prefecture: "栃木県",
    file: "spring_each/mitsunorionsen_koutoku_tochigi.html"
  },
  {
    name: "三浦マホロバ温泉",
    kana: "みうらまほろば",
    prefecture: "神奈川県",
    file: "spring_each/miuramahorobaonsen_miuramahoroba_kanagawa.html"
  },
  {
    name: "みやばる温泉",
    kana: "みやばる",
    prefecture: "熊本県",
    file: "spring_each/miyabaruonsen_miyabaru_kumamoto.html"
  },
  {
    name: "宮城野温泉",
    kana: "みやぎの",
    prefecture: "神奈川県",
    file: "spring_each/miyaginoonsen_miyagino_kanagawa.html"
  },
  {
    name: "宮浜温泉",
    kana: "みやはま",
    prefecture: "広島県",
    file: "spring_each/miyahamaonsen_miyahama_hiroshima.html"
  },
  {
    name: "宮之城ちくりん温泉",
    kana: "みやのじょうちくりん",
    prefecture: "鹿児島県",
    file: "spring_each/miyanojouchikurinonsen_miyanojouchikurin_kakoshima.html"
  },
  {
    name: "宮之城温泉",
    kana: "みやのじょう",
    prefecture: "鹿児島県",
    file: "spring_each/miyanojouonsen_miyanojou_kakoshima.html"
  },
  {
    name: "宮ノ下温泉",
    kana: "みやのした",
    prefecture: "神奈川県",
    file: "spring_each/miyanoshitaonsen_miyanoshita_kanagawa.html"
  },
  {
    name: "宮沢温泉",
    kana: "みやざわ",
    prefecture: "宮城県",
    file: "spring_each/miyazawaonsen_miyazawa_miyagi.html"
  },
  {
    name: "宮津羽衣温泉",
    kana: "宮津の湯らゆら）（みやづはごろも",
    prefecture: "京都府",
    file: "spring_each/miyazuhagoromoonsen_1_kyoutofu.html"
  },
  {
    name: "宮津温泉",
    kana: "みやづ",
    prefecture: "京都府",
    file: "spring_each/miyazuonsen_miyazu_kyoutofu.html"
  },
  {
    name: "桃の木温泉",
    kana: "もものき",
    prefecture: "山梨県",
    file: "spring_each/momonokionsen_momonoki_yamanashi.html"
  },
  {
    name: "桃沢温泉",
    kana: "ももさわ",
    prefecture: "静岡県",
    file: "spring_each/momosawaonsen_momosawa_shizuoka.html"
  },
  {
    name: "桃山温泉",
    kana: "ももやま",
    prefecture: "京都府",
    file: "spring_each/momoyamaonsen_momoyama_kyoutofu.html"
  },
  {
    name: "紋別温泉",
    kana: "もんべつ",
    prefecture: "北海道",
    file: "spring_each/monbetsuonsen_monbetsu_hokkaidou.html"
  },
  {
    name: "元箱根温泉",
    kana: "もとはこね",
    prefecture: "神奈川県",
    file: "spring_each/motohakoneonsen_motohakone_kanagawa.html"
  },
  {
    name: "六日町温泉",
    kana: "むいかまち",
    prefecture: "新潟県",
    file: "spring_each/muikamachionsen_muikamachi_niigata.html"
  },
  {
    name: "向山温泉",
    kana: "むこうやま",
    prefecture: "群馬県",
    file: "spring_each/mukaiyamaonsen_mukouyama_gunma.html"
  },
  {
    name: "むかわの湯",
    kana: "むかわのゆ",
    prefecture: "山梨県",
    file: "spring_each/mukawanoyu_mukawanoyu_yamanashi.html"
  },
  {
    name: "紫尾温泉",
    kana: "しび",
    prefecture: "鹿児島県",
    file: "spring_each/murasakioonsen_shibi_kakoshima.html"
  },
  {
    name: "明礬温泉",
    kana: "別府温泉郷）（みょうばん（べっぷ）",
    prefecture: "大分県",
    file: "spring_each/myoubanonsen_1_ooita.html"
  },
  {
    name: "妙義温泉",
    kana: "みょうぎ",
    prefecture: "群馬県",
    file: "spring_each/myougionsen_myougi_gunma.html"
  },
  {
    name: "妙見温泉",
    kana: "みょうけん",
    prefecture: "鹿児島県",
    file: "spring_each/myoukenonsen_myouken_kakoshima.html"
  },
  {
    name: "妙高高原池の平温泉",
    kana: "みょうこうこうげんいけのたいら",
    prefecture: "新潟県",
    file: "spring_each/myoukoukougenikenoheionizumi_myoukoukougenikenotaira_niigata.html"
  },
  {
    name: "妙高高原燕温泉",
    kana: "みょうこうこうげんつばめ",
    prefecture: "新潟県",
    file: "spring_each/myoukoukougentsubameonsen_myoukoukougentsubame_niigata.html"
  },
  {
    name: "妙高温泉",
    kana: "みょうこう",
    prefecture: "新潟県",
    file: "spring_each/myoukouonsen_myoukou_niigata.html"
  },
  {
    name: "名張香落渓温泉",
    kana: "なばりこおちだに",
    prefecture: "三重県",
    file: "spring_each/nabarikyouochikeionsen_nabarikoochidani_mie.html"
  },
  {
    name: "苗場三国峠温泉",
    kana: "なえばみくにとうげ",
    prefecture: "新潟県",
    file: "spring_each/naebamikunitougeonsen_naebamikunitouge_niigata.html"
  },
  {
    name: "長浜太閤温泉",
    kana: "ながはまたいこう",
    prefecture: "滋賀県",
    file: "spring_each/nagahamataikouonsen_nagahamataikou_shiga.html"
  },
  {
    name: "永岡温泉",
    kana: "ながおか",
    prefecture: "岩手県",
    file: "spring_each/nagaokaonsen_nagaoka_iwate.html"
  },
  {
    name: "長良川温泉",
    kana: "ながらがわ",
    prefecture: "岐阜県",
    file: "spring_each/nagaragawaonsen_nagaragawa_gifu.html"
  },
  {
    name: "長島温泉",
    kana: "鹿児島県）（ながしま",
    prefecture: "鹿児島県",
    file: "spring_each/nagashimaonsen_1_kakoshima.html"
  },
  {
    name: "長島温泉",
    kana: "ながしま",
    prefecture: "三重県",
    file: "spring_each/nagashimaonsen_nagashima_mie.html"
  },
  {
    name: "長門峡温泉",
    kana: "ちょうもんきょう",
    prefecture: "山口県",
    file: "spring_each/nagatokyouonsen_choumonkyou_yamaguchi.html"
  },
  {
    name: "長門湯本温泉",
    kana: "ながとゆもと",
    prefecture: "山口県",
    file: "spring_each/nagatoyumotoonsen_nagatoyumoto_yamaguchi.html"
  },
  {
    name: "長湯温泉",
    kana: "ながゆ",
    prefecture: "大分県",
    file: "spring_each/nagayuonsen_nagayu_ooita.html"
  },
  {
    name: "内船温泉",
    kana: "うちぶな",
    prefecture: "山梨県",
    file: "spring_each/naifuneonsen_uchibuna_yamanashi.html"
  },
  {
    name: "奈女沢温泉",
    kana: "なめさわ",
    prefecture: "群馬県",
    file: "spring_each/najosawaonsen_namesawa_gunma.html"
  },
  {
    name: "中ノ沢温泉",
    kana: "なかのさわ",
    prefecture: "福島県",
    file: "spring_each/nakanosawaonsen_nakanosawa_fukushima.html"
  },
  {
    name: "中津川温泉",
    kana: "なかつがわ",
    prefecture: "岐阜県",
    file: "spring_each/nakatsugawaonsen_nakatsugawa_gifu.html"
  },
  {
    name: "中山平温泉",
    kana: "なかやまだいら",
    prefecture: "宮城県",
    file: "spring_each/nakayamaheionizumi_nakayamadaira_miyagi.html"
  },
  {
    name: "中里温泉",
    kana: "なかさと",
    prefecture: "神奈川県",
    file: "spring_each/nakazatoonsen_nakasato_kanagawa.html"
  },
  {
    name: "鉛温泉",
    kana: "なまり",
    prefecture: "岩手県",
    file: "spring_each/namarionsen_namari_iwate.html"
  },
  {
    name: "生竜温泉",
    kana: "いきりゅう",
    prefecture: "大分県",
    file: "spring_each/namaryuuonsen_ikiryuu_ooita.html"
  },
  {
    name: "滑川温泉",
    kana: "なめかわ",
    prefecture: "山形県",
    file: "spring_each/namerikawaonsen_namekawa_yamagata.html"
  },
  {
    name: "七沢温泉",
    kana: "ななさわ",
    prefecture: "神奈川県",
    file: "spring_each/nanasawaonsen_nanasawa_kanagawa.html"
  },
  {
    name: "南郷温泉",
    kana: "なんごう",
    prefecture: "滋賀県",
    file: "spring_each/nangouonsen_nangou_shiga.html"
  },
  {
    name: "南紀勝浦温泉",
    kana: "なんきかつうら",
    prefecture: "和歌山県",
    file: "spring_each/nankikatsuuraonsen_nankikatsuura_wakayama.html"
  },
  {
    name: "南紀白浜温泉",
    kana: "なんきしらはま",
    prefecture: "和歌山県",
    file: "spring_each/nankishirahamaonsen_nankishirahama_wakayama.html"
  },
  {
    name: "南紀太地温泉",
    kana: "なんきたいじ",
    prefecture: "和歌山県",
    file: "spring_each/nankitaijionsen_nankitaiji_wakayama.html"
  },
  {
    name: "南紀田辺温泉",
    kana: "なんきたなべ",
    prefecture: "和歌山県",
    file: "spring_each/nankitanabeonsen_nankitanabe_wakayama.html"
  },
  {
    name: "南幌温泉",
    kana: "なんぽろ",
    prefecture: "北海道",
    file: "spring_each/nanporoonsen_nanporo_hokkaidou.html"
  },
  {
    name: "奈良田の里温泉",
    kana: "ならたのさと",
    prefecture: "山梨県",
    file: "spring_each/naradanosatoonsen_naratanosato_yamanashi.html"
  },
  {
    name: "奈良田温泉",
    kana: "ならだ",
    prefecture: "山梨県",
    file: "spring_each/naradaonsen_narada_yamanashi.html"
  },
  {
    name: "成川温泉",
    kana: "なりかわ",
    prefecture: "鹿児島県",
    file: "spring_each/narikawaonsen_narikawa_kakoshima.html"
  },
  {
    name: "成田温泉",
    kana: "なりた",
    prefecture: "千葉県",
    file: "spring_each/naritaonsen_narita_chiba.html"
  },
  {
    name: "鳴子温泉",
    kana: "鳴子温泉郷）（ナルコ",
    prefecture: "宮城県",
    file: "spring_each/narukoonsen_1_miyagi.html"
  },
  {
    name: "鳴沢村天然温泉",
    kana: "なるさわむらてんねん",
    prefecture: "山梨県",
    file: "spring_each/narusawamuratennenonsen_narusawamuratennen_yamanashi.html"
  },
  {
    name: "梨木温泉",
    kana: "なしぎ",
    prefecture: "群馬県",
    file: "spring_each/nashikionsen_nashigi_gunma.html"
  },
  {
    name: "那須温泉",
    kana: "なす",
    prefecture: "栃木県",
    file: "spring_each/nasuonsen_nasu_tochigi.html"
  },
  {
    name: "那須湯本温泉",
    kana: "なすゆもと",
    prefecture: "栃木県",
    file: "spring_each/nasuyumotoonsen_nasuyumoto_tochigi.html"
  },
  {
    name: "夏油温泉",
    kana: "げとう",
    prefecture: "岩手県",
    file: "spring_each/natsuyuonizumi_getou_iwate.html"
  },
  {
    name: "ナウマン温泉",
    kana: "なうまん",
    prefecture: "北海道",
    file: "spring_each/naumanonsen_nauman_hokkaidou.html"
  },
  {
    name: "根府川温泉",
    kana: "ねぶかわ",
    prefecture: "神奈川県",
    file: "spring_each/nebukawaonsen_nebukawa_kanagawa.html"
  },
  {
    name: "ねぶた温泉",
    kana: "ねぶた",
    prefecture: "石川県",
    file: "spring_each/nebutaonsen_nebuta_ishikawa.html"
  },
  {
    name: "禰宜ノ畑温泉",
    kana: "ねぎのはた",
    prefecture: "静岡県",
    file: "spring_each/neginohatakeonsen_neginohata_shizuoka.html"
  },
  {
    name: "ねじめ温泉",
    kana: "ねじめ",
    prefecture: "鹿児島県",
    file: "spring_each/nejimeonsen_nejime_kakoshima.html"
  },
  {
    name: "猫魔温泉",
    kana: "ねこま",
    prefecture: "福島県",
    file: "spring_each/nekomaonsen_nekoma_fukushima.html"
  },
  {
    name: "猫啼温泉",
    kana: "ねこなき",
    prefecture: "福島県",
    file: "spring_each/nekoteionsen_nekonaki_fukushima.html"
  },
  {
    name: "熱塩温泉",
    kana: "あつしお",
    prefecture: "福島県",
    file: "spring_each/netsuenonsen_atsushio_fukushima.html"
  },
  {
    name: "新居浜温泉",
    kana: "静岡県）（あらいはま",
    prefecture: "静岡県",
    file: "spring_each/niihamaonsen_1_shizuoka.html"
  },
  {
    name: "日光温泉",
    kana: "にっこう",
    prefecture: "栃木県",
    file: "spring_each/nikkouonsen_nikkou_tochigi.html"
  },
  {
    name: "二ノ平温泉",
    kana: "にのたいら",
    prefecture: "神奈川県",
    file: "spring_each/ninoheionizumi_ninotaira_kanagawa.html"
  },
  {
    name: "韮崎旭温泉",
    kana: "にらさきあさひ",
    prefecture: "山梨県",
    file: "spring_each/nirasakiasahionsen_nirasakiasahi_yamanashi.html"
  },
  {
    name: "韮山温泉",
    kana: "にらやま",
    prefecture: "静岡県",
    file: "spring_each/nirayamaonsen_nirayama_shizuoka.html"
  },
  {
    name: "ニセコアンヌプリ温泉",
    kana: "にせこあんぬぷり",
    prefecture: "北海道",
    file: "spring_each/nisekoannupurionsen_nisekoannupuri_hokkaidou.html"
  },
  {
    name: "ニセコ駅前温泉",
    kana: "にせこえきまえ",
    prefecture: "北海道",
    file: "spring_each/nisekoekimaeonsen_nisekoekimae_hokkaidou.html"
  },
  {
    name: "ニセコ東山温泉",
    kana: "にせこひがしやま",
    prefecture: "北海道",
    file: "spring_each/nisekohigashiyamaonsen_nisekohigashiyama_hokkaidou.html"
  },
  {
    name: "ニセコ昆布温泉",
    kana: "こんぶ",
    prefecture: "北海道",
    file: "spring_each/nisekokonbuonsen_konbu_hokkaidou.html"
  },
  {
    name: "ニセコ薬師温泉",
    kana: "にせこやくし",
    prefecture: "北海道",
    file: "spring_each/nisekokusurishionsen_nisekoyakushi_hokkaidou.html"
  },
  {
    name: "ニセコモイワ山温泉",
    kana: "にせこもいわやま",
    prefecture: "北海道",
    file: "spring_each/nisekomoiwayamaonsen_nisekomoiwayama_hokkaidou.html"
  },
  {
    name: "ニセコ温泉郷",
    kana: "にせこ",
    prefecture: "北海道",
    file: "spring_each/nisekoonsensato_niseko_hokkaidou.html"
  },
  {
    name: "ニセコ黄金温泉",
    kana: "にせここがね",
    prefecture: "北海道",
    file: "spring_each/nisekoougononsen_nisekokogane_hokkaidou.html"
  },
  {
    name: "ニセコワイス高原温泉",
    kana: "にせこわいすこうげん",
    prefecture: "北海道",
    file: "spring_each/nisekowaisukougenonsen_nisekowaisukougen_hokkaidou.html"
  },
  {
    name: "ニセコ湯本温泉",
    kana: "にせこゆもと",
    prefecture: "北海道",
    file: "spring_each/nisekoyumotoonsen_nisekoyumoto_hokkaidou.html"
  },
  {
    name: "ニセコ湯の里温泉",
    kana: "にせこゆのさと",
    prefecture: "北海道",
    file: "spring_each/nisekoyunosatoonsen_nisekoyunosato_hokkaidou.html"
  },
  {
    name: "西会津温泉",
    kana: "にしあいづ",
    prefecture: "福島県",
    file: "spring_each/nishiaizuonsen_nishiaizu_fukushima.html"
  },
  {
    name: "西合志温泉",
    kana: "にしごうし",
    prefecture: "熊本県",
    file: "spring_each/nishigoushionsen_nishigoushi_kumamoto.html"
  },
  {
    name: "西木温泉",
    kana: "にしき",
    prefecture: "秋田県",
    file: "spring_each/nishikionsen_nishiki_akita.html"
  },
  {
    name: "西大沼温泉",
    kana: "にしおおぬま",
    prefecture: "北海道",
    file: "spring_each/nishioonumaonsen_nishioonuma_hokkaidou.html"
  },
  {
    name: "西谷温泉",
    kana: "にしたに",
    prefecture: "大分県",
    file: "spring_each/nishitanionsen_nishitani_ooita.html"
  },
  {
    name: "西丹沢・中川温泉",
    kana: "にしたんざわ・なかがわ",
    prefecture: "神奈川県",
    file: "spring_each/nishitanzawanakagawaonsen_nishitanzawanakagawa_kanagawa.html"
  },
  {
    name: "西浦温泉",
    kana: "にしうら",
    prefecture: "愛知県",
    file: "spring_each/nishiuraonsen_nishiura_aichi.html"
  },
  {
    name: "西山温泉",
    kana: "にしやま",
    prefecture: "山梨県",
    file: "spring_each/nishiyamaonsen_nishiyama_yamanashi.html"
  },
  {
    name: "二塚温泉",
    kana: "につか",
    prefecture: "京都府",
    file: "spring_each/nitsukaonsen_nitsuka_kyoutofu.html"
  },
  {
    name: "登別温泉",
    kana: "のぼりべつ",
    prefecture: "北海道",
    file: "spring_each/noboribetsuonsen_noboribetsu_hokkaidou.html"
  },
  {
    name: "野地温泉",
    kana: "のぢ",
    prefecture: "福島県",
    file: "spring_each/nojionsen_noji_fukushima.html"
  },
  {
    name: "野栗沢温泉",
    kana: "のぐりさわ",
    prefecture: "群馬県",
    file: "spring_each/nokurisawaonsen_nogurisawa_gunma.html"
  },
  {
    name: "野々湯温泉",
    kana: "ののゆ",
    prefecture: "鹿児島県",
    file: "spring_each/nonoyuonizumi_nonoyu_kakoshima.html"
  },
  {
    name: "乗鞍高原温泉",
    kana: "のりくらこうげん",
    prefecture: "長野県",
    file: "spring_each/norikurakougenonsen_norikurakougen_nagano.html"
  },
  {
    name: "乗鞍温泉郷",
    kana: "のりくら",
    prefecture: "長野県",
    file: "spring_each/norikuraonsensato_norikura_nagano.html"
  },
  {
    name: "野迫川温泉",
    kana: "のせがわ",
    prefecture: "奈良県",
    file: "spring_each/nosegawaonsen_nosegawa_nara.html"
  },
  {
    name: "能代温泉",
    kana: "のしろ",
    prefecture: "秋田県",
    file: "spring_each/noshiroonsen_noshiro_akita.html"
  },
  {
    name: "野沢温泉",
    kana: "のざわ",
    prefecture: "長野県",
    file: "spring_each/nozawaonsen_nozawa_nagano.html"
  },
  {
    name: "ぬかびら源泉郷",
    kana: "ぬかびらげんせんきょう",
    prefecture: "北海道",
    file: "spring_each/nukabiragensensato_nukabiragensenkyou_hokkaidou.html"
  },
  {
    name: "温井温泉",
    kana: "ぬくい",
    prefecture: "広島県",
    file: "spring_each/nukuionsen_nukui_hiroshima.html"
  },
  {
    name: "沼津温泉",
    kana: "ぬまづ",
    prefecture: "静岡県",
    file: "spring_each/numazuonsen_numazu_shizuoka.html"
  },
  {
    name: "入来温泉",
    kana: "いりき",
    prefecture: "鹿児島県",
    file: "spring_each/nyuuraionsen_iriki_kakoshima.html"
  },
  {
    name: "乳頭温泉郷",
    kana: "にゅうとう",
    prefecture: "秋田県",
    file: "spring_each/nyuutouonsensato_nyuutou_akita.html"
  },
  {
    name: "雄阿寒温泉",
    kana: "おあかん",
    prefecture: "北海道",
    file: "spring_each/oakanonsen_oakan_hokkaidou.html"
  },
  {
    name: "小浜温泉",
    kana: "おばま",
    prefecture: "長崎県",
    file: "spring_each/obamaonsen_obama_nagasaki.html"
  },
  {
    name: "帯広駅前温泉",
    kana: "おびひろえきまえ",
    prefecture: "北海道",
    file: "spring_each/obihiroekimaeonsen_obihiroekimae_hokkaidou.html"
  },
  {
    name: "帯広温泉",
    kana: "おびひろ",
    prefecture: "北海道",
    file: "spring_each/obihiroonsen_obihiro_hokkaidou.html"
  },
  {
    name: "小布施温泉",
    kana: "おぶせ",
    prefecture: "長野県",
    file: "spring_each/obuseonsen_obuse_nagano.html"
  },
  {
    name: "落合温泉",
    kana: "おちあい",
    prefecture: "青森県",
    file: "spring_each/ochiaionsen_ochiai_aomori.html"
  },
  {
    name: "小田温泉",
    kana: "おだ",
    prefecture: "熊本県",
    file: "spring_each/odaonsen_oda_kumamoto.html"
  },
  {
    name: "小田原温泉",
    kana: "おだわら",
    prefecture: "神奈川県",
    file: "spring_each/odawaraonsen_odawara_kanagawa.html"
  },
  {
    name: "小鹿野温泉",
    kana: "おがの",
    prefecture: "埼玉県",
    file: "spring_each/oganoonsen_ogano_saitama.html"
  },
  {
    name: "男鹿温泉",
    kana: "おが",
    prefecture: "秋田県",
    file: "spring_each/ogaonsen_oga_akita.html"
  },
  {
    name: "小川温泉",
    kana: "おがわ",
    prefecture: "富山県",
    file: "spring_each/ogawaonsen_ogawa_toyama.html"
  },
  {
    name: "岡山空港温泉",
    kana: "おかやまくうこう",
    prefecture: "岡山県",
    file: "spring_each/okayamakuukouonsen_okayamakuukou_okayama.html"
  },
  {
    name: "奥平温泉",
    kana: "おくだいら",
    prefecture: "群馬県",
    file: "spring_each/okudairaonsen_okudaira_gunma.html"
  },
  {
    name: "奥道後温泉",
    kana: "おくどうご",
    prefecture: "愛媛県",
    file: "spring_each/okudougoonsen_okudougo_ehime.html"
  },
  {
    name: "奥白馬温泉",
    kana: "おくはくば",
    prefecture: "長野県",
    file: "spring_each/okuhakubaonsen_okuhakuba_nagano.html"
  },
  {
    name: "奥橋立伊根温泉",
    kana: "おくはしだていね",
    prefecture: "京都府",
    file: "spring_each/okuhashidateineonsen_okuhashidateine_kyoutofu.html"
  },
  {
    name: "奥伊根温泉",
    kana: "おくいね",
    prefecture: "京都府",
    file: "spring_each/okuineonsen_okuine_kyoutofu.html"
  },
  {
    name: "奥軽井沢温泉",
    kana: "おくかるいざわ",
    prefecture: "群馬県",
    file: "spring_each/okukaruizawaonsen_okukaruizawa_gunma.html"
  },
  {
    name: "奥鬼怒温泉郷",
    kana: "おくきぬ",
    prefecture: "栃木県",
    file: "spring_each/okukidoonsensato_okukinu_tochigi.html"
  },
  {
    name: "奥日光湯元温泉",
    kana: "おくにっこうゆもと",
    prefecture: "栃木県",
    file: "spring_each/okunikkouyumotoonsen_okunikkouyumoto_tochigi.html"
  },
  {
    name: "奥塩原新湯温泉",
    kana: "おくしおばらあらゆ",
    prefecture: "栃木県",
    file: "spring_each/okushiobaraarayuonsen_okushiobaraarayu_tochigi.html"
  },
  {
    name: "奥只見折立温泉",
    kana: "おくただみおりたて",
    prefecture: "新潟県",
    file: "spring_each/okutadamioritateonsen_okutadamioritate_niigata.html"
  },
  {
    name: "奥蓼科温泉郷",
    kana: "おくたてしな",
    prefecture: "長野県",
    file: "spring_each/okutateshinaonsensato_okutateshina_nagano.html"
  },
  {
    name: "奥天竜不動温泉",
    kana: "オクテンリュウフドウ",
    prefecture: "長野県",
    file: "spring_each/okutenryuufudouonsen_okutenryuufudou_nagano.html"
  },
  {
    name: "奥利根温泉",
    kana: "水上温泉郷）（おくとね（みなかみ）",
    prefecture: "群馬県",
    file: "spring_each/okutoneonsen_1_gunma.html"
  },
  {
    name: "奥嬬恋温泉",
    kana: "おくつまごい",
    prefecture: "群馬県",
    file: "spring_each/okutsumagoionsen_okutsumagoi_gunma.html"
  },
  {
    name: "奥津温泉",
    kana: "おくつ",
    prefecture: "岡山県",
    file: "spring_each/okutsuonsen_okutsu_okayama.html"
  },
  {
    name: "奥矢作峡笹戸温泉",
    kana: "おくやはぎきょうささと",
    prefecture: "愛知県",
    file: "spring_each/okuyahagikyousasakoonsen_okuyahagikyousasato_aichi.html"
  },
  {
    name: "奥山温泉",
    kana: "おくやま",
    prefecture: "山梨県",
    file: "spring_each/okuyamaonsen_okuyama_yamanashi.html"
  },
  {
    name: "鬼首温泉",
    kana: "鳴子温泉郷）（おにこうべ（なるこ）",
    prefecture: "宮城県",
    file: "spring_each/onikoubeonsen_1_miyagi.html"
  },
  {
    name: "鬼押温泉",
    kana: "おにおし",
    prefecture: "群馬県",
    file: "spring_each/oniouonsen_onioshi_gunma.html"
  },
  {
    name: "御宿天然温泉",
    kana: "おんじゅくてんねん",
    prefecture: "千葉県",
    file: "spring_each/onjukutennenonsen_onjukutennen_chiba.html"
  },
  {
    name: "温根湯温泉",
    kana: "おんねゆ",
    prefecture: "北海道",
    file: "spring_each/onneyuonizumi_onneyu_hokkaidou.html"
  },
  {
    name: "おのがみ温泉",
    kana: "おのがみ",
    prefecture: "群馬県",
    file: "spring_each/onogamionsen_2_gunma.html"
  },
  {
    name: "小野上温泉",
    kana: "おのがみ",
    prefecture: "群馬県",
    file: "spring_each/onogamionsen_onogami_gunma.html"
  },
  {
    name: "小野川温泉",
    kana: "おのがわ",
    prefecture: "山形県",
    file: "spring_each/onokawaonsen_onogawa_yamagata.html"
  },
  {
    name: "小野小町温泉",
    kana: "おののこまち",
    prefecture: "京都府",
    file: "spring_each/onokomachionsen_ononokomachi_kyoutofu.html"
  },
  {
    name: "温泉センター諏訪の湯",
    kana: "せんたーすわのゆ",
    prefecture: "群馬県",
    file: "spring_each/onsensentaasuwanoyu_sentaasuwanoyu_gunma.html"
  },
  {
    name: "大洗温泉",
    kana: "おおあらい",
    prefecture: "茨城県",
    file: "spring_each/ooaraionsen_ooarai_ibaraki.html"
  },
  {
    name: "大歩危祖谷阿波温泉",
    kana: "おおぼけいやあわ",
    prefecture: "徳島県",
    file: "spring_each/oobokeiyaawaonsen_oobokeiyaawa_tokushima.html"
  },
  {
    name: "大歩危温泉",
    kana: "おおぼけ",
    prefecture: "徳島県",
    file: "spring_each/oobokeonsen_ooboke_tokushima.html"
  },
  {
    name: "大深温泉",
    kana: "おおぶか",
    prefecture: "秋田県",
    file: "spring_each/oofukaonsen_oobuka_akita.html"
  },
  {
    name: "大船上の湯温泉",
    kana: "おおふなかみのゆ",
    prefecture: "北海道",
    file: "spring_each/oofunauenoyuonizumi_oofunakaminoyu_hokkaidou.html"
  },
  {
    name: "大子温泉",
    kana: "だいご",
    prefecture: "茨城県",
    file: "spring_each/oogoonsen_daigo_ibaraki.html"
  },
  {
    name: "大胡温泉",
    kana: "おおご",
    prefecture: "群馬県",
    file: "spring_each/oogoonsen_oogo_gunma.html"
  },
  {
    name: "大口温泉",
    kana: "おおくち",
    prefecture: "鹿児島県",
    file: "spring_each/ooguchionsen_ookuchi_kakoshima.html"
  },
  {
    name: "大原温泉",
    kana: "おおはら",
    prefecture: "京都府",
    file: "spring_each/ooharaonsen_oohara_kyoutofu.html"
  },
  {
    name: "大仁温泉",
    kana: "おおひと",
    prefecture: "静岡県",
    file: "spring_each/oohitoonsen_oohito_shizuoka.html"
  },
  {
    name: "大堀温泉",
    kana: "おおほり",
    prefecture: "山形県",
    file: "spring_each/oohorionsen_oohori_yamagata.html"
  },
  {
    name: "大磯温泉",
    kana: "おおいそ",
    prefecture: "神奈川県",
    file: "spring_each/ooisoonsen_ooiso_kanagawa.html"
  },
  {
    name: "大分市内温泉",
    kana: "おおいたしない",
    prefecture: "大分県",
    file: "spring_each/ooitashinaionsen_ooitashinai_ooita.html"
  },
  {
    name: "大川温泉",
    kana: "おおかわ",
    prefecture: "静岡県",
    file: "spring_each/ookawaonsen_ookawa_shizuoka.html"
  },
  {
    name: "大町・籠川渓雲温泉",
    kana: "おおまちかごがわけいうん",
    prefecture: "長野県",
    file: "spring_each/oomachikagokawakeikumoonsen_oomachikagogawakeiun_nagano.html"
  },
  {
    name: "大町温泉郷",
    kana: "おおまち",
    prefecture: "長野県",
    file: "spring_each/oomachionsensato_oomachi_nagano.html"
  },
  {
    name: "大村温泉",
    kana: "おおむら",
    prefecture: "鹿児島県",
    file: "spring_each/oomuraonsen_oomura_kakoshima.html"
  },
  {
    name: "大室温泉",
    kana: "おおむろ",
    prefecture: "静岡県",
    file: "spring_each/oomuroonsen_oomuro_shizuoka.html"
  },
  {
    name: "大野目温泉",
    kana: "だいのめ",
    prefecture: "山形県",
    file: "spring_each/oonomeonsen_dainome_yamagata.html"
  },
  {
    name: "大沢温泉",
    kana: "兵庫県）（おおぞう",
    prefecture: "兵庫県",
    file: "spring_each/oosawaonsen_1_hyougo.html"
  },
  {
    name: "大沢温泉",
    kana: "おおさわ",
    prefecture: "静岡県",
    file: "spring_each/oosawaonsen_oosawa_shizuoka.html"
  },
  {
    name: "大沢山温泉",
    kana: "おおさわやま",
    prefecture: "新潟県",
    file: "spring_each/oosawayamaonsen_oosawayama_niigata.html"
  },
  {
    name: "大島鉱泉温泉",
    kana: "おしまこうせん",
    prefecture: "群馬県",
    file: "spring_each/ooshimakousenonsen_oshimakousen_gunma.html"
  },
  {
    name: "大塩裏磐梯温泉",
    kana: "おおしおうらばんだい",
    prefecture: "福島県",
    file: "spring_each/ooshiourabandaionsen_ooshiourabandai_fukushima.html"
  },
  {
    name: "大滝温泉",
    kana: "河津温泉郷）（おおだる（かわづ）",
    prefecture: "静岡県",
    file: "spring_each/ootakionsen_1_shizuoka.html"
  },
  {
    name: "大玉温泉",
    kana: "おおたま",
    prefecture: "福島県",
    file: "spring_each/ootamaonsen_ootama_fukushima.html"
  },
  {
    name: "大塚温泉",
    kana: "おおつか",
    prefecture: "群馬県",
    file: "spring_each/ootsukaonsen_ootsuka_gunma.html"
  },
  {
    name: "大鰐温泉",
    kana: "おおわに",
    prefecture: "青森県",
    file: "spring_each/oowanionsen_oowani_aomori.html"
  },
  {
    name: "大山温泉",
    kana: "だいせん",
    prefecture: "鳥取県",
    file: "spring_each/ooyamaonsen_daisen_tottori.html"
  },
  {
    name: "大雪高原温泉",
    kana: "だいせつこうげん",
    prefecture: "北海道",
    file: "spring_each/ooyukikougenonsen_daisetsukougen_hokkaidou.html"
  },
  {
    name: "大湯温泉",
    kana: "おおゆ",
    prefecture: "新潟県",
    file: "spring_each/ooyuonsen_ooyu_niigata.html"
  },
  {
    name: "長万部温泉",
    kana: "おしゃまんべ",
    prefecture: "北海道",
    file: "spring_each/oshamanbeonsen_oshamanbe_hokkaidou.html"
  },
  {
    name: "小樽運河の湯",
    kana: "おたるうんがのゆ",
    prefecture: "北海道",
    file: "spring_each/otaruunganoyu_otaruunganoyu_hokkaidou.html"
  },
  {
    name: "扇温泉",
    kana: "おうぎ",
    prefecture: "熊本県",
    file: "spring_each/ougionsen_ougi_kumamoto.html"
  },
  {
    name: "青梅石神温泉",
    kana: "おうめいしがみ",
    prefecture: "東京都",
    file: "spring_each/oumeishigamionsen_oumeishigami_toukyouto.html"
  },
  {
    name: "奥武雄温泉",
    kana: "おくたけお",
    prefecture: "佐賀県",
    file: "spring_each/ouosuonsen_okutakeo_saga.html"
  },
  {
    name: "鶯宿温泉",
    kana: "おうしゅく",
    prefecture: "岩手県",
    file: "spring_each/oushukuonsen_oushuku_iwate.html"
  },
  {
    name: "奥州平泉温泉",
    kana: "おうしゅうひらいずみ",
    prefecture: "岩手県",
    file: "spring_each/oushuuhiraizumionsen_oushuuhiraizumi_iwate.html"
  },
  {
    name: "応徳温泉",
    kana: "おうとく",
    prefecture: "群馬県",
    file: "spring_each/outokuonsen_outoku_gunma.html"
  },
  {
    name: "御湯船温泉",
    kana: "おゆぶね",
    prefecture: "熊本県",
    file: "spring_each/oyubuneonsen_oyubune_kumamoto.html"
  },
  {
    name: "尾之間温泉",
    kana: "おのあいだ",
    prefecture: "鹿児島県",
    file: "spring_each/oyukikanonsen_onoaida_kakoshima.html"
  },
  {
    name: "尾瀬片品温泉",
    kana: "おぜかたしな",
    prefecture: "群馬県",
    file: "spring_each/ozekatashinaonsen_ozekatashina_gunma.html"
  },
  {
    name: "尾瀬戸倉温泉",
    kana: "おぜとくら",
    prefecture: "群馬県",
    file: "spring_each/ozetokuraonsen_ozetokura_gunma.html"
  },
  {
    name: "尾瀬・土出温泉",
    kana: "おぜ・つちで",
    prefecture: "群馬県",
    file: "spring_each/ozetsuchishutsuonsen_ozetsuchide_gunma.html"
  },
  {
    name: "離湖弁天温泉",
    kana: "はなれこべんてん",
    prefecture: "京都府",
    file: "spring_each/rimizuumibentenonsen_hanarekobenten_kyoutofu.html"
  },
  {
    name: "りんりんパークー温泉",
    kana: "りんりんぱーくー",
    prefecture: "愛媛県",
    file: "spring_each/rinrinpaakuuonsen_rinrinpaakuu_ehime.html"
  },
  {
    name: "利尻富士温泉",
    kana: "りしりふじ",
    prefecture: "北海道",
    file: "spring_each/rishirifujionsen_rishirifuji_hokkaidou.html"
  },
  {
    name: "立久恵峡温泉",
    kana: "たちくえきょう",
    prefecture: "島根県",
    file: "spring_each/ritsuhisaekyouonsen_tachikuekyou_shimane.html"
  },
  {
    name: "六ケ迫鉱泉",
    kana: "鷺ヶ迫温泉）（ろっかさここうせん",
    prefecture: "大分県",
    file: "spring_each/rokukesakokousen_1_ooita.html"
  },
  {
    name: "ロマントピア温泉",
    kana: "ろまんとぴあ",
    prefecture: "青森県",
    file: "spring_each/romantopiaonsen_romantopia_aomori.html"
  },
  {
    name: "老神温泉",
    kana: "おいがみ",
    prefecture: "群馬県",
    file: "spring_each/roukamionsen_oigami_gunma.html"
  },
  {
    name: "るり渓温泉",
    kana: "るりけい",
    prefecture: "京都府",
    file: "spring_each/rurikeionsen_rurikei_kyoutofu.html"
  },
  {
    name: "るり温泉",
    kana: "るり",
    prefecture: "滋賀県",
    file: "spring_each/rurionsen_ruri_shiga.html"
  },
  {
    name: "ルスツ温泉",
    kana: "るすつ",
    prefecture: "北海道",
    file: "spring_each/rusutsuonsen_rusutsu_hokkaidou.html"
  },
  {
    name: "りょうぜん新温泉",
    kana: "りょうぜんしん",
    prefecture: "京都府",
    file: "spring_each/ryouzenshinonsen_ryouzenshin_kyoutofu.html"
  },
  {
    name: "龍神温泉",
    kana: "りゅうじん",
    prefecture: "和歌山県",
    file: "spring_each/ryuujinonsen_ryuujin_wakayama.html"
  },
  {
    name: "竜門温泉",
    kana: "りゅうもん",
    prefecture: "大分県",
    file: "spring_each/ryuumononsen_ryuumon_ooita.html"
  },
  {
    name: "龍温泉",
    kana: "りゅう",
    prefecture: "広島県",
    file: "spring_each/ryuuonsen_ryuu_hiroshima.html"
  },
  {
    name: "竜王ラドン温泉",
    kana: "りゅうおうらどん",
    prefecture: "山梨県",
    file: "spring_each/ryuuouradononsen_ryuuouradon_yamanashi.html"
  },
  {
    name: "佐渡加茂湖温泉",
    kana: "さどかもこ",
    prefecture: "新潟県",
    file: "spring_each/sadokamomizuumionsen_sadokamoko_niigata.html"
  },
  {
    name: "佐渡島椎崎温泉",
    kana: "さどがしましいざき",
    prefecture: "新潟県",
    file: "spring_each/sadoshimashiizakionsen_sadogashimashiizaki_niigata.html"
  },
  {
    name: "佐伯温泉",
    kana: "さいき",
    prefecture: "大分県",
    file: "spring_each/saekionsen_saiki_ooita.html"
  },
  {
    name: "佐賀大和温泉",
    kana: "さがやまと",
    prefecture: "佐賀県",
    file: "spring_each/sagadaiwaonsen_sagayamato_saga.html"
  },
  {
    name: "嵯峨塩鉱泉",
    kana: "さがしお",
    prefecture: "山梨県",
    file: "spring_each/sagaenkouizumi_sagashio_yamanashi.html"
  },
  {
    name: "嵯峨沢温泉",
    kana: "さがさわ",
    prefecture: "静岡県",
    file: "spring_each/sagasawaonsen_sagasawa_shizuoka.html"
  },
  {
    name: "西海橋温泉",
    kana: "さいかいばし",
    prefecture: "長崎県",
    file: "spring_each/saikaihashionsen_saikaibashi_nagasaki.html"
  },
  {
    name: "榊原温泉",
    kana: "さかきばら",
    prefecture: "三重県",
    file: "spring_each/sakakibaraonsen_sakakibara_mie.html"
  },
  {
    name: "坂本温泉",
    kana: "さかもと",
    prefecture: "鹿児島県",
    file: "spring_each/sakamotoonsen_sakamoto_kakoshima.html"
  },
  {
    name: "裂石温泉",
    kana: "さけいし",
    prefecture: "山梨県",
    file: "spring_each/sakeishionsen_sakeishi_yamanashi.html"
  },
  {
    name: "咲花温泉",
    kana: "さきはな",
    prefecture: "新潟県",
    file: "spring_each/sakikaonsen_sakihana_niigata.html"
  },
  {
    name: "佐久一萬里温泉",
    kana: "さくいちまんり",
    prefecture: "長野県",
    file: "spring_each/sakuichimansatoonsen_sakuichimanri_nagano.html"
  },
  {
    name: "作並温泉",
    kana: "さくなみ",
    prefecture: "宮城県",
    file: "spring_each/sakunamionsen_sakunami_miyagi.html"
  },
  {
    name: "桜田温泉",
    kana: "さくらだ",
    prefecture: "静岡県",
    file: "spring_each/sakuradaonsen_sakurada_shizuoka.html"
  },
  {
    name: "桜川温泉",
    kana: "さくらがわ",
    prefecture: "群馬県",
    file: "spring_each/sakuragawaonsen_sakuragawa_gunma.html"
  },
  {
    name: "さくらんぼ東根温泉",
    kana: "さくらんぼひがしね",
    prefecture: "山形県",
    file: "spring_each/sakuranbohigashineonsen_sakuranbohigashine_yamagata.html"
  },
  {
    name: "桜島マグマ温泉",
    kana: "さくらじままぐま",
    prefecture: "鹿児島県",
    file: "spring_each/sakurashimamagumaonsen_sakurajimamaguma_kakoshima.html"
  },
  {
    name: "作州武蔵温泉",
    kana: "さくしゅうむさし",
    prefecture: "岡山県",
    file: "spring_each/sakushuumusashionsen_sakushuumusashi_okayama.html"
  },
  {
    name: "猿投温泉",
    kana: "さなげ",
    prefecture: "愛知県",
    file: "spring_each/sanageonsen_sanage_aichi.html"
  },
  {
    name: "三瓶温泉",
    kana: "さんべ",
    prefecture: "島根県",
    file: "spring_each/sanbeonsen_sanbe_shimane.html"
  },
  {
    name: "山中温泉",
    kana: "加賀温泉郷）（やまなか（かが）",
    prefecture: "石川県",
    file: "spring_each/sanchuuonsen_1_ishikawa.html"
  },
  {
    name: "酸ヶ湯温泉",
    kana: "すかゆ",
    prefecture: "青森県",
    file: "spring_each/sankeyuonizumi_sukayu_aomori.html"
  },
  {
    name: "三内峡温泉",
    kana: "さんないきょう",
    prefecture: "秋田県",
    file: "spring_each/sannaikyouonsen_sannaikyou_akita.html"
  },
  {
    name: "佐野川温泉",
    kana: "さのがわ",
    prefecture: "山梨県",
    file: "spring_each/sanokawaonsen_sanogawa_yamanashi.html"
  },
  {
    name: "三翠園温泉",
    kana: "さんすいえん",
    prefecture: "高知県",
    file: "spring_each/sansuisonoonsen_sansuien_kouchi.html"
  },
  {
    name: "札幌大通温泉",
    kana: "さっぽろおおどおり",
    prefecture: "北海道",
    file: "spring_each/sapporooodoorionsen_sapporooodoori_hokkaidou.html"
  },
  {
    name: "猿川温泉",
    kana: "さるかわ",
    prefecture: "群馬県",
    file: "spring_each/sarukawaonsen_sarukawa_gunma.html"
  },
  {
    name: "猿ヶ京温泉",
    kana: "さるがきょう",
    prefecture: "群馬県",
    file: "spring_each/sarukekyouonsen_sarugakyou_gunma.html"
  },
  {
    name: "笹原温泉",
    kana: "河津）（ささはら（かわづ）",
    prefecture: "静岡県",
    file: "spring_each/sasaharaonsen_1_shizuoka.html"
  },
  {
    name: "笹倉温泉",
    kana: "ささくら",
    prefecture: "新潟県",
    file: "spring_each/sasakuraonsen_sasakura_niigata.html"
  },
  {
    name: "佐里温泉",
    kana: "さり",
    prefecture: "佐賀県",
    file: "spring_each/sasatoonsen_sari_saga.html"
  },
  {
    name: "笹谷温泉",
    kana: "ささや",
    prefecture: "宮城県",
    file: "spring_each/sasayaonsen_sasaya_miyagi.html"
  },
  {
    name: "さとわき湧玉の湯",
    kana: "さとわきわくたまのゆ",
    prefecture: "兵庫県",
    file: "spring_each/satowakiyuutamanoyu_satowakiwakutamanoyu_hyougo.html"
  },
  {
    name: "佐津温泉",
    kana: "さづ",
    prefecture: "兵庫県",
    file: "spring_each/satsuonsen_sazu_hyougo.html"
  },
  {
    name: "沢渡温泉",
    kana: "さわたり",
    prefecture: "群馬県",
    file: "spring_each/sawatarionsen_sawatari_gunma.html"
  },
  {
    name: "瀬美温泉",
    kana: "せみ",
    prefecture: "岩手県",
    file: "spring_each/sebionsen_semi_iwate.html"
  },
  {
    name: "聖籠温泉",
    kana: "せいろう",
    prefecture: "新潟県",
    file: "spring_each/seirouonsen_seirou_niigata.html"
  },
  {
    name: "瀬見温泉",
    kana: "せみ",
    prefecture: "山形県",
    file: "spring_each/sekenonsen_semi_yamagata.html"
  },
  {
    name: "セキアヒルズ温泉",
    kana: "せきあひるず",
    prefecture: "熊本県",
    file: "spring_each/sekiahiruzuonsen_sekiahiruzu_kumamoto.html"
  },
  {
    name: "石道温泉",
    kana: "いしみち",
    prefecture: "兵庫県",
    file: "spring_each/sekidouonsen_ishimichi_hyougo.html"
  },
  {
    name: "関金温泉",
    kana: "せきがね",
    prefecture: "鳥取県",
    file: "spring_each/sekiganeonsen_sekigane_tottori.html"
  },
  {
    name: "瀬波温泉",
    kana: "せなみ",
    prefecture: "新潟県",
    file: "spring_each/senamionsen_senami_niigata.html"
  },
  {
    name: "船尾の湯",
    kana: "ふなおのゆ",
    prefecture: "群馬県",
    file: "spring_each/senbinoyu_funaonoyu_gunma.html"
  },
  {
    name: "千貫石温泉",
    kana: "せんがんいし",
    prefecture: "岩手県",
    file: "spring_each/senganishionsen_senganishi_iwate.html"
  },
  {
    name: "仙石原姥子温泉",
    kana: "せんごくはらうばこ",
    prefecture: "神奈川県",
    file: "spring_each/sengokuharaubakoonsen_sengokuharaubako_kanagawa.html"
  },
  {
    name: "銭川温泉",
    kana: "ぜにかわ",
    prefecture: "秋田県",
    file: "spring_each/senkawaonsen_zenikawa_akita.html"
  },
  {
    name: "筌ノ口温泉",
    kana: "うけのくち",
    prefecture: "大分県",
    file: "spring_each/sennokuchionsen_ukenokuchi_ooita.html"
  },
  {
    name: "泉温泉健康センター",
    kana: "いずみけんこうせんたー",
    prefecture: "山梨県",
    file: "spring_each/senonizumikenkousentaa_izumikenkousentaa_yamanashi.html"
  },
  {
    name: "仙酔峡温泉",
    kana: "せんすいきょう",
    prefecture: "熊本県",
    file: "spring_each/sensuikyouonsen_sensuikyou_kumamoto.html"
  },
  {
    name: "瀬戸大橋温泉",
    kana: "せとおおはし",
    prefecture: "香川県",
    file: "spring_each/setooohashionsen_setooohashi_kagawa.html"
  },
  {
    name: "接岨峡温泉",
    kana: "せっそきょう",
    prefecture: "静岡県",
    file: "spring_each/setsusokyouonsen_sessokyou_shizuoka.html"
  },
  {
    name: "しあわせ温泉",
    kana: "しあわせ",
    prefecture: "千葉県",
    file: "spring_each/shiawaseonsen_shiawase_chiba.html"
  },
  {
    name: "柴石温泉",
    kana: "しばせき",
    prefecture: "大分県",
    file: "spring_each/shibaishionsen_shibaseki_ooita.html"
  },
  {
    name: "標津川温泉",
    kana: "しべつがわ",
    prefecture: "北海道",
    file: "spring_each/shibetsukawaonsen_shibetsugawa_hokkaidou.html"
  },
  {
    name: "渋温泉",
    kana: "しぶ",
    prefecture: "長野県",
    file: "spring_each/shibuonsen_shibu_nagano.html"
  },
  {
    name: "志布志温泉",
    kana: "しぶし",
    prefecture: "鹿児島県",
    file: "spring_each/shibushionsen_shibushi_kakoshima.html"
  },
  {
    name: "七城温泉",
    kana: "しちじょう",
    prefecture: "熊本県",
    file: "spring_each/shichijouonsen_shichijou_kumamoto.html"
  },
  {
    name: "七釜温泉",
    kana: "しちかま",
    prefecture: "兵庫県",
    file: "spring_each/shichikamaonsen_shichikama_hyougo.html"
  },
  {
    name: "七味温泉",
    kana: "しちみ",
    prefecture: "長野県",
    file: "spring_each/shichimionsen_shichimi_nagano.html"
  },
  {
    name: "七里田温泉",
    kana: "しちりだ",
    prefecture: "大分県",
    file: "spring_each/shichiritaonsen_shichirida_ooita.html"
  },
  {
    name: "七滝温泉",
    kana: "河津温泉郷）（ななだる（かわづ）",
    prefecture: "静岡県",
    file: "spring_each/shichitakionsen_1_shizuoka.html"
  },
  {
    name: "志太温泉",
    kana: "しだ",
    prefecture: "静岡県",
    file: "spring_each/shidaonsen_shida_shizuoka.html"
  },
  {
    name: "志賀高原幕岩温泉",
    kana: "しがこうげんまくいわ",
    prefecture: "長野県",
    file: "spring_each/shigakougenmakuiwaonsen_shigakougenmakuiwa_nagano.html"
  },
  {
    name: "志賀の郷温泉",
    kana: "しかのさと",
    prefecture: "石川県",
    file: "spring_each/shiganosatoonsen_shikanosato_ishikawa.html"
  },
  {
    name: "信貴山温泉",
    kana: "しぎさん",
    prefecture: "奈良県",
    file: "spring_each/shigiyamaonsen_shigisan_nara.html"
  },
  {
    name: "市比野温泉",
    kana: "いちひの",
    prefecture: "鹿児島県",
    file: "spring_each/shihinoonsen_ichihino_kakoshima.html"
  },
  {
    name: "しほろ温泉",
    kana: "しほろ",
    prefecture: "北海道",
    file: "spring_each/shihoroonsen_shihoro_hokkaidou.html"
  },
  {
    name: "鹿部温泉",
    kana: "しかべ",
    prefecture: "北海道",
    file: "spring_each/shikabeonsen_shikabe_hokkaidou.html"
  },
  {
    name: "然別湖畔温泉",
    kana: "しかりべつこはん",
    prefecture: "北海道",
    file: "spring_each/shikaribetsukoazeonsen_shikaribetsukohan_hokkaidou.html"
  },
  {
    name: "然別峡菅野温泉",
    kana: "しかりべつきょうかんの",
    prefecture: "北海道",
    file: "spring_each/shikaribetsukyoukannoonsen_shikaribetsukyoukanno_hokkaidou.html"
  },
  {
    name: "鹿沢温泉",
    kana: "かざわ",
    prefecture: "群馬県",
    file: "spring_each/shikazawaonsen_kazawa_gunma.html"
  },
  {
    name: "敷島温泉",
    kana: "しきしま",
    prefecture: "群馬県",
    file: "spring_each/shikishimaonsen_shikishima_gunma.html"
  },
  {
    name: "支笏湖温泉",
    kana: "しこつこ",
    prefecture: "北海道",
    file: "spring_each/shikotsukoonsen_shikotsuko_hokkaidou.html"
  },
  {
    name: "島原温泉",
    kana: "しまばら",
    prefecture: "長崎県",
    file: "spring_each/shimabaraonsen_shimabara_nagasaki.html"
  },
  {
    name: "志摩・浜島温泉郷",
    kana: "しま・はまじま",
    prefecture: "三重県",
    file: "spring_each/shimahamashimaonsensato_shimahamajima_mie.html"
  },
  {
    name: "志摩磯部ひまわりの湯",
    kana: "しまいそべひまわりのゆ",
    prefecture: "三重県",
    file: "spring_each/shimaisobehimawarinoyu_shimaisobehimawarinoyu_mie.html"
  },
  {
    name: "志摩奥志摩温泉",
    kana: "しまおくしま",
    prefecture: "三重県",
    file: "spring_each/shimaokushimaonsen_shimaokushima_mie.html"
  },
  {
    name: "四万温泉",
    kana: "しま",
    prefecture: "群馬県",
    file: "spring_each/shimaonsen_shima_gunma.html"
  },
  {
    name: "志摩ともやま温泉",
    kana: "しまともやま",
    prefecture: "三重県",
    file: "spring_each/shimatomoyamaonsen_shimatomoyama_mie.html"
  },
  {
    name: "下田温泉",
    kana: "しもだ",
    prefecture: "静岡県",
    file: "spring_each/shimodaonsen_shimoda_shizuoka.html"
  },
  {
    name: "下田蓮台寺温泉",
    kana: "しもだれんだいじ",
    prefecture: "静岡県",
    file: "spring_each/shimodarendaijionsen_shimodarendaiji_shizuoka.html"
  },
  {
    name: "下賀茂温泉",
    kana: "しもかも",
    prefecture: "静岡県",
    file: "spring_each/shimogamoonsen_shimokamo_shizuoka.html"
  },
  {
    name: "下條温泉",
    kana: "しもじょう",
    prefecture: "長野県",
    file: "spring_each/shimojouonsen_shimojou_nagano.html"
  },
  {
    name: "下仁田温泉",
    kana: "しもにた",
    prefecture: "群馬県",
    file: "spring_each/shimonitaonsen_shimonita_gunma.html"
  },
  {
    name: "下諏訪温泉諏訪湖温泉郷",
    kana: "しもすわ（すわこ）",
    prefecture: "長野県",
    file: "spring_each/shimosuwaonsensuwamizuumionsensato_1_nagano.html"
  },
  {
    name: "新安比温泉",
    kana: "しんあっぴ",
    prefecture: "岩手県",
    file: "spring_each/shinanhionsen_shinappi_iwate.html"
  },
  {
    name: "新大秋温泉",
    kana: "しんたいあき",
    prefecture: "青森県",
    file: "spring_each/shindaiakionsen_shintaiaki_aomori.html"
  },
  {
    name: "新穂高温泉",
    kana: "しんほたか",
    prefecture: "岐阜県",
    file: "spring_each/shinhodakaonsen_shinhotaka_gifu.html"
  },
  {
    name: "新川渓谷温泉郷",
    kana: "しんかわけいこく",
    prefecture: "鹿児島県",
    file: "spring_each/shinkawakeikokuonsensato_shinkawakeikoku_kakoshima.html"
  },
  {
    name: "新川温泉",
    kana: "新川渓谷温泉郷）（しんかわ（しんかわけいこく）",
    prefecture: "鹿児島県",
    file: "spring_each/shinkawaonsen_1_kakoshima.html"
  },
  {
    name: "新鉛温泉",
    kana: "しんなまり",
    prefecture: "岩手県",
    file: "spring_each/shinnamarionsen_shinnamari_iwate.html"
  },
  {
    name: "しんのしつ温泉",
    kana: "しんのしつ",
    prefecture: "北海道",
    file: "spring_each/shinnoshitsuonsen_shinnoshitsu_hokkaidou.html"
  },
  {
    name: "新八温泉",
    kana: "しんぱち",
    prefecture: "青森県",
    file: "spring_each/shinpachionsen_shinpachi_aomori.html"
  },
  {
    name: "新平湯温泉",
    kana: "奥飛騨温泉郷）（しんひらゆ（おくひだ）",
    prefecture: "岐阜県",
    file: "spring_each/shinpeiyuonizumi_1_gifu.html"
  },
  {
    name: "信州いいじま温泉",
    kana: "しんしゅういいじま",
    prefecture: "長野県",
    file: "spring_each/shinshuuiijimaonsen_shinshuuiijima_nagano.html"
  },
  {
    name: "信州まつかわ温泉",
    kana: "しんしゅうまつかわ",
    prefecture: "長野県",
    file: "spring_each/shinshuumatsukawaonsen_shinshuumatsukawa_nagano.html"
  },
  {
    name: "信州よませ温泉",
    kana: "しんしゅうよませ",
    prefecture: "長野県",
    file: "spring_each/shinshuuyomaseonsen_shinshuuyomase_nagano.html"
  },
  {
    name: "新胎内温泉",
    kana: "しんたいない",
    prefecture: "新潟県",
    file: "spring_each/shintainaionsen_shintainai_niigata.html"
  },
  {
    name: "新玉川温泉",
    kana: "しんたまがわ",
    prefecture: "秋田県",
    file: "spring_each/shintamakawaonsen_shintamagawa_akita.html"
  },
  {
    name: "新十津川温泉",
    kana: "しんとつかわ",
    prefecture: "北海道",
    file: "spring_each/shintotsukawaonsen_shintotsukawa_hokkaidou.html"
  },
  {
    name: "深耶馬温泉",
    kana: "しんやば",
    prefecture: "大分県",
    file: "spring_each/shinyabaonsen_shinyaba_ooita.html"
  },
  {
    name: "新横浜温泉",
    kana: "しんよこはま",
    prefecture: "神奈川県",
    file: "spring_each/shinyokohamaonsen_shinyokohama_kanagawa.html"
  },
  {
    name: "塩原温泉",
    kana: "しおばら",
    prefecture: "栃木県",
    file: "spring_each/shiobaraonsen_shiobara_tochigi.html"
  },
  {
    name: "塩別温泉",
    kana: "しおべつ",
    prefecture: "北海道",
    file: "spring_each/shiobetsuonsen_shiobetsu_hokkaidou.html"
  },
  {
    name: "塩田温泉",
    kana: "しおた",
    prefecture: "兵庫県",
    file: "spring_each/shiodaonsen_shiota_hyougo.html"
  },
  {
    name: "塩川鉱泉",
    kana: "しおかわこうせん",
    prefecture: "神奈川県",
    file: "spring_each/shiokawakousen_shiokawakousen_kanagawa.html"
  },
  {
    name: "塩河原温泉",
    kana: "しおがわら",
    prefecture: "群馬県",
    file: "spring_each/shiokawaraonsen_shiogawara_gunma.html"
  },
  {
    name: "塩江温泉",
    kana: "しおのえ",
    prefecture: "香川県",
    file: "spring_each/shionoeonsen_shionoe_kagawa.html"
  },
  {
    name: "塩ノ沢温泉",
    kana: "しおのさわ",
    prefecture: "群馬県",
    file: "spring_each/shionosawaonsen_shionosawa_gunma.html"
  },
  {
    name: "白浜飯田屋温泉",
    kana: "しらはまいいだや",
    prefecture: "千葉県",
    file: "spring_each/shirahamaiidayaonsen_shirahamaiidaya_chiba.html"
  },
  {
    name: "白浜元湯温泉",
    kana: "しらはまもとゆ",
    prefecture: "千葉県",
    file: "spring_each/shirahamamotoyuonsen_shirahamamotoyu_chiba.html"
  },
  {
    name: "白浜野嶋温泉",
    kana: "しらはまのじま",
    prefecture: "千葉県",
    file: "spring_each/shirahamanojimaonsen_shirahamanojima_chiba.html"
  },
  {
    name: "白浜女来島温泉",
    kana: "しらはまめらいじま",
    prefecture: "千葉県",
    file: "spring_each/shirahamaonnaraishimaonsen_shirahamameraijima_chiba.html"
  },
  {
    name: "白浜温泉",
    kana: "しらはま",
    prefecture: "千葉県",
    file: "spring_each/shirahamaonsen_shirahama_chiba.html"
  },
  {
    name: "白骨温泉",
    kana: "しらほね",
    prefecture: "長野県",
    file: "spring_each/shirahoneonsen_shirahone_nagano.html"
  },
  {
    name: "白神展望温泉",
    kana: "しらかみてんぼう",
    prefecture: "秋田県",
    file: "spring_each/shirakamitenbouonsen_shirakamitenbou_akita.html"
  },
  {
    name: "白川温泉",
    kana: "山形）（しらかわ",
    prefecture: "山形県",
    file: "spring_each/shirakawaonsen_1_yamagata.html"
  },
  {
    name: "白川温泉",
    kana: "しらかわ",
    prefecture: "熊本県",
    file: "spring_each/shirakawaonsen_shirakawa_kumamoto.html"
  },
  {
    name: "白子温泉",
    kana: "しらこ",
    prefecture: "千葉県",
    file: "spring_each/shirakoonsen_shirako_chiba.html"
  },
  {
    name: "白峰温泉",
    kana: "しらみね",
    prefecture: "石川県",
    file: "spring_each/shiramineonsen_shiramine_ishikawa.html"
  },
  {
    name: "白丹温泉",
    kana: "しらに",
    prefecture: "大分県",
    file: "spring_each/shiranionsen_shirani_ooita.html"
  },
  {
    name: "白沢高原温泉",
    kana: "しらさわこうげん",
    prefecture: "群馬県",
    file: "spring_each/shirasawakougenonsen_shirasawakougen_gunma.html"
  },
  {
    name: "尻焼温泉",
    kana: "しりやき",
    prefecture: "群馬県",
    file: "spring_each/shiriyakionsen_shiriyaki_gunma.html"
  },
  {
    name: "白金温泉",
    kana: "しろがね",
    prefecture: "北海道",
    file: "spring_each/shiroganeonsen_shirogane_hokkaidou.html"
  },
  {
    name: "白金温泉黄金の湯",
    kana: "しろかねこがねのゆ",
    prefecture: "熊本県",
    file: "spring_each/shiroganeonsenougonnoyu_shirokanekoganenoyu_kumamoto.html"
  },
  {
    name: "白石温泉",
    kana: "しろいし",
    prefecture: "宮城県",
    file: "spring_each/shiroishionsen_shiroishi_miyagi.html"
  },
  {
    name: "白岩温泉",
    kana: "しらいわ",
    prefecture: "静岡県",
    file: "spring_each/shiroiwaonsen_shiraiwa_shizuoka.html"
  },
  {
    name: "白田温泉",
    kana: "しらた",
    prefecture: "静岡県",
    file: "spring_each/shirotaonsen_shirata_shizuoka.html"
  },
  {
    name: "白水鉱泉温泉",
    kana: "しらみずこうせん",
    prefecture: "大分県",
    file: "spring_each/shirouzukousenonsen_shiramizukousen_ooita.html"
  },
  {
    name: "城山温泉",
    kana: "しろやま",
    prefecture: "鹿児島県",
    file: "spring_each/shiroyamaonsen_shiroyama_kakoshima.html"
  },
  {
    name: "雫石高倉温泉",
    kana: "しずくいしたかくら",
    prefecture: "岩手県",
    file: "spring_each/shizukuishitakakuraonsen_shizukuishitakakura_iwate.html"
  },
  {
    name: "庄原さくら温泉",
    kana: "しょうばらさくら",
    prefecture: "広島県",
    file: "spring_each/shoubarasakuraonsen_shoubarasakura_hiroshima.html"
  },
  {
    name: "照島温泉",
    kana: "てるしま",
    prefecture: "福島県",
    file: "spring_each/shoushimaonsen_terushima_fukushima.html"
  },
  {
    name: "小天橋温泉",
    kana: "しょうてんきょう",
    prefecture: "京都府",
    file: "spring_each/shoutenkyouonsen_shoutenkyou_kyoutofu.html"
  },
  {
    name: "小天橋温泉きららの湯",
    kana: "しょうてんきょうきららのゆ",
    prefecture: "京都府",
    file: "spring_each/shoutenkyouonsenkiraranoyu_shoutenkyoukiraranoyu_kyoutofu.html"
  },
  {
    name: "小天温泉",
    kana: "おあま",
    prefecture: "熊本県",
    file: "spring_each/shoutenonsen_oama_kumamoto.html"
  },
  {
    name: "小土肥温泉",
    kana: "おどい",
    prefecture: "静岡県",
    file: "spring_each/shoutoionsen_odoi_shizuoka.html"
  },
  {
    name: "小豆島温泉",
    kana: "しょうどしま",
    prefecture: "香川県",
    file: "spring_each/shouzushimaonsen_shoudoshima_kagawa.html"
  },
  {
    name: "守護陣温泉",
    kana: "しゅごじん",
    prefecture: "熊本県",
    file: "spring_each/shugojinonsen_shugojin_kumamoto.html"
  },
  {
    name: "守実温泉",
    kana: "もりざね",
    prefecture: "大分県",
    file: "spring_each/shumionsen_morizane_ooita.html"
  },
  {
    name: "種子島温泉",
    kana: "たねがしま",
    prefecture: "鹿児島県",
    file: "spring_each/shushishimaonsen_tanegashima_kakoshima.html"
  },
  {
    name: "修善寺温泉",
    kana: "しゅぜんじ",
    prefecture: "静岡県",
    file: "spring_each/shuzenjionsen_shuzenji_shizuoka.html"
  },
  {
    name: "底倉温泉",
    kana: "そこくら",
    prefecture: "神奈川県",
    file: "spring_each/sokokuraonsen_sokokura_kanagawa.html"
  },
  {
    name: "空庭温泉",
    kana: "そらにわ",
    prefecture: "大阪府",
    file: "spring_each/soraniwaonsen_soraniwa_oosakafu.html"
  },
  {
    name: "壮瞥温泉",
    kana: "そうべつ",
    prefecture: "北海道",
    file: "spring_each/soubetsuonsen_soubetsu_hokkaidou.html"
  },
  {
    name: "相間川温泉",
    kana: "あいまがわ",
    prefecture: "群馬県",
    file: "spring_each/soukankawaonsen_aimagawa_gunma.html"
  },
  {
    name: "層雲峡温泉",
    kana: "そううんきょう",
    prefecture: "北海道",
    file: "spring_each/souunkyouonsen_souunkyou_hokkaidou.html"
  },
  {
    name: "早雲山温泉",
    kana: "そううんざん",
    prefecture: "神奈川県",
    file: "spring_each/souunyamaonsen_souunzan_kanagawa.html"
  },
  {
    name: "水分温泉",
    kana: "みずわき",
    prefecture: "大分県",
    file: "spring_each/suibunonsen_mizuwaki_ooita.html"
  },
  {
    name: "垂玉温泉",
    kana: "たるたま",
    prefecture: "熊本県",
    file: "spring_each/suigyokuonsen_tarutama_kumamoto.html"
  },
  {
    name: "筋湯温泉",
    kana: "すじゆ",
    prefecture: "大分県",
    file: "spring_each/sujiyuonsen_sujiyu_ooita.html"
  },
  {
    name: "寸又峡温泉",
    kana: "すまたきょう",
    prefecture: "静岡県",
    file: "spring_each/sumatakyouonsen_sumatakyou_shizuoka.html"
  },
  {
    name: "周防大島片添ヶ浜温泉",
    kana: "すおうおおしまかたそいがはま",
    prefecture: "山口県",
    file: "spring_each/suouooshimakatazoekehamaonsen_suouooshimakatasoigahama_yamaguchi.html"
  },
  {
    name: "周防大島温泉",
    kana: "すおうおおしま",
    prefecture: "山口県",
    file: "spring_each/suouooshimaonsen_suouooshima_yamaguchi.html"
  },
  {
    name: "すさみ温泉",
    kana: "すさみ",
    prefecture: "和歌山県",
    file: "spring_each/susamionsen_susami_wakayama.html"
  },
  {
    name: "裾花温泉",
    kana: "すそばな",
    prefecture: "長野県",
    file: "spring_each/susobanaonsen_susobana_nagano.html"
  },
  {
    name: "ススキノ温泉",
    kana: "すすきの",
    prefecture: "北海道",
    file: "spring_each/susukinoonsen_susukino_hokkaidou.html"
  },
  {
    name: "須玉の湯",
    kana: "すだまのゆ",
    prefecture: "山梨県",
    file: "spring_each/sutamanoyu_sudamanoyu_yamanashi.html"
  },
  {
    name: "諏訪温泉",
    kana: "すわ",
    prefecture: "鹿児島県",
    file: "spring_each/suwaonsen_suwa_kakoshima.html"
  },
  {
    name: "鈴ヶ谷温泉",
    kana: "すずがたに",
    prefecture: "熊本県",
    file: "spring_each/suzuketanionsen_suzugatani_kumamoto.html"
  },
  {
    name: "丹波山温泉のめこい湯",
    kana: "たばやまのめこいゆ",
    prefecture: "山梨県",
    file: "spring_each/tabayamaonsennomekoiyu_tabayamanomekoiyu_yamanashi.html"
  },
  {
    name: "橘の郷上野温泉",
    kana: "たちばなのさとうえの",
    prefecture: "京都府",
    file: "spring_each/tachibananosatouenoonsen_tachibananosatoueno_kyoutofu.html"
  },
  {
    name: "大佐渡温泉",
    kana: "おおさど",
    prefecture: "新潟県",
    file: "spring_each/taisawatarionsen_oosado_niigata.html"
  },
  {
    name: "高倉山温泉",
    kana: "たかくらやま",
    prefecture: "岩手県",
    file: "spring_each/takakurayamaonsen_takakurayama_iwate.html"
  },
  {
    name: "高室山温泉",
    kana: "たかむろやま",
    prefecture: "静岡県",
    file: "spring_each/takamuroyamaonsen_takamuroyama_shizuoka.html"
  },
  {
    name: "たかねの湯",
    kana: "たかねのゆ",
    prefecture: "山梨県",
    file: "spring_each/takanenoyu_takanenoyu_yamanashi.html"
  },
  {
    name: "鷹巣温泉",
    kana: "たかす",
    prefecture: "福井県",
    file: "spring_each/takanosuonsen_takasu_fukui.html"
  },
  {
    name: "宝川温泉",
    kana: "たからがわ",
    prefecture: "群馬県",
    file: "spring_each/takaragawaonsen_takaragawa_gunma.html"
  },
  {
    name: "宝塚温泉",
    kana: "たからづか",
    prefecture: "兵庫県",
    file: "spring_each/takarazukaonsen_takarazuka_hyougo.html"
  },
  {
    name: "高崎観音山温泉",
    kana: "たかさきかんのんやま",
    prefecture: "群馬県",
    file: "spring_each/takasakikannonyamaonsen_takasakikannonyama_gunma.html"
  },
  {
    name: "高瀬温泉",
    kana: "たかせ",
    prefecture: "新潟県",
    file: "spring_each/takaseonsen_takase_niigata.html"
  },
  {
    name: "高湯温泉",
    kana: "たかゆ",
    prefecture: "福島県",
    file: "spring_each/takayuonizumi_takayu_fukushima.html"
  },
  {
    name: "武田尾温泉",
    kana: "たけだお",
    prefecture: "兵庫県",
    file: "spring_each/takedaoonsen_takedao_hyougo.html"
  },
  {
    name: "竹倉温泉",
    kana: "たけくら",
    prefecture: "静岡県",
    file: "spring_each/takekuraonsen_takekura_shizuoka.html"
  },
  {
    name: "竹野浜海岸(奥城崎温泉)",
    kana: "たけのはま（おくきのさき）",
    prefecture: "兵庫県",
    file: "spring_each/takenohamakaigan(okukinosakionsen)_1_hyougo.html"
  },
  {
    name: "武雄温泉",
    kana: "たけお",
    prefecture: "佐賀県",
    file: "spring_each/takeoonsen_takeo_saga.html"
  },
  {
    name: "滝の上温泉",
    kana: "たきのうえ",
    prefecture: "熊本県",
    file: "spring_each/takinoueonsen_takinoue_kumamoto.html"
  },
  {
    name: "滝沢温泉",
    kana: "たきざわ",
    prefecture: "群馬県",
    file: "spring_each/takizawaonsen_takizawa_gunma.html"
  },
  {
    name: "蛸川温泉",
    kana: "たこがわ",
    prefecture: "神奈川県",
    file: "spring_each/takokawaonsen_takogawa_kanagawa.html"
  },
  {
    name: "託麻温泉",
    kana: "たくま",
    prefecture: "熊本県",
    file: "spring_each/takumaonsen_takuma_kumamoto.html"
  },
  {
    name: "玉川温泉",
    kana: "たまがわ",
    prefecture: "秋田県",
    file: "spring_each/tamagawaonsen_tamagawa_akita.html"
  },
  {
    name: "田万川温泉",
    kana: "たまがわ",
    prefecture: "山口県",
    file: "spring_each/tamagawaonsen_tamagawa_yamaguchi.html"
  },
  {
    name: "多摩源流小菅の湯",
    kana: "たまげんりゅうこすげのゆ",
    prefecture: "山梨県",
    file: "spring_each/tamagenryuukosugenoyu_tamagenryuukosugenoyu_yamanashi.html"
  },
  {
    name: "玉名温泉",
    kana: "たまな",
    prefecture: "熊本県",
    file: "spring_each/tamanaonsen_tamana_kumamoto.html"
  },
  {
    name: "たまの温泉",
    kana: "たまの",
    prefecture: "岡山県",
    file: "spring_each/tamanoonsen_tamano_okayama.html"
  },
  {
    name: "玉造温泉",
    kana: "たまつくり",
    prefecture: "島根県",
    file: "spring_each/tamatsukurionsen_tamatsukuri_shimane.html"
  },
  {
    name: "たまゆら温泉",
    kana: "たまゆら",
    prefecture: "宮崎県",
    file: "spring_each/tamayuraonsen_tamayura_miyazaki.html"
  },
  {
    name: "棚倉温泉",
    kana: "たなぐら",
    prefecture: "福島県",
    file: "spring_each/tanakuraonsen_tanagura_fukushima.html"
  },
  {
    name: "たんげ温泉",
    kana: "たんげ",
    prefecture: "群馬県",
    file: "spring_each/tangeonsen_tange_gunma.html"
  },
  {
    name: "丹後はなれ湖温泉",
    kana: "たんごはなれこ",
    prefecture: "京都府",
    file: "spring_each/tangohanaremizuumionsen_tangohanareko_kyoutofu.html"
  },
  {
    name: "丹後琴引温泉",
    kana: "たんごことびき",
    prefecture: "京都府",
    file: "spring_each/tangokotobikionsen_tangokotobiki_kyoutofu.html"
  },
  {
    name: "丹後松島温泉",
    kana: "たんごまつしま",
    prefecture: "京都府",
    file: "spring_each/tangomatsushimaonsen_tangomatsushima_kyoutofu.html"
  },
  {
    name: "丹後木橋温泉",
    kana: "たんごきはし",
    prefecture: "京都府",
    file: "spring_each/tangomokkyouonsen_tangokihashi_kyoutofu.html"
  },
  {
    name: "丹後奥伊根温泉",
    kana: "たんごおくいね",
    prefecture: "京都府",
    file: "spring_each/tangookuineonsen_tangookuine_kyoutofu.html"
  },
  {
    name: "丹後温泉",
    kana: "たんご",
    prefecture: "京都府",
    file: "spring_each/tangoonsen_tango_kyoutofu.html"
  },
  {
    name: "タングラム斑尾温泉",
    kana: "たんぐらむまだらお",
    prefecture: "長野県",
    file: "spring_each/tanguramumadaraoonsen_tanguramumadarao_nagano.html"
  },
  {
    name: "谷川温泉",
    kana: "水上温泉郷）（たにがわ（みなかみ）",
    prefecture: "群馬県",
    file: "spring_each/tanigawaonsen_1_gunma.html"
  },
  {
    name: "谷山温泉",
    kana: "たにやま",
    prefecture: "鹿児島県",
    file: "spring_each/taniyamaonsen_taniyama_kakoshima.html"
  },
  {
    name: "田の原温泉",
    kana: "たのはら",
    prefecture: "熊本県",
    file: "spring_each/tanoharaonsen_tanohara_kumamoto.html"
  },
  {
    name: "太良竹崎温泉",
    kana: "たらたけさき",
    prefecture: "佐賀県",
    file: "spring_each/taroutakezakionsen_taratakesaki_saga.html"
  },
  {
    name: "垂水温泉",
    kana: "たるみず",
    prefecture: "鹿児島県",
    file: "spring_each/tarumionsen_tarumizu_kakoshima.html"
  },
  {
    name: "田代温泉",
    kana: "たしろ",
    prefecture: "静岡県",
    file: "spring_each/tashiroonsen_tashiro_shizuoka.html"
  },
  {
    name: "蓼科三室温泉",
    kana: "たてしなみむろ",
    prefecture: "長野県",
    file: "spring_each/tateshinamimuroonsen_tateshinamimuro_nagano.html"
  },
  {
    name: "蓼科温泉",
    kana: "たてしな",
    prefecture: "長野県",
    file: "spring_each/tateshinaonsen_tateshina_nagano.html"
  },
  {
    name: "蓼科温泉石遊の湯",
    kana: "たてしないしやすのゆ",
    prefecture: "長野県",
    file: "spring_each/tateshinaonsenishiasonoyu_tateshinaishiyasunoyu_nagano.html"
  },
  {
    name: "たてやま温泉郷",
    kana: "たてやま",
    prefecture: "千葉県",
    file: "spring_each/tateyamaonsensato_tateyama_chiba.html"
  },
  {
    name: "辰ケ湯温泉",
    kana: "たつがゆ",
    prefecture: "山形県",
    file: "spring_each/tatsukeyuonizumi_tatsugayu_yamagata.html"
  },
  {
    name: "辰口温泉",
    kana: "たつのくち",
    prefecture: "石川県",
    file: "spring_each/tatsukuchionsen_tatsunokuchi_ishikawa.html"
  },
  {
    name: "たつの荒神山温泉",
    kana: "たつのこうじんやま",
    prefecture: "長野県",
    file: "spring_each/tatsunokoujinyamaonsen_tatsunokoujinyama_nagano.html"
  },
  {
    name: "田沢湖高原温泉郷",
    kana: "たざわここうげん",
    prefecture: "秋田県",
    file: "spring_each/tazawakokougenonsensato_tazawakokougen_akita.html"
  },
  {
    name: "天童温泉",
    kana: "てんどう",
    prefecture: "山形県",
    file: "spring_each/tendouonsen_tendou_yamagata.html"
  },
  {
    name: "天恵泉",
    kana: "てんけいせん",
    prefecture: "山梨県",
    file: "spring_each/tenkeiizumi_tenkeisen_yamanashi.html"
  },
  {
    name: "天ヶ瀬温泉",
    kana: "あまがせ",
    prefecture: "大分県",
    file: "spring_each/tenkeseonsen_amagase_ooita.html"
  },
  {
    name: "天降川温泉",
    kana: "あもりがわ",
    prefecture: "鹿児島県",
    file: "spring_each/tenkoukawaonsen_amorigawa_kakoshima.html"
  },
  {
    name: "天目山温泉",
    kana: "てんもくざん",
    prefecture: "山梨県",
    file: "spring_each/tenmokuyamaonsen_tenmokuzan_yamanashi.html"
  },
  {
    name: "天然中伊豆温泉",
    kana: "てんねんなかいず",
    prefecture: "静岡県",
    file: "spring_each/tennennakaizuonsen_tennennakaizu_shizuoka.html"
  },
  {
    name: "天然温泉まほろばの湯",
    kana: "てんねんまほろばのゆ",
    prefecture: "京都府",
    file: "spring_each/tennenonsenmahorobanoyu_tennenmahorobanoyu_kyoutofu.html"
  },
  {
    name: "天然大和温泉",
    kana: "てんねんやまと",
    prefecture: "奈良県",
    file: "spring_each/tennenyamatoonsen_tennenyamato_nara.html"
  },
  {
    name: "天平の湯温泉",
    kana: "てんぴょうのゆ",
    prefecture: "奈良県",
    file: "spring_each/tenpyounoyuonizumi_tenpyounoyu_nara.html"
  },
  {
    name: "天龍峡温泉",
    kana: "てんりゅうきょう",
    prefecture: "長野県",
    file: "spring_each/tenryuukyouonsen_tenryuukyou_nagano.html"
  },
  {
    name: "天竜水神温泉",
    kana: "てんりゅうすいじん",
    prefecture: "長野県",
    file: "spring_each/tenryuusuijinonsen_tenryuusuijin_nagano.html"
  },
  {
    name: "天徳温泉",
    kana: "てんとく",
    prefecture: "長野県",
    file: "spring_each/tentokuonsen_tentoku_nagano.html"
  },
  {
    name: "寺泊岬温泉",
    kana: "てらどまりみさき",
    prefecture: "新潟県",
    file: "spring_each/teradomarimisakionsen_teradomarimisaki_niigata.html"
  },
  {
    name: "寺泊温泉",
    kana: "てらどまり",
    prefecture: "新潟県",
    file: "spring_each/teradomarionsen_teradomari_niigata.html"
  },
  {
    name: "鉄輪温泉",
    kana: "別府温泉郷）（かんなわ（べっぷ）",
    prefecture: "大分県",
    file: "spring_each/tetsurinonsen_1_ooita.html"
  },
  {
    name: "鳥羽安楽島温泉",
    kana: "とばあらしま",
    prefecture: "三重県",
    file: "spring_each/tobaanrakushimaonsen_tobaarashima_mie.html"
  },
  {
    name: "鳥羽答志島温泉",
    kana: "とばとうしじま",
    prefecture: "三重県",
    file: "spring_each/tobakotaekokorozashishimaonsen_tobatoushijima_mie.html"
  },
  {
    name: "戸田温泉",
    kana: "へだ",
    prefecture: "静岡県",
    file: "spring_each/todaonsen_heda_shizuoka.html"
  },
  {
    name: "土肥温泉",
    kana: "とい",
    prefecture: "静岡県",
    file: "spring_each/toionsen_toi_shizuoka.html"
  },
  {
    name: "十勝岳温泉",
    kana: "とかちだけ",
    prefecture: "北海道",
    file: "spring_each/tokachigakuonsen_tokachidake_hokkaidou.html"
  },
  {
    name: "十勝川温泉",
    kana: "とかちがわ",
    prefecture: "北海道",
    file: "spring_each/tokachigawaonsen_tokachigawa_hokkaidou.html"
  },
  {
    name: "十勝幕別温泉",
    kana: "とかちまくべつ",
    prefecture: "北海道",
    file: "spring_each/tokachimakubetsuonsen_tokachimakubetsu_hokkaidou.html"
  },
  {
    name: "常盤温泉",
    kana: "ときわ",
    prefecture: "宮崎県",
    file: "spring_each/tokiwaonsen_tokiwa_miyazaki.html"
  },
  {
    name: "戸倉上山田温泉",
    kana: "とぐらかみやまだ",
    prefecture: "長野県",
    file: "spring_each/tokurakamiyamadaonsen_togurakamiyamada_nagano.html"
  },
  {
    name: "苫田温泉",
    kana: "とまだ",
    prefecture: "岡山県",
    file: "spring_each/tomataonsen_tomada_okayama.html"
  },
  {
    name: "鞆の浦温泉",
    kana: "とものうら",
    prefecture: "広島県",
    file: "spring_each/tomonouraonsen_tomonoura_hiroshima.html"
  },
  {
    name: "トムラウシ温泉",
    kana: "とむらうし",
    prefecture: "北海道",
    file: "spring_each/tomuraushionsen_tomuraushi_hokkaidou.html"
  },
  {
    name: "トーカン岩手山温泉",
    kana: "とーかんいわてさん",
    prefecture: "岩手県",
    file: "spring_each/tookaniwateyamaonsen_tookaniwatesan_iwate.html"
  },
  {
    name: "土佐龍温泉",
    kana: "とさりゅう",
    prefecture: "高知県",
    file: "spring_each/tosaryuuonsen_tosaryuu_kouchi.html"
  },
  {
    name: "十津川温泉",
    kana: "とつがわ",
    prefecture: "奈良県",
    file: "spring_each/totsugawaonsen_totsugawa_nara.html"
  },
  {
    name: "鳥取温泉",
    kana: "とっとり",
    prefecture: "鳥取県",
    file: "spring_each/tottorionsen_tottori_tottori.html"
  },
  {
    name: "東大沼温泉",
    kana: "ひがしおおぬま",
    prefecture: "北海道",
    file: "spring_each/toudainumaonsen_higashioonuma_hokkaidou.html"
  },
  {
    name: "遠刈田温泉",
    kana: "とおがった",
    prefecture: "宮城県",
    file: "spring_each/tougattaonsen_toogatta_miyagi.html"
  },
  {
    name: "峠の湯",
    kana: "とうげのゆ",
    prefecture: "群馬県",
    file: "spring_each/tougenoyu_tougenoyu_gunma.html"
  },
  {
    name: "東郷温泉",
    kana: "とうごう",
    prefecture: "鹿児島県",
    file: "spring_each/tougouonsen_tougou_kakoshima.html"
  },
  {
    name: "東尋坊温泉",
    kana: "とうじんぼう",
    prefecture: "福井県",
    file: "spring_each/toujinbouonsen_toujinbou_fukui.html"
  },
  {
    name: "田牛温泉",
    kana: "とうじ",
    prefecture: "静岡県",
    file: "spring_each/toujionsen_touji_shizuoka.html"
  },
  {
    name: "当間高原温泉",
    kana: "あてまこうげん",
    prefecture: "新潟県",
    file: "spring_each/toumakougenonsen_atemakougen_niigata.html"
  },
  {
    name: "塔ノ沢温泉",
    kana: "とうのさわ",
    prefecture: "神奈川県",
    file: "spring_each/tounosawaonsen_tounosawa_kanagawa.html"
  },
  {
    name: "洞爺湖温泉",
    kana: "とうやこ",
    prefecture: "北海道",
    file: "spring_each/touyakoonsen_touyako_hokkaidou.html"
  },
  {
    name: "十和田湖畔温泉",
    kana: "とわだこはん",
    prefecture: "青森県",
    file: "spring_each/towadakoazeonsen_towadakohan_aomori.html"
  },
  {
    name: "十和田湖西湖畔温泉",
    kana: "とわだこにしこはん",
    prefecture: "秋田県",
    file: "spring_each/towadakosaikoazeonsen_towadakonishikohan_akita.html"
  },
  {
    name: "十和田大湯温泉",
    kana: "とわだおおゆ",
    prefecture: "秋田県",
    file: "spring_each/towadaooyuonsen_towadaooyu_akita.html"
  },
  {
    name: "十和田ポニー温泉",
    kana: "とわだぽにー",
    prefecture: "青森県",
    file: "spring_each/towadaponiionsen_towadaponii_aomori.html"
  },
  {
    name: "椿温泉",
    kana: "南紀椿温泉）（なんきつばき",
    prefecture: "和歌山県",
    file: "spring_each/tsubakionsen_1_wakayama.html"
  },
  {
    name: "土出温泉",
    kana: "つちいで",
    prefecture: "群馬県",
    file: "spring_each/tsuchishutsuonsen_tsuchiide_gunma.html"
  },
  {
    name: "土湯温泉",
    kana: "つちゆ",
    prefecture: "福島県",
    file: "spring_each/tsuchiyuonsen_tsuchiyu_fukushima.html"
  },
  {
    name: "杖立温泉",
    kana: "つえだて",
    prefecture: "熊本県",
    file: "spring_each/tsuetateonsen_tsuedate_kumamoto.html"
  },
  {
    name: "塚原温泉",
    kana: "つかはら",
    prefecture: "大分県",
    file: "spring_each/tsukaharaonsen_tsukahara_ooita.html"
  },
  {
    name: "塚野鉱泉",
    kana: "つかのこうせん",
    prefecture: "大分県",
    file: "spring_each/tsukanokousen_tsukanokousen_ooita.html"
  },
  {
    name: "月形温泉",
    kana: "つきがた",
    prefecture: "北海道",
    file: "spring_each/tsukigataonsen_tsukigata_hokkaidou.html"
  },
  {
    name: "月岡温泉",
    kana: "つきおか",
    prefecture: "新潟県",
    file: "spring_each/tsukiokaonsen_tsukioka_niigata.html"
  },
  {
    name: "月夜野温泉",
    kana: "つきよの",
    prefecture: "群馬県",
    file: "spring_each/tsukiyonoonsen_tsukiyono_gunma.html"
  },
  {
    name: "筑波温泉",
    kana: "つくば",
    prefecture: "茨城県",
    file: "spring_each/tsukubaonsen_tsukuba_ibaraki.html"
  },
  {
    name: "筑波山温泉",
    kana: "つくばさん",
    prefecture: "茨城県",
    file: "spring_each/tsukubasanonsen_tsukubasan_ibaraki.html"
  },
  {
    name: "津黒高原温泉",
    kana: "つぐろこうげん",
    prefecture: "岡山県",
    file: "spring_each/tsukurokougenonsen_tsugurokougen_okayama.html"
  },
  {
    name: "嬬恋バラギ温泉",
    kana: "つまごいばらぎ",
    prefecture: "群馬県",
    file: "spring_each/tsumagoibaragionsen_tsumagoibaragi_gunma.html"
  },
  {
    name: "つなぎ温泉",
    kana: "つなぎ",
    prefecture: "岩手県",
    file: "spring_each/tsunagionsen_tsunagi_iwate.html"
  },
  {
    name: "津南温泉",
    kana: "つなん",
    prefecture: "新潟県",
    file: "spring_each/tsunanonsen_tsunan_niigata.html"
  },
  {
    name: "鶴居温泉",
    kana: "つるい",
    prefecture: "北海道",
    file: "spring_each/tsuruionsen_tsurui_hokkaidou.html"
  },
  {
    name: "鶴巻温泉",
    kana: "つるまき",
    prefecture: "神奈川県",
    file: "spring_each/tsurumakionsen_tsurumaki_kanagawa.html"
  },
  {
    name: "鶴ノ湯温泉",
    kana: "つるのゆ",
    prefecture: "秋田県",
    file: "spring_each/tsurunoyuonizumi_tsurunoyu_akita.html"
  },
  {
    name: "つつじの湯",
    kana: "つつじのゆ",
    prefecture: "群馬県",
    file: "spring_each/tsutsujinoyu_tsutsujinoyu_gunma.html"
  },
  {
    name: "産山温泉",
    kana: "うぶやま",
    prefecture: "熊本県",
    file: "spring_each/ubuyamaonsen_ubuyama_kumamoto.html"
  },
  {
    name: "内浦山温泉",
    kana: "うちうらやま",
    prefecture: "千葉県",
    file: "spring_each/uchiurayamaonsen_uchiurayama_chiba.html"
  },
  {
    name: "上畑温泉",
    kana: "かみはた",
    prefecture: "秋田県",
    file: "spring_each/uehataonsen_kamihata_akita.html"
  },
  {
    name: "植木温泉",
    kana: "うえき",
    prefecture: "熊本県",
    file: "spring_each/uekionsen_ueki_kumamoto.html"
  },
  {
    name: "上九の湯",
    kana: "かみくのゆ",
    prefecture: "山梨県",
    file: "spring_each/uekyuunoyu_kamikunoyu_yamanashi.html"
  },
  {
    name: "上の原温泉",
    kana: "水上温泉郷）（うえのはら（みなかみ）",
    prefecture: "群馬県",
    file: "spring_each/uenoharaonsen_1_gunma.html"
  },
  {
    name: "上の湯温泉郷",
    kana: "かみのゆ",
    prefecture: "北海道",
    file: "spring_each/uenoyuonsenkyou_kaminoyu_hokkaidou.html"
  },
  {
    name: "上齋原温泉",
    kana: "かみさいばら",
    prefecture: "岡山県",
    file: "spring_each/uesaiharaonsen_kamisaibara_okayama.html"
  },
  {
    name: "御神楽温泉",
    kana: "みかぐら",
    prefecture: "新潟県",
    file: "spring_each/uganrakuonsen_mikagura_niigata.html"
  },
  {
    name: "宇久須温泉",
    kana: "うぐす",
    prefecture: "静岡県",
    file: "spring_each/ugusuonsen_ugusu_shizuoka.html"
  },
  {
    name: "鵜原温泉",
    kana: "うばら",
    prefecture: "千葉県",
    file: "spring_each/uharaonsen_ubara_chiba.html"
  },
  {
    name: "梅ヶ島コンヤ温泉",
    kana: "うめがしまこんや",
    prefecture: "静岡県",
    file: "spring_each/umekeshimakonyaonsen_umegashimakonya_shizuoka.html"
  },
  {
    name: "梅ヶ島新田温泉",
    kana: "うめがしましんでん",
    prefecture: "静岡県",
    file: "spring_each/umekeshimanittaonsen_umegashimashinden_shizuoka.html"
  },
  {
    name: "梅ヶ島温泉",
    kana: "うめがしま",
    prefecture: "静岡県",
    file: "spring_each/umekeshimaonsen_umegashima_shizuoka.html"
  },
  {
    name: "梅木温泉",
    kana: "うめき",
    prefecture: "静岡県",
    file: "spring_each/umekionsen_umeki_shizuoka.html"
  },
  {
    name: "海若温泉",
    kana: "わたつみ",
    prefecture: "兵庫県",
    file: "spring_each/umijakuonsen_watatsumi_hyougo.html"
  },
  {
    name: "鰻温泉",
    kana: "うなぎ",
    prefecture: "鹿児島県",
    file: "spring_each/unagionsen_unagi_kakoshima.html"
  },
  {
    name: "宇奈月温泉",
    kana: "うなづき",
    prefecture: "富山県",
    file: "spring_each/unazukionsen_unazuki_toyama.html"
  },
  {
    name: "雲母温泉",
    kana: "きら",
    prefecture: "新潟県",
    file: "spring_each/unmoonsen_kira_niigata.html"
  },
  {
    name: "鵜の浜温泉",
    kana: "うのはま",
    prefecture: "新潟県",
    file: "spring_each/unohamaonsen_unohama_niigata.html"
  },
  {
    name: "鵜の瀬温泉",
    kana: "水上温泉郷）（うのせ（みなかみ）",
    prefecture: "群馬県",
    file: "spring_each/unoseonsen_1_gunma.html"
  },
  {
    name: "雲仙温泉",
    kana: "うんぜん",
    prefecture: "長崎県",
    file: "spring_each/unzenonsen_unzen_nagasaki.html"
  },
  {
    name: "裏耶馬渓温泉",
    kana: "うらやばけい",
    prefecture: "大分県",
    file: "spring_each/urayabakeionsen_urayabakei_ooita.html"
  },
  {
    name: "嬉野温泉",
    kana: "うれしの",
    prefecture: "佐賀県",
    file: "spring_each/ureshinoonsen_ureshino_saga.html"
  },
  {
    name: "瓜島温泉",
    kana: "うりじま",
    prefecture: "静岡県",
    file: "spring_each/urishimaonsen_urijima_shizuoka.html"
  },
  {
    name: "宇佐美温泉",
    kana: "うさみ",
    prefecture: "静岡県",
    file: "spring_each/usamionsen_usami_shizuoka.html"
  },
  {
    name: "宇佐温泉",
    kana: "うさ",
    prefecture: "大分県",
    file: "spring_each/usaonsen_usa_ooita.html"
  },
  {
    name: "牛岳温泉",
    kana: "うしだけ",
    prefecture: "富山県",
    file: "spring_each/ushigakuonsen_ushidake_toyama.html"
  },
  {
    name: "牛滝温泉",
    kana: "うしたき",
    prefecture: "大阪府",
    file: "spring_each/ushitakionsen_ushitaki_oosakafu.html"
  },
  {
    name: "臼杵温泉",
    kana: "うすき",
    prefecture: "大分県",
    file: "spring_each/usukionsen_usuki_ooita.html"
  },
  {
    name: "歌登温泉",
    kana: "うたのぼり",
    prefecture: "北海道",
    file: "spring_each/utanoborionsen_utanobori_hokkaidou.html"
  },
  {
    name: "ウトロ温泉",
    kana: "うとろ",
    prefecture: "北海道",
    file: "spring_each/utoroonsen_utoro_hokkaidou.html"
  },
  {
    name: "美ヶ原温泉",
    kana: "うつくしがはら",
    prefecture: "長野県",
    file: "spring_each/utsukushigaharaonsen_utsukushigahara_nagano.html"
  },
  {
    name: "内海温泉",
    kana: "うつみ",
    prefecture: "愛知県",
    file: "spring_each/utsumionsen_utsumi_aichi.html"
  },
  {
    name: "和銅鉱泉",
    kana: "わどうこうせん",
    prefecture: "埼玉県",
    file: "spring_each/wadoukousen_wadoukousen_saitama.html"
  },
  {
    name: "わいた温泉郷",
    kana: "わいた",
    prefecture: "熊本県",
    file: "spring_each/waitaonsensato_waita_kumamoto.html"
  },
  {
    name: "和歌の浦温泉",
    kana: "わかのうら",
    prefecture: "和歌山県",
    file: "spring_each/wakanouraonsen_wakanoura_wakayama.html"
  },
  {
    name: "脇田温泉",
    kana: "わきた",
    prefecture: "福岡県",
    file: "spring_each/wakitaonsen_wakita_fukuoka.html"
  },
  {
    name: "和倉温泉",
    kana: "わくら",
    prefecture: "石川県",
    file: "spring_each/wakuraonsen_wakura_ishikawa.html"
  },
  {
    name: "わらび温泉",
    kana: "わらび",
    prefecture: "秋田県",
    file: "spring_each/warabionsen_warabi_akita.html"
  },
  {
    name: "輪島温泉",
    kana: "わじま",
    prefecture: "石川県",
    file: "spring_each/washimaonsen_wajima_ishikawa.html"
  },
  {
    name: "渡瀬温泉",
    kana: "わたぜ",
    prefecture: "和歌山県",
    file: "spring_each/wataseonsen_wataze_wakayama.html"
  },
  {
    name: "藪の湯温泉",
    kana: "やぶのゆ",
    prefecture: "山梨県",
    file: "spring_each/yabunoyuonizumi_yabunoyu_yamanashi.html"
  },
  {
    name: "やぶ温泉",
    kana: "やぶ",
    prefecture: "兵庫県",
    file: "spring_each/yabuonsen_yabu_hyougo.html"
  },
  {
    name: "藪塚温泉",
    kana: "やぶつか",
    prefecture: "群馬県",
    file: "spring_each/yabutsukaonsen_yabutsuka_gunma.html"
  },
  {
    name: "八木沢温泉",
    kana: "やぎさわ",
    prefecture: "静岡県",
    file: "spring_each/yagisawaonsen_yagisawa_shizuoka.html"
  },
  {
    name: "矢原温泉",
    kana: "やわら",
    prefecture: "千葉県",
    file: "spring_each/yaharaonsen_yawara_chiba.html"
  },
  {
    name: "弥彦温泉",
    kana: "やひこ",
    prefecture: "新潟県",
    file: "spring_each/yahikoonsen_yahiko_niigata.html"
  },
  {
    name: "焼津温泉",
    kana: "やいづ",
    prefecture: "静岡県",
    file: "spring_each/yaizuonsen_yaizu_shizuoka.html"
  },
  {
    name: "八雲温泉",
    kana: "北海道）（やくも",
    prefecture: "北海道",
    file: "spring_each/yakumoonsen_1_hokkaidou.html"
  },
  {
    name: "八雲温泉",
    kana: "やくも",
    prefecture: "島根県",
    file: "spring_each/yakumoonsen_yakumo_shimane.html"
  },
  {
    name: "薬王寺温泉",
    kana: "やくおうじ",
    prefecture: "福岡県",
    file: "spring_each/yakuouteraonsen_yakuouji_fukuoka.html"
  },
  {
    name: "屋久島温泉",
    kana: "やくしま",
    prefecture: "鹿児島県",
    file: "spring_each/yakushimaonsen_yakushima_kakoshima.html"
  },
  {
    name: "山田温泉",
    kana: "やまだ",
    prefecture: "長野県",
    file: "spring_each/yamadaonsen_yamada_nagano.html"
  },
  {
    name: "山鹿温泉",
    kana: "やまが",
    prefecture: "熊本県",
    file: "spring_each/yamagaonsen_yamaga_kumamoto.html"
  },
  {
    name: "山香温泉",
    kana: "やまが",
    prefecture: "大分県",
    file: "spring_each/yamagaonsen_yamaga_ooita.html"
  },
  {
    name: "山川温泉",
    kana: "やまかわ",
    prefecture: "熊本県",
    file: "spring_each/yamakawaonsen_yamakawa_kumamoto.html"
  },
  {
    name: "山川天然砂むし温泉",
    kana: "やまがわてんねんすなむし",
    prefecture: "鹿児島県",
    file: "spring_each/yamakawatennensunamushionsen_yamagawatennensunamushi_kakoshima.html"
  },
  {
    name: "山中湖温泉",
    kana: "やまなかこ",
    prefecture: "山梨県",
    file: "spring_each/yamanakakoonsen_yamanakako_yamanashi.html"
  },
  {
    name: "山梨万葉温泉",
    kana: "やまなしまんよう",
    prefecture: "山梨県",
    file: "spring_each/yamanashimanyouonsen_yamanashimanyou_yamanashi.html"
  },
  {
    name: "山の神温泉",
    kana: "やまのかみ",
    prefecture: "岩手県",
    file: "spring_each/yamanokamionsen_yamanokami_iwate.html"
  },
  {
    name: "山代温泉",
    kana: "加賀温泉郷）（やましろ（かが）",
    prefecture: "石川県",
    file: "spring_each/yamashiroonsen_1_ishikawa.html"
  },
  {
    name: "柳川温泉",
    kana: "やながわ",
    prefecture: "山形県",
    file: "spring_each/yanagawaonsen_yanagawa_yamagata.html"
  },
  {
    name: "八塩温泉",
    kana: "やしお",
    prefecture: "群馬県",
    file: "spring_each/yashioonsen_yashio_gunma.html"
  },
  {
    name: "八ヶ岳南麓温泉",
    kana: "やつがたけなんろく",
    prefecture: "山梨県",
    file: "spring_each/yatsugatakenanrokuonsen_yatsugatakenanroku_yamanashi.html"
  },
  {
    name: "谷津温泉",
    kana: "やつ",
    prefecture: "静岡県",
    file: "spring_each/yatsuonsen_yatsu_shizuoka.html"
  },
  {
    name: "横川温泉",
    kana: "静岡県）（よこかわ",
    prefecture: "静岡県",
    file: "spring_each/yokokawaonsen_1_shizuoka.html"
  },
  {
    name: "横川温泉",
    kana: "よこかわ",
    prefecture: "茨城県",
    file: "spring_each/yokokawaonsen_yokokawa_ibaraki.html"
  },
  {
    name: "横手駅前温泉",
    kana: "よこてえきまえ",
    prefecture: "秋田県",
    file: "spring_each/yokoteekimaeonsen_yokoteekimae_akita.html"
  },
  {
    name: "蓬来温泉",
    kana: "よもぎひら",
    prefecture: "静岡県",
    file: "spring_each/yomogiraionsen_yomogihira_shizuoka.html"
  },
  {
    name: "寄居山温泉",
    kana: "よりいやま",
    prefecture: "群馬県",
    file: "spring_each/yoriiyamaonsen_yoriiyama_gunma.html"
  },
  {
    name: "よさこい温泉",
    kana: "よさこい",
    prefecture: "高知県",
    file: "spring_each/yosakoionsen_yosakoi_kouchi.html"
  },
  {
    name: "吉田温泉",
    kana: "鹿児島県）（よしだ",
    prefecture: "鹿児島県",
    file: "spring_each/yoshidaonsen_1_kakoshima.html"
  },
  {
    name: "吉井温泉",
    kana: "よしい",
    prefecture: "福岡県",
    file: "spring_each/yoshiionsen_yoshii_fukuoka.html"
  },
  {
    name: "吉松温泉郷",
    kana: "よしまつ",
    prefecture: "鹿児島県",
    file: "spring_each/yoshimatsuonsensato_yoshimatsu_kakoshima.html"
  },
  {
    name: "吉尾温泉",
    kana: "よしお",
    prefecture: "熊本県",
    file: "spring_each/yoshioonsen_yoshio_kumamoto.html"
  },
  {
    name: "用井温泉",
    kana: "もちい",
    prefecture: "高知県",
    file: "spring_each/youionsen_mochii_kouchi.html"
  },
  {
    name: "養老温泉",
    kana: "ようろう",
    prefecture: "岐阜県",
    file: "spring_each/yourouonsen_yourou_gifu.html"
  },
  {
    name: "養老牛温泉",
    kana: "ようろううし",
    prefecture: "北海道",
    file: "spring_each/yourouushionsen_yourouushi_hokkaidou.html"
  },
  {
    name: "妖精の泉温泉",
    kana: "ようせいのいずみ",
    prefecture: "北海道",
    file: "spring_each/youseinosenonizumi_youseinoizumi_hokkaidou.html"
  },
  {
    name: "湯浅温泉",
    kana: "ゆあさ",
    prefecture: "和歌山県",
    file: "spring_each/yuasaonsen_yuasa_wakayama.html"
  },
  {
    name: "湯田川温泉",
    kana: "ゆだがわ",
    prefecture: "山形県",
    file: "spring_each/yudakawaonsen_yudagawa_yamagata.html"
  },
  {
    name: "湯田中温泉",
    kana: "ゆだなか",
    prefecture: "長野県",
    file: "spring_each/yudanakaonsen_yudanaka_nagano.html"
  },
  {
    name: "湯田温泉",
    kana: "ゆだ",
    prefecture: "山口県",
    file: "spring_each/yudaonsen_yuda_yamaguchi.html"
  },
  {
    name: "湯田上温泉",
    kana: "ゆだがみ",
    prefecture: "新潟県",
    file: "spring_each/yudaueonsen_yudagami_niigata.html"
  },
  {
    name: "由布院温泉",
    kana: "湯布院）（ゆふいん",
    prefecture: "大分県",
    file: "spring_each/yufuinonsen_1_ooita.html"
  },
  {
    name: "湯河原温泉",
    kana: "ゆがわら",
    prefecture: "神奈川県",
    file: "spring_each/yugawaraonsen_yugawara_kanagawa.html"
  },
  {
    name: "湯端温泉",
    kana: "ゆばた",
    prefecture: "群馬県",
    file: "spring_each/yuhajionsen_yubata_gunma.html"
  },
  {
    name: "湯原温泉",
    kana: "ゆばら",
    prefecture: "岡山県",
    file: "spring_each/yuharaonsen_yubara_okayama.html"
  },
  {
    name: "湯平温泉",
    kana: "ゆのひら",
    prefecture: "大分県",
    file: "spring_each/yuheionizumi_yunohira_ooita.html"
  },
  {
    name: "湯檜曽温泉",
    kana: "水上温泉郷）（ゆびそ（みなかみ）",
    prefecture: "群馬県",
    file: "spring_each/yuhinokisoonsen_1_gunma.html"
  },
  {
    name: "湯盛温泉",
    kana: "ゆもり",
    prefecture: "奈良県",
    file: "spring_each/yujouonsen_yumori_nara.html"
  },
  {
    name: "湯川内温泉",
    kana: "ゆがわち",
    prefecture: "鹿児島県",
    file: "spring_each/yukawanaionizumi_yugawachi_kakoshima.html"
  },
  {
    name: "湯川温泉",
    kana: "ゆがわ",
    prefecture: "岩手県",
    file: "spring_each/yukawaonsen_yugawa_iwate.html"
  },
  {
    name: "湯ヶ野温泉",
    kana: "ゆがの",
    prefecture: "静岡県",
    file: "spring_each/yukenoonsen_yugano_shizuoka.html"
  },
  {
    name: "湯来温泉",
    kana: "ゆき",
    prefecture: "広島県",
    file: "spring_each/yukionsen_yuki_hiroshima.html"
  },
  {
    name: "夢絃峡温泉",
    kana: "むげんきょう",
    prefecture: "京都府",
    file: "spring_each/yumegenkyouonsen_mugenkyou_kyoutofu.html"
  },
  {
    name: "湯免温泉",
    kana: "ゆめん",
    prefecture: "山口県",
    file: "spring_each/yumenonsen_yumen_yamaguchi.html"
  },
  {
    name: "弓ヶ浜温泉",
    kana: "ゆみがはま",
    prefecture: "静岡県",
    file: "spring_each/yumikehamaonsen_yumigahama_shizuoka.html"
  },
  {
    name: "湯元帯広温泉",
    kana: "ゆもとおびひろ",
    prefecture: "北海道",
    file: "spring_each/yumotoobihiroonsen_yumotoobihiro_hokkaidou.html"
  },
  {
    name: "湯元新祖谷温泉",
    kana: "ゆもといんいや",
    prefecture: "徳島県",
    file: "spring_each/yumotoshiniyaonsen_yumotoiniya_tokushima.html"
  },
  {
    name: "湯村温泉",
    kana: "ゆむら",
    prefecture: "山梨県",
    file: "spring_each/yumuraonsen_yumura_yamanashi.html"
  },
  {
    name: "湯西川温泉",
    kana: "ゆにしがわ",
    prefecture: "栃木県",
    file: "spring_each/yunishikawaonsen_yunishigawa_tochigi.html"
  },
  {
    name: "湯の元温泉",
    kana: "ゆのもと",
    prefecture: "北海道",
    file: "spring_each/yunogenonizumi_yunomoto_hokkaidou.html"
  },
  {
    name: "湯郷温泉",
    kana: "ゆのごう",
    prefecture: "岡山県",
    file: "spring_each/yunogouonsen_yunogou_okayama.html"
  },
  {
    name: "湯野浜温泉",
    kana: "ゆのはま",
    prefecture: "山形県",
    file: "spring_each/yunohamaonsen_yunohama_yamagata.html"
  },
  {
    name: "湯ノ花温泉",
    kana: "ゆのはな",
    prefecture: "京都府",
    file: "spring_each/yunohanaonsen_yunohana_kyoutofu.html"
  },
  {
    name: "湯の花沢温泉",
    kana: "ゆのはなざわ",
    prefecture: "神奈川県",
    file: "spring_each/yunohanazawaonsen_yunohanazawa_kanagawa.html"
  },
  {
    name: "湯の児温泉",
    kana: "ゆのこ",
    prefecture: "熊本県",
    file: "spring_each/yunojionsen_yunoko_kumamoto.html"
  },
  {
    name: "湯野上温泉",
    kana: "ゆのかみ",
    prefecture: "福島県",
    file: "spring_each/yunokamionsen_yunokami_fukushima.html"
  },
  {
    name: "湯の川温泉",
    kana: "ゆのかわ",
    prefecture: "北海道",
    file: "spring_each/yunokawaonsen_yunokawa_hokkaidou.html"
  },
  {
    name: "湯ノ小屋温泉",
    kana: "水上温泉郷）（ゆのこや（みなかみ）",
    prefecture: "群馬県",
    file: "spring_each/yunokoyaonsen_1_gunma.html"
  },
  {
    name: "湯前温泉",
    kana: "ゆのまえ",
    prefecture: "熊本県",
    file: "spring_each/yunomaeonsen_yunomae_kumamoto.html"
  },
  {
    name: "湯の峰温泉",
    kana: "ゆのみね",
    prefecture: "和歌山県",
    file: "spring_each/yunomineonsen_yunomine_wakayama.html"
  },
  {
    name: "湯之谷温泉",
    kana: "鹿児島県）（ゆのたに",
    prefecture: "鹿児島県",
    file: "spring_each/yunotanionsen_1_kakoshima.html"
  },
  {
    name: "湯の谷温泉",
    kana: "ゆのたに",
    prefecture: "熊本県",
    file: "spring_each/yunotanionsen_yunotani_kumamoto.html"
  },
  {
    name: "温泉津温泉",
    kana: "ゆのつ",
    prefecture: "島根県",
    file: "spring_each/yunotsuonsen_yunotsu_shimane.html"
  },
  {
    name: "湯ノ釣温泉",
    kana: "ゆのつる",
    prefecture: "大分県",
    file: "spring_each/yunotsurionsen_yunotsuru_ooita.html"
  },
  {
    name: "湯の鶴温泉",
    kana: "ゆのつる",
    prefecture: "熊本県",
    file: "spring_each/yunotsuruonsen_yunotsuru_kumamoto.html"
  },
  {
    name: "湯ノ浦温泉",
    kana: "ゆのうら",
    prefecture: "愛媛県",
    file: "spring_each/yunouraonsen_yunoura_ehime.html"
  },
  {
    name: "湯の山温泉",
    kana: "ゆのやま",
    prefecture: "三重県",
    file: "spring_each/yunoyamaonsen_yunoyama_mie.html"
  },
  {
    name: "由良温泉",
    kana: "ゆら",
    prefecture: "山形県",
    file: "spring_each/yuraonsen_yura_yamagata.html"
  },
  {
    name: "湯らゆら温泉郷",
    kana: "ゆらゆら",
    prefecture: "京都府",
    file: "spring_each/yurayuraonsensato_yurayura_kyoutofu.html"
  },
  {
    name: "湯迫温泉",
    kana: "ゆば",
    prefecture: "岡山県",
    file: "spring_each/yusakoonsen_yuba_okayama.html"
  },
  {
    name: "湯瀬温泉",
    kana: "ゆぜ",
    prefecture: "秋田県",
    file: "spring_each/yuseonsen_yuze_akita.html"
  },
  {
    name: "湯島温泉",
    kana: "ゆしま",
    prefecture: "鹿児島県",
    file: "spring_each/yushimaonsen_yushima_kakoshima.html"
  },
  {
    name: "湯谷温泉",
    kana: "ゆや",
    prefecture: "愛知県",
    file: "spring_each/yutanionsen_yuya_aichi.html"
  },
  {
    name: "湯坪温泉",
    kana: "ゆつぼ",
    prefecture: "大分県",
    file: "spring_each/yutsuboonsen_yutsubo_ooita.html"
  },
  {
    name: "夕日ヶ浦温泉",
    kana: "ゆうひがうら",
    prefecture: "京都府",
    file: "spring_each/yuuhikeuraonsen_yuuhigaura_kyoutofu.html"
  },
  {
    name: "湯浦温泉",
    kana: "ゆのうら",
    prefecture: "熊本県",
    file: "spring_each/yuuraonsen_yunoura_kumamoto.html"
  },
  {
    name: "雄踏温泉",
    kana: "ゆうとう",
    prefecture: "静岡県",
    file: "spring_each/yuutouonsen_yuutou_shizuoka.html"
  },
  {
    name: "湯宿温泉",
    kana: "ゆじゅく",
    prefecture: "群馬県",
    file: "spring_each/yuyadoonsen_yujuku_gunma.html"
  },
  {
    name: "湯山温泉",
    kana: "ゆやま",
    prefecture: "熊本県",
    file: "spring_each/yuyamaonsen_yuyama_kumamoto.html"
  },
  {
    name: "湯屋温泉",
    kana: "ゆや",
    prefecture: "岐阜県",
    file: "spring_each/yuyaonsen_yuya_gifu.html"
  },
  {
    name: "湯之元温泉",
    kana: "ゆのもと",
    prefecture: "鹿児島県",
    file: "spring_each/yuyukigenonizumi_yunomoto_kakoshima.html"
  },
  {
    name: "湯之野温泉",
    kana: "ゆのの",
    prefecture: "鹿児島県",
    file: "spring_each/yuyukinoonsen_yunono_kakoshima.html"
  },
  {
    name: "湯之尾温泉",
    kana: "ゆのお",
    prefecture: "鹿児島県",
    file: "spring_each/yuyukioonsen_yunoo_kakoshima.html"
  },
  {
    name: "湯涌温泉",
    kana: "ゆわく",
    prefecture: "石川県",
    file: "spring_each/yuyuuonsen_yuwaku_ishikawa.html"
  },
  {
    name: "湯沢温泉",
    kana: "ゆざわ",
    prefecture: "山梨県",
    file: "spring_each/yuzawaonsen_yuzawa_yamanashi.html"
  },
  {
    name: "湯泉地温泉",
    kana: "とうせんじ",
    prefecture: "奈良県",
    file: "spring_each/yuzenchionizumi_tousenji_nara.html"
  },
  {
    name: "蔵王温泉",
    kana: "ざおう",
    prefecture: "山形県",
    file: "spring_each/zaouonsen_zaou_yamagata.html"
  },
  {
    name: "座禅温泉",
    kana: "ざぜん",
    prefecture: "群馬県",
    file: "spring_each/zazenonsen_zazen_gunma.html"
  },
  {
    name: "増富ラジウム温泉",
    kana: "ますとみらじうむ",
    prefecture: "山梨県",
    file: "spring_each/zoutomirajiumuonsen_masutomirajiumu_yamanashi.html"
  }
];
