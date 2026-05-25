const convertToCelsius = function(tempCel) {
    tempCel = ((tempCel - 32) * (5/9));
    tempCel = Math.round(tempCel * 10) / 10;

    return tempCel;
};



const convertToFahrenheit = function(tempFahr) {
    tempFahr = (tempFahr * (9/5) + 32);
    tempFahr = Math.round(tempFahr * 10) / 10;

    return tempFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
