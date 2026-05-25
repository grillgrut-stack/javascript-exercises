const leapYears = function(numYear) {
    if((numYear % 4) === 0) {
        if((numYear % 400) === 0) {
            return true;
        }

        if((numYear % 100) === 0) {
            return false;
        }

        return true;

    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
