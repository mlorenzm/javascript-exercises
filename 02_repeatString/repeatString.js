const repeatString = function(str, n) {
    result = '';
    if (n < 0) {result = 'ERROR'
    }
     else{
        for (let i = 0; i < n; i++) {
            result += str;
        } 
    }   
        return result;
};

// Do not edit below this line
module.exports = repeatString;
