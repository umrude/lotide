const assertObjectsEqual = function(actual, expected) {
  let message = "";
  const inspect = require('util').inspect;
  let eqArrays = function(arr1, arr2) {
    let result;
    for (let x = 0; x <= arr1.length; x++) {
      if (arr1[x] !== arr2[x]) {
        result = false;
        break;
      } else if (arr1[x] === arr2[x]) {
        result = true;
      }
    }
    return result;
  };


  const eqObjects = function(object1, object2) {
    let obj1 = Object.keys(object1);
    let obj2 = Object.keys(object2);

    if (obj1.length !== obj2.length) {
      return false;
    }

    for (let i in object1) {
      if (Array.isArray(object1[i]) || Array.isArray(object2[i])) {
        //if either value are an array then vvv
        if (!eqArrays(object1[i], object2[i])) {
          // if it fails then return false
          return false;
        }
        if (!Array.isArray(object1[i]) && !Array.isArray(object2[i])) {
          if (!object2.hasOwnProperty(i)) { //else if not an array, treat at primitive data type
            // if object2 doesnt have object1[i] key return false
            return false;
          }
          if (object1[i] !== object2[i]) {
            //if object[1] is not equal to the value of object[2] return false
            return false;
          }
        }
      }
    }
    return true;
  };

  let result = eqObjects(actual,expected);

  if (result) {
    message = `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else if (!result) {
    message = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  console.log(message);
};

const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};

assertObjectsEqual(ab, ba);