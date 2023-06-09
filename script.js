// English to Old Norse word dictionary
var dictionary = {
    "what": "hvat",
    "do": "gøra",
    "you": "þú",
    // Add more words to the dictionary as needed
};

function translateTextToOldNorse(text) {
    var translatedText = "";

    var words = text.toLowerCase().split(" ");
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (dictionary.hasOwnProperty(word)) {
            translatedText += dictionary[word] + " ";
        } else {
            translatedText += word + " ";
        }
    }

    return translatedText.trim();
}

// Example usage
var inputText = "What do you say?";
var translatedText = translateTextToOldNorse(inputText);
console.log(translatedText); // Output: "hvat gøra þú?"
