const removeFromArray = function(array, ...args) {
    for (let arg of args) {
        let argIndex = array.indexOf(arg);
        if (argIndex === -1) {
            continue;
        } else {
            array.splice(argIndex, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
