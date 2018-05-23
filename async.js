// Asynchronous paradigm with single thread.
// console.log('1');
// setTimeout(() => {
//     console.log('2 Seconds passed.');
// }, 2000);
// setTimeout(() => {
//     console.log('0 Seconds passed.');
// }, 0);
// console.log('2');

function foo(b){
    let a = 5;
    return a * b + 10;
}

function bar(x) {
    let y = 3;
    return x * y;
}

console.log(bar(6));

// let square = function(a, b) {
//     return multiply(a, b);
// }

// let multiply = function(a, b) {
//     return product(a, b);
// }

// let product = function(a, b) {
//     return a * b;
// }

// let result = square(10, 10); // 100

// console.log(result);
