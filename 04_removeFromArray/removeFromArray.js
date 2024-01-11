const removeFromArray = function (array, ...args) {
    const newArray = [];
    array.forEach((item) => {
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    return newArray;
  };

  console.log(removeFromArray([1, 5, 2, 9, 10, 14], 1, 10));
  
  module.exports = removeFromArray;