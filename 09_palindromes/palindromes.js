const palindromes = function (string) {
    let punctuation = /[\.,?! ]/g;
    string = string.replace(punctuation, "");
    let reversed = '';
    for (let i = string.length-1; i >= 0; i--) {
        reversed+=string.at(i);
        }
    return (string.toLowerCase() === reversed.toLowerCase());
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes("A car, a man, a maraca."));
