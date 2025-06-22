const sumAll = function(num1, num2) {
    let sum = 0;
    let newArray = [];
    if (num1 < 0 || num2 < 0 || typeof num1 !== typeof 1 || typeof num2 !== typeof 1 || num1 % 1 !== 0 || num2 % 1 !== 0){
        return "ERROR";
    }
    if (num1 < num2){
        while (num1 <= num2){
            newArray.push(num1);
            num1++;
        }
        for (let i = 0; i < newArray.length; i++){
            sum = sum + newArray[i];
        }
    } else if (num1 > num2){
        while (num1 >= num2){
            newArray.push(num1);
            num1--;
        }
        for (let i = 0; i < newArray.length; i++){
            sum = sum + newArray[i];
        }
    };
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
