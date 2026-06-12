// Cermen Dil Ailesi Veri Modülü
const GERMANIC_DATA = [
    {
        id: "g1",
        kategori: "Zamirler & Kişiler",
        turkce: "Ben, Sen, O, Biz, Siz, Onlar",
        detay: "Temel şahıs ekleri ve diller arası fonetik benzerlikler.",
        karsilastirmalar: [
            { dil: "İngilizce 🇬🇧", kelime: "I, You, He/She/It, We, You, They", ipucu: "Maskulin/Feminin ayrımı sadece 3. tekilde var." },
            { dil: "Almanca 🇩🇪", kelime: "Ich, Du, Er/Sie/Es, Wir, Ihr, sie", ipucu: "Nezaket formu olan 'Sie' büyük harfle yazılır." },
            { dil: "Hollandaca 🇳🇱", kelime: "Ik, Je/Jij, Hij/Zij/Het, We/Wij, Jullie, Ze/Zij", ipucu: "Almanca ve İngilizce arasında bir köprü gibidir." }
        ]
    },
    {
        id: "g2",
        kategori: "Temel Fiiller: Olmak",
        turkce: "Olmak fiilinin şimdiki zaman çekimleri",
        detay: "Irregular (düzensiz) yapılardır, ezberlenmesi gerekir.",
        karsilastirmalar: [
            { dil: "İngilizce 🇬🇧", kelime: "am / is / are", ipucu: "I am, He is, They are." },
            { dil: "Almanca 🇩🇪", kelime: "bin / bist / ist / sind / seid / sind", ipucu: "Ich bin, Du bist." },
            { dil: "Hollandaca 🇳🇱", kelime: "ben / bent / is / zijn", ipucu: "Ik ben, Jij bent." }
        ]
    },
    {
        id: "g3",
        kategori: "Temel Fiiller: Sahip Olmak",
        turkce: "Bir şeye sahip olduğunu belirtmek (Have)",
        detay: "Cermen dillerinde sahip olmak yardımcı fiili geçmiş zaman kurarken de kullanılır.",
        karsilastirmalar: [
            { dil: "İngilizce 🇬🇧", kelime: "have / has", ipucu: "He/She/It için 'has' kullanılır." },
            { dil: "Almanca 🇩🇪", kelime: "habe / hast / hat / haben / habt", ipucu: "Ich habe, Du hast, Er hat." },
            { dil: "Hollandaca 🇳🇱", kelime: "heb / hebt / heeft / hebben", ipucu: "Ik heb, Jij hebt." }
        ]
    },
    {
        id: "g4",
        kategori: "Soru Kelimeleri (W-Words)",
        turkce: "Ne, Kim, Nerede, Neden, Nasıl",
        detay: "Bu dillerde soru kelimelerinin neredeyse tamamı 'W' harfi ile başlar.",
        karsilastirmalar: [
            { dil: "İngilizce 🇬🇧", kelime: "What, Who, Where, Why, How", ipucu: "How istisnadır ama köken olarak aynı gruptadır." },
            { dil: "Almanca 🇩🇪", kelime: "Was, Wer, Wo, Warum, Wie", ipucu: "Wer 'Kim' demektir, İngilizce Where ile karıştırmayın!" },
            { dil: "Hollandaca 🇳🇱", kelime: "Wat, Wie, Waar, Waarom, Hoe", ipucu: "Almanca ses yapısına aşırı benzer." }
        ]
    },
    {
        id: "g5",
        kategori: "Sayılar (1 - 5)",
        turkce: "Bir, İki, Üç, Dört, Beş",
        detay: "Sayıların okunuşları ve yazılışları ortak ata dilden ötürü paraleldir.",
        karsilastirmalar: [
            { dil: "İngilizce 🇬🇧", kelime: "One, Two, Three, Four, Five", ipucu: "Kelimelerin ritmine dikkat edin." },
            { dil: "Almanca 🇩🇪", kelime: "Eins, Zwei, Drei, Vier, Fünf", ipucu: "Zwei kelimesi 'tsvay' olarak okunur." },
            { dil: "Hollandaca 🇳🇱", kelime: "Eén, Twee, Drie, Vier, Vijf", ipucu: "Yazılışları Almancaya fonetiği İngilizceye yakındır." }
        ]
    }
];