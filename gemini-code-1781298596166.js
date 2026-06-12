// Latin Dil Ailesi Veri Modülü
const ROMANCE_DATA = [
    {
        id: "r1",
        kategori: "Zamirler & Kişiler",
        turkce: "Ben, Sen, O, Biz, Siz, Onlar",
        detay: "Latin kökenli dillerde zamirler genellikle fiil çekiminden dolayı düşebilir.",
        karsilastirmalar: [
            { dil: "İspanyolca 🇪🇸", kelime: "Yo, Tú, Él/Ella, Nosotros, Vosotros, Ellos", ipucu: "Vosotros sadece İspanya'da kullanılır." },
            { dil: "Fransızca 🇫🇷", kelime: "Je, Tu, Il/Elle, Nous, Vous, Ils/Elles", ipucu: "Je fiilden önce sesli harf gelirse J' olur." },
            { dil: "İtalyanca 🇮🇹", kelime: "Io, Tu, Lui/Lei, Noi, Voi, Loro", ipucu: "Konuşma dilinde zamir neredeyse hiç kullanılmaz." }
        ]
    },
    {
        id: "r2",
        kategori: "Temel Fiiller: Olmak",
        turkce: "Olmak fiilinin şimdiki zaman çekimleri",
        detay: "İspanyolca ve İtalyancada iki farklı 'olmak' fiili vardır (kalıcı/geçici durumlar).",
        karsilastirmalar: [
            { dil: "İspanyolca 🇪🇸", kelime: "Soy / Estoy", ipucu: "Ser (kalıcı öz nitelik), Estar (geçici durum/konum)." },
            { dil: "Fransızca 🇫🇷", kelime: "Suis, Es, Est, Sommes, Êtes, Sont", ipucu: "Être fiilinin çekimidir." },
            { dil: "İtalyanca 🇮🇹", kelime: "Sono, Sei, È, Siamo, Siete, Sono", ipucu: "Essere fiilinin çekimidir." }
        ]
    },
    {
        id: "r3",
        kategori: "Temel Fiiller: Sahip Olmak",
        turkce: "Bir şeye sahip olduğunu belirtmek (Have)",
        detay: "Latin dillerinde yaş söylenirken 'sahip olmak' fiili kullanılır (Örn: 20 yaşındayım -> 20 yıla sahibim).",
        karsilastirmalar: [
            { dil: "İspanyolca 🇪🇸", kelime: "Tengo, Tienes, Tiene, Tenemos, Tenéis", ipucu: "Tener fiilinin çekimidir." },
            { dil: "Fransızca 🇫🇷", kelime: "Ai, As, A, Avons, Avez, Ont", ipucu: "Avoir fiilinin çekimidir. J'ai un livre." },
            { dil: "İtalyanca 🇮🇹", kelime: "Ho, Hai, Ha, Abbiamo, Avete, Hanno", ipucu: "Avere fiilinin çekimidir. 'H' harfleri okunmaz." }
        ]
    },
    {
        id: "r4",
        kategori: "Nezaket Sözcükleri",
        turkce: "Lütfen, Teşekkür Edeirm, Rica Ederim",
        detay: "Günlük hayatta en sık kullanılan kültürel bağ kurma kelimeleri.",
        karsilastirmalar: [
            { dil: "İspanyolca 🇪🇸", kelime: "Por favor, Gracias, De nada", ipucu: "Gracias'taki 'c' İspanya'da 'th' gibi okunur." },
            { dil: "Fransızca 🇫🇷", kelime: "S'il vous plaît, Merci, De rien", ipucu: "S'il te plaît samimi arkadaş ortamında kullanılır." },
            { dil: "İtalyanca 🇮🇹", kelime: "Per favore, Grazie, Prego", ipucu: "Prego kelimesi çok işlevlidir, her ricaya uyar." }
        ]
    },
    {
        id: "r5",
        kategori: "Sayılar (1 - 5)",
        turkce: "Bir, İki, Üç, Dört, Beş",
        detay: "Kelimelerin kökeni tamamen Latince 'unus, duo, tres' formuna dayanır.",
        karsilastirmalar: [
            { dil: "İspanyolca 🇪🇸", kelime: "Uno, Dos, Tres, Cuatro, Cinco", ipucu: "Cuatro kelimesi 'kuatro' okunur." },
            { dil: "Fransızca 🇫🇷", kelime: "Un, Deux, Trois, Quatre, Cinq", ipucu: "Trois kelimesi 'trua' şeklinde telaffuz edilir." },
            { dil: "İtalyanca 🇮🇹", kelime: "Uno, Due, Tre, Quattro, Cinque", ipucu: "Yazıldığı gibi okunan en temiz Latin dilidir." }
        ]
    }
];