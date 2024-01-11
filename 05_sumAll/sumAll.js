const sumAll = function(min, max) {
    let sum = 0;
    for (i = min; i <= max; i++) {
        sum+=i;
    }
    return sum;
};

console.log(sumAll(1, 10));

// Do not edit below this line
module.exports = sumAll;
