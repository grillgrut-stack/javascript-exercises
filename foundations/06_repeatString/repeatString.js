
let name = "hello";
let num = 0

const repeatString = function(name, num) {

    if (num < 0) {
        return "ERROR";
    }


    let words = '';

    for (let i = 0; i < num; i++) {
        words += name;
    }

    return words;

};

// Do not edit below this line
module.exports = repeatString;
