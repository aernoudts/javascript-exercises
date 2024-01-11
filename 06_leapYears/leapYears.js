const leapYears = function(year) {
    if (year % 100 == 0) {
        return (year % 400 == 0)
    }
    return (year % 4 == 0);
};

console.log(leapYears(1700));
console.log(leapYears(2004));
console.log(leapYears(1985));
console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;
