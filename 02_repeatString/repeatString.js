const repeatString = function(string, num) {
    temp = "";
    if (num < 0) {
        temp = "ERROR";
    }
    else {    
        for (i=0;i<num;i++) {
            temp = temp + string;
        }
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
