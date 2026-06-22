const themes = {
    chester: { color: "#87CEEB", icon: "Edisonchester.png" }, // Jasny niebieski
    kaen: { color: "#2E8B57", icon: "Edisonkaen.png" },       // Zielony
    kvn: { color: "#DC143C", icon: "Edisonkvn.png" },         // Czerwony
    nox: { color: "#191970", icon: "Edisonnox.png" },         // Ciemny niebieski
    victor: { color: "#FFD700", icon: "Edisonvictor.png" }    // Żółty
};

function changeTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    // 1. Zmiana koloru paska przeglądarki (Android)
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.setAttribute('name', 'theme-color');
        document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', theme.color);

    // 2. Zmiana stylu strony (np. przez klasę CSS na body)
    document.body.style.backgroundColor = theme.color;
    
    // 3. Opcjonalnie: podmiana favicony w locie
    let link = document.querySelector("link[rel*='icon']");
    link.href = theme.icon;

    console.log(`Motyw zmieniony na: ${themeName}`);
}

// Przykład podpięcia przycisków w HTML:
// <button onclick="changeTheme('chester')">Chester</button>
// <button onclick="changeTheme('kaen')">Kaen</button>
// ... itd.
