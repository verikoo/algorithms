// function reverseString(str){
//     return str.split('').reverse().join('');
// }


// second solution with arrow functions

// const reverseString = (str) => str.split('').reverse().join('');


// 3rd solution reverse for loop 
function reverseString(str){
    reversed='';
    for(let i=str.length-1; i>=0; i--){
       reversed += str[i];
    }
    return reversed;
}


module.exports = reverseString;