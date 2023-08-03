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

    // Save to localStorage
    localStorage.setItem("lastTranslation", output);

    // Add to history
    addToHistory(input, output);
}

// Add to history
function addToHistory(input, output) {
    // Get existing history
    let history = JSON.parse(localStorage.getItem("translationHistory") || "[]");
  
    // Add new translation to history
    history.push({ input, output });
  
    // Save history
    localStorage.setItem("translationHistory", JSON.stringify(history));

    // Update history view
    showHistory();
}

// Show history
function showHistory() {
    // Get history
    let history = JSON.parse(localStorage.getItem("translationHistory") || "[]");

    // Get history element
    let historyElement = document.getElementById("history");

    // Reset history view
    historyElement.innerHTML = "";

    // Add each item in history to history view
    history.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${item.input} => ${item.output}`;
        historyElement.appendChild(listItem);
    });
}

// Event listeners
document.getElementById("translate-btn").addEventListener("click", translateText);

// Initialize history view
showHistory();

// Loading screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(function() {
        loadingScreen.style.opacity = '100';
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 1000); // This time is in seconds
    }, 1000); // This time is in seconds
});
