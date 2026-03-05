// Fonction pour empêcher l'écran de s'éteindre
async function bloquerMiseEnVeille() {
    try {
        await capacitor.Plugins.KeepAwake.keepAwake();
        console.log("Écran bloqué : il ne s'éteindra plus.");
    } catch (e) {
        console.error("Erreur WakeLock:", e);
    }
}

// Fonction pour autoriser à nouveau la mise en veille
async function autoriserMiseEnVeille() {
    try {
        await capacitor.Plugins.KeepAwake.allowSleep();
        console.log("L'écran peut à nouveau s'éteindre.");
    } catch (e) {
        console.error("Erreur Sleep:", e);
    }
}

// EXEMPLE : Dans ton bouton Start
document.getElementById('btnStart').addEventListener('click', () => {
    bloquerMiseEnVeille();
    // ... le reste de ton code pour le GPS
});

// EXEMPLE : Dans ton bouton Stop
document.getElementById('btnStop').addEventListener('click', () => {
    autoriserMiseEnVeille();
    // ... le reste de ton code
});
