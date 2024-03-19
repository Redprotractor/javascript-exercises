const removeFromArray = function(arr, ...args) {
    temp = [];
    arr.forEach((it) => {
        if (!args.includes(it)) {
            temp.push(it);
        }
    });
    return temp;
};

// Do not edit below this line
module.exports = removeFromArray;
