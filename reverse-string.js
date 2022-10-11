const hello = 'hello'
const howdy = 'Howdy';
const greetings = 'Greetings from Earth';
const specialString = 'Hello! This is my email: guilherme@email.com.br'

function reverseStringBuiltInFunctions(str) {
    return str.split('').reverse().join('');
}

function reverseStringWithLoop(str) {
    let newString = '';

    for(let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}


function reverseStringRecursively(str) {
    if (str === "")
        return "";
    else
        return reverseStringRecursively(str.substr(1)) + str.charAt(0);
}

// console.log(reverseStringBuiltInFunctions(hello));
// console.log(reverseStringBuiltInFunctions(howdy));
// console.log(reverseStringBuiltInFunctions(greetings));

// console.log(reverseStringWithLoop(hello));
// console.log(reverseStringWithLoop(howdy));
// console.log(reverseStringWithLoop(greetings));

// console.log(reverseStringRecursively(hello));
// console.log(reverseStringRecursively(howdy));
// console.log(reverseStringRecursively(greetings));
