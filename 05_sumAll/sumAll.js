const sumAll = function(num1, num2) {

    // Check if the input values are <0 or not a Integers
    if (num1<0 | num2<0 | !Number.isInteger(num1) | !Number.isInteger(num2)) {
        return "ERROR";
    }    
    else {
        // Create a variable to hold the final sum
        sum = 0;
        temp = num1;
        if (num1 < num2) {
            while (temp <= num2) {
                sum += temp;
                temp++;
            }
        }
        else if (num1 > num2) {
            while (temp >= num2) {
                sum += temp;
                temp--;
            }
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
