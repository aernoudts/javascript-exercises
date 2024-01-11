const repeatString = function(word, times) {
    str = "";
    for (let i = 0; i < times; i++) {
        str+=word
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;

console.log(repeatString('hey', 3));
