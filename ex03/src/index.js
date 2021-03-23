function printManyTimes(str) {
    "use strict"

// Change doe only below this line

const SENTENCE = str + " is cool!";
for (let i = 0; i < str.length; i +=2) {
    console.log(SENTENCE);
}

return SENTENCE;
// Change code only above this line
}
printManyTimes("Arena");
module.exports = printManyTimes;