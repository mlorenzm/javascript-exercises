const reverseString = function(str) {
    let array = str.split('');
    let result = array.reverse().join('');
    return result;
};

// Do not edit below this line
module.exports = reverseString;
