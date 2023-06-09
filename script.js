// English to Old Norse word dictionary
var dictionary = {
    "what": "hvat",
    "do": "gøra",
    "you": "þú",
    // Add more words to the dictionary as needed
};

function translate() {
    var input = document.getElementById("inputText").value.toLowerCase();
    var output = document.getElementById("outputText");

    var translatedText = "";

    var words = input.split(" ");
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (dictionary.hasOwnProperty(word)) {
            translatedText += dictionary[word] + " ";
        } else {
            translatedText += word + " ";
        }
    }

    output.innerHTML = translatedText.trim();
}
