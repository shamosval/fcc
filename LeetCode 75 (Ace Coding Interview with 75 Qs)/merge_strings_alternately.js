/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let longerWord;
    if (word1.length >= word2.length) {
        longerWord = word1;
    } else {
        longerWord = word2;
    }
    let mergedWord = '';
    for (let i = 0; i < longerWord.length; i++) {
        if (i < word1.length) {
            mergedWord = mergedWord + word1[i]
        }
        if (i < word2.length) {
            mergedWord = mergedWord + word2[i]
        }
    }
    console.log(mergedWord);
    return (mergedWord);

};

mergeAlternately('bygh', 'opium');