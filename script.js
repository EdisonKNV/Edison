const themes = {
    chester: { color: "#87CEEB", icon: "Edisonchester.png" },
    kaen: { color: "#2E8B57", icon: "Edisonkaen.png" },
    kvn: { color: "#DC143C", icon: "Edisonkvn.png" },
    nox: { color: "#191970", icon: "Edisonnox.png" },
    victor: { color: "#FFD700", icon: "Edisonvictor.png" }
};

function changeTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    // Zmiana koloru paska przeglądarki
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    metaThemeColor.setAttribute('content', theme.color);

    // Zmiana tła
    document.body.style.backgroundColor = theme.color;
    
    // Prawidłowa podmiana ikony (usuwanie starej, tworzenie nowej)
    let oldIcon = document.querySelector("link[rel~='icon']");
    if (oldIcon) document.head.removeChild(oldIcon);
    
    let newIcon = document.createElement('link');
    newIcon.rel = 'icon';
    newIcon.href = theme.icon;
    document.head.appendChild(newIcon);

    console.log(`Motyw: ${themeName}`);
}

// Funkcja losująca
function setRandomTheme() {
    const keys = Object.keys(themes);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    changeTheme(randomKey);
}

// Uruchom losowanie przy starcie strony
document.addEventListener('DOMContentLoaded', setRandomTheme);
