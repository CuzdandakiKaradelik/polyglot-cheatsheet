/**
 * Arayüz (DOM) Etkileşim ve Event Yönetim Modülü
 */

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("atlas-container");
    const searchInput = document.getElementById("search-input");
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    // Sayaç verisini ilk açılışta motordan çekip ekrana yazma
    const stats = window.polyglotEngine.getStats();
    document.getElementById("stat-total").innerText = stats.totalCards;

    // Dinamik HTML Kart Üretim Operasyonu
    function displayCards(dataList) {
        container.innerHTML = "";

        if (dataList.length === 0) {
            container.innerHTML = `
                <div class="no-result">
                    <p>Aradığınız kriterlere uygun dil grubu veya kelime eşleşmesi bulunamadı.</p>
                </div>
            `;
            return;
        }

        dataList.forEach(item => {
            const card = document.createElement("div");
            card.className = "polyglot-card";

            let langBoxesHTML = item.karsilastirmalar.map(k => `
                <div class="lang-box">
                    <div class="lang-title">${k.dil}</div>
                    <div class="lang-value">${k.kelime}</div>
                    <div class="lang-tip">💡 ${k.ipucu}</div>
                </div>
            `).join("");

            card.innerHTML = `
                <div class="card-meta">
                    <span class="category-badge">${item.kategori}</span>
                    <span class="translation-info">Anlamı: ${item.turkce}</span>
                </div>
                <p class="category-desc">${item.detay}</p>
                <div class="languages-grid">
                    ${langBoxesHTML}
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Canlı Klavye Dinleyicisi (Real-time Search)
    searchInput.addEventListener("input", (e) => {
        const results = window.polyglotEngine.search(e.target.value);
        displayCards(results);
    });

    // Filtre Butonları Tıklama Olayları Yönetimi
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");

            const family = e.target.getAttribute("data-family");
            const filtered = window.polyglotEngine.filterByFamily(family);
            
            searchInput.value = ""; // Filtre değişince arama kutusunu sıfırla
            displayCards(filtered);
        });
    });

    // Başlangıç Durumu Tetiklemesi
    displayCards(window.polyglotEngine.currentData);
});