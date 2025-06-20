const repeatString = function(str, num) {
    if (num < 0){
        return "ERROR";
        
    }
    let i = 0;
    let repeatedWord = "";
    while (i < num){
        repeatedWord = repeatedWord + str;
        i++;
    }
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
