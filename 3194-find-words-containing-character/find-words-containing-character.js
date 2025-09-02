/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr = [];
    for(i=0; i < words.length; i++) {
        for(j=0; j < words[i].length; j++) {
            if(x === words[i][j]){
                arr.push(i);
                break;
            }
        }
    }
    return arr;
};