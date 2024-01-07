// Rune translation object for different alphabets
const runeAlphabets = {
    'elder-futhark': {
        A: "ᚨ", B: "ᛒ", C: "ᚲ", D: "ᛞ", E: "ᛖ", F: "ᚠ", G: "ᚷ", H: "ᚺ", I: "ᛁ", J: "ᛃ",
        K: "ᚲ", L: "ᛚ", M: "ᛗ", N: "ᚾ", O: "ᛟ", P: "ᛈ", Q: "ᚲ", R: "ᚱ", S: "ᛋ", T: "ᛏ",
        U: "ᚢ", V: "ᚢ", W: "ᚹ", X: "ᛉ", Y: "ᚤ", Z: "ᛉ"
    },
    'younger-futhark': {
        A: "ᛅ", B: "ᛘ", C: "ᚴ", D: "ᛁ", E: "ᛁ", F: "ᚠ", G: "ᚼ", H: "ᚼ", I: "ᛁ", J: "ᛁ",
        K: "ᚴ", L: "ᛚ", M: "ᛘ", N: "ᚾ", O: "ᚢ", P: "ᛅ", Q: "ᚴ", R: "ᚱ", S: "ᛋ", T: "ᛏ",
        U: "ᚢ", V: "ᚢ", W: "ᚢ", X: "ᛋ", Y: "ᚤ", Z: "ᛋ"
    }
    // Add more alphabets as needed
};

// Function to translate text
function translateText() {
    const input = document.getElementById("input-text").value.toUpperCase();
    const selectedAlphabet = document.getElementById("alphabet-select").value;
    
    if (!(selectedAlphabet in runeAlphabets)) {
        alert("Invalid runic alphabet selected.");
        return;
    }

    const runeTranslations = runeAlphabets[selectedAlphabet];
    
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

// Function to clear input and output fields
function clearFields() {
    document.getElementById("input-text").value = "";
    document.getElementById("output-text").textContent = "";
}

// Function to copy translated text to clipboard
function copyToClipboard() {
    const outputText = document.getElementById("output-text");
    const textArea = document.createElement("textarea");
    textArea.value = outputText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    document.body.removeChild(textArea);
    alert("Translated text copied to clipboard!");
}

// Add event listeners
document.getElementById("translate-btn").addEventListener("click", translateText);
document.getElementById("clear-btn").addEventListener("click", clearFields);
document.getElementById("copy-btn").addEventListener("click", copyToClipboard);
