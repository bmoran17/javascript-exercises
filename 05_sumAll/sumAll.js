const sumAll = function(num1, num2) {
    let total = 0;
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    if (num1 < 0 || num2 < 0) return "ERROR";

    if (num1 > num2) {
        const largerNum = num1
        num1 = num2
        num2 = largerNum
    }

    // adding all numbers in btw
    for(let i = num1; i <= num2; i++) {
        total += i
    }
    return total
}
// Do not edit below this line
module.exports = sumAll;
