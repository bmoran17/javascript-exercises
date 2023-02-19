const sumAll = function(num1, num2) {
    const numArray = [];
    for(let i = num1; i <= num2; i++) {
        numArray.push(i);
    }
    console.log(numArray)
    let total = 0;
    for(const num of numArray){
        total += num;
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
