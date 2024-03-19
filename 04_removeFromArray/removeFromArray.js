const removeFromArray = function(arr, num) {
    temp = [];
    for (i = 0; i < arr.length; i++) {
        if (i==num) {
            continue;
        }
        else {
            temp.push(arr[i]);
        }
    }
    return temp.toString();
};

// Do not edit below this line
module.exports = removeFromArray;
