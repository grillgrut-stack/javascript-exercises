let name = "Hello"
const reverseString = function(name) {

    let reverse = "";

    let chars = Array.from(name);

    
    for (let i = name.length - 1 ; i >= 0; i--) {
        reverse += chars[i];
    }


    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
