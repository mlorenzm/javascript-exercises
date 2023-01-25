const palindromes = function (input) {
    let string = input.toLowerCase();
     string = string.replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, ""); // Thanks StackOverflow
    console.log(string);
    let forward = string.split('');
    console.log(forward)
    let reverse = forward.reverse();
    console.log(reverse)
    let joined = reverse.join('');
    console.log(joined)
    if (string == joined){
        return true;
    } else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
