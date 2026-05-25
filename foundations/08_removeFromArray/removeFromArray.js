let arr = [1, 2, 3, 4];

let num = 3

const removeFromArray = function(arr, ...removeNum) {

   

    for (let i = 0; i < arr.length; i++) {
        for (let z = 0; z < removeNum.length; z++) {
            if (arr[i] === removeNum[z]) {
                    arr.splice(i,1);
                    i--;
            }

        }
    }

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
