// Rune translation object
const runeTranslations = {
    A: "ᚨ",
    B: "ᛒ",
    C: "ᚲ",
    D: "ᛞ",
    E: "ᛖ",
    F: "ᚠ",
    G: "ᚷ",
    H: "ᚺ",
    I: "ᛁ",
    J: "ᛃ",
    K: "ᚲ",
    L: "ᛚ",
    M: "ᛗ",
    N: "ᚾ",
    O: "ᛟ",
    P: "ᛈ",
    Q: "ᚲ",
    R: "ᚱ",
    S: "ᛋ",
    T: "ᛏ",
    U: "ᚢ",
    V: "ᚢ",
    W: "ᚹ",
    X: "ᛉ",
    Y: "ᚤ",
    Z: "ᛉ"
};

// Function to translate text
function translateText() {
    const input = document.getElementById("input-text").value.toUpperCase();
    let output = "";

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char in runeTranslations) {
            output += runeTranslations[char];
        } else {
            output += char;
        }
    }

    document.getElementById("output-text").textContent = output;
}

// Add event listener to the translate button
document.getElementById("translate-btn").addEventListener("click", translateText);
