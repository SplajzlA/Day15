function checkVariableScope() {
    'use strict'

// Only change code below this line
let i ='function variable';

// Only change code above this line
if (true) {

// Only change code below this line
let i = 'block variable';
// Only change code abvoe this line

    console.log('Scope i is: ', i);
}
console.log('Scope i is: ', i);
return i;
}
//console.log(checkVariableScope());
checkVariableScope();
module.exports = checkVariableScope;