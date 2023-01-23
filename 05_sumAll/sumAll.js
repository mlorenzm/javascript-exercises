const sumAll = function(n,m) {
    if (typeof n != 'number' || typeof m != 'number'){
        return 'ERROR';
    } else if (n < 0 || m < 0){
        return 'ERROR';

    } else{
        let largeNum = Math.max(n,m);
        let smallNum = Math.min(n,m);
        let result = 0;
        for (i = smallNum; i <= largeNum; i++){
            result = result + i;
            }
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
