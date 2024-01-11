const reverseString = function(str) {
    let reversedString = '';
    for (let i = -1; i >= str.length * -1; i--) {
        reversedString+=str.at(i);
    }
    return reversedString;
};

console.log(reverseString('hello there'));

module.exports = reverseString;
