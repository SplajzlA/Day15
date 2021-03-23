const milili = [10, 25,4];

function myArray (mili) {
    'use strict'
// Only change code below this line
// Using mili = [4, 10, 25] would be invalid
mili [0] = 4;
mili [1] = 10;
mili [2] = 25;
// Change code only above this line
return mili;
}
console.log(myArray(milili));
module.exports = myArray;