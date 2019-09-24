let without = function(source, remove) {
  let newArr = source.filter(function(num) {
    return !remove.includes(num);
  });
  return newArr;
};

module.exports = without;

//declare a new empty array
// new array = source
// source gets filtered with the input from "remove" until .includes() = false;
// console.log(without([1, 2, 3], [1]));



