const reverseString = function(str) {
     let arr = str.split('');
  let arrReverse = [];
  for (let i = 0; i < arr.length; i++) {
    let removedNumber = arr.pop();
    arr.unshift(removedNumber)
    arrReverse.push(removedNumber);
  }

  return arrReverse.join('');
};

// Do not edit below this line
module.exports = reverseString;
