// 題目1.a
function wordReverse(input) {
    var wordResult = [];
    for (let i = 0; i < input.length; i++) {
        wordResult.unshift(input[i]);
    }
    return (wordResult.join(''));
}
console.log(wordReverse('abcdefg')); // test 



// 題目1.2 

function sentenceReverse(sentence) {
    var reverse = [];
    var sentenceArray = sentence.split(' ');
    for (let i = 0; i < sentenceArray.length; i++) {
        reverse.push(wordReverse(sentenceArray[i]))
    }
    return reverse.join(' ');
}

console.log(sentenceReverse("hello world is important")); // test