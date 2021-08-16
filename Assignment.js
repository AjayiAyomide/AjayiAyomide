const shortestWord = function findShortestWord(words) {
    var result = words.reduce((shortWord, currentWord) => {
        return currentWord.length < shortWord.length ? currentWord : shortWord;
    })
    return result;
}

module.exports = shortestWord;