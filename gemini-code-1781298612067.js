/**
 * Polyglot CheatSheet - Çekirdek Arama ve Filtreleme Motoru
 * Kurumsal kod standartlarına uygun mimari yapı sınıfı.
 */

class PolyglotEngine {
    constructor() {
        // Tüm veri modüllerini tek bir çatı altında birleştiriyoruz (Dinamik Birleştirme)
        this.allData = [...GERMANIC_DATA, ...ROMANCE_DATA];
        this.currentData = [...this.allData];
        this.activeFilter = 'all';
    }

    // Gelişmiş akıllı arama algoritması
    search(query) {
        const cleanQuery = query.toLowerCase().trim();
        
        if (!cleanQuery) {
            this.filterByFamily(this.activeFilter);
            return this.currentData;
        }

        return this.allData.filter(item => {
            const inKategori = item.kategori.toLowerCase().includes(cleanQuery);
            const inTurkce = item.turkce.toLowerCase().includes(cleanQuery);
            const inDetay = item.detay.toLowerCase().includes(cleanQuery);
            
            const inLanguages = item.karsilastirmalar.some(k => 
                k.dil.toLowerCase().includes(cleanQuery) || 
                k.kelime.toLowerCase().includes(cleanQuery)
            );

            return inKategori || inTurkce || inDetay || inLanguages;
        });
    }

    // Dil ailesi filtreleme mekanizması
    filterByFamily(family) {
        this.activeFilter = family;
        
        if (family === 'all') {
            this.currentData = [...this.allData];
        } else if (family === 'germanic') {
            this.currentData = [...GERMANIC_DATA];
        } else if (family === 'romance') {
            this.currentData = [...ROMANCE_DATA];
        }
        
        return this.currentData;
    }

    // Dinamik istatistik ve metrik hesaplama motoru
    getStats() {
        return {
            totalCards: this.allData.length,
            totalLanguages: 6,
            germanicCount: GERMANIC_DATA.length,
            romanceCount: ROMANCE_DATA.length
        };
    }
}

// Nesneyi tarayıcı penceresine bağlayarak global erişim sağlama
window.polyglotEngine = new PolyglotEngine();