const removeFromArray = function(array,...values) {
    newArray = [];
    for (let i = 0; i < array.length; i++){
        let matchFound = false;
        for (let j = 0; j < values.length; j++){
            if (array[i] === values[j]){
                matchFound = true;
            }
        }
        if (matchFound === false){
             newArray.push(array[i]);
        }
        }
        return newArray;
    };

// Do not edit below this line
module.exports = removeFromArray;
