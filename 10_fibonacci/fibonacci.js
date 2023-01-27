const fibonacci = function(n) {
    if (n <= 0){
        return 'OOPS';
    } else{
    fib = [1, 1];
    for (let i = 2; i < n; i++){
        fib.push(fib[i-1] + fib[i-2]);
    } return fib.pop();
    }
};

// Do not edit below this line
module.exports = fibonacci;
