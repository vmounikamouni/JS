function reverseWordsInSentence(sentence) {
    return sentence
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}

// Example usage:
var inputSentence = "This is a sunny day";
var reversed = reverseWordsInSentence(inputSentence);
console.log(reversed); // Output: "shiT si a ynnus yad"
