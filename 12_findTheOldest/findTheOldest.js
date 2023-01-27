const findTheOldest = function(array) {
    for (let i = 0; i < array.length; i++){
        if (array[i].yearOfDeath == undefined){
            array[i].yearOfDeath = '2023';
        } 
    array[i].age = array[i].yearOfDeath - array[i].yearOfBirth;
    };
    const highest = array.reduce((previous, current) => {
        return current.age > previous.age ? current : previous;
      }); return highest; // Thanks StackOverflow
};

// Do not edit below this line
module.exports = findTheOldest;
