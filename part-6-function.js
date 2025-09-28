// function in js

// function is a standing pillar in the programming we can do furthere programming on funtion.

function hello () {
    console.log("hello");
}
// hello();

function printName() {
    console.log ("Dhyey Chauhan");
}

// printName();

function print1to5 () {
    for(let i = 1; i <=5; i++) {
        console.log(i);
    }
}

// print1to5();

// create a function to roll a dice and always displey the value of the dice bet(1 to 6)

function rollDice () {
    let dice = (Math.floor(Math.random() * 6) + 1)
    console.log(dice);
}

// rollDice();


// functions with arguments //

// value that we pass to the function

function pirntInfo(name,age) {
    console.log(`${name}'s age is ${age}`)
} 

// pirntInfo("dhyey",21); // order is very important in function u can leave last parameter but not front one.

function averageOf3 (a,b,c) {
  let average = (a+b+c)/3;
  console.log(average);
}

// averageOf3(4,6,5);

function multiplicationTable (n) {
    for (let i = 1 ; i <= 10; i++) {
        console.log(i * n);
    }
}
// multiplicationTable(2);

// return keyword 

// used to return the value from the function

function summ(a,b) {
    return a + b; // this will return only one value.
    console.log("hello"); // this code is unreachable. 
}

// if we have to return multiple value than we have to store it into object or an array/

let s = summ(2,3);
// console.log(s);

let su = summ(summ(1,2),3);
// console.log(su);

// function that return sum of n number;

function sumofNnumber(n) {
    let sum = 0;
    for(let i = 0; i <=n; i++) {
        
        sum = sum + i;
    }
    return sum;
}

// console.log(sumofNnumber(3));

// function that return the concetenation of all strings in an array.

let arr = [];

function concetanationOfstring(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i];
    }
    return str;
}

// console.log(concetanationOfstring(["hello","brother"]));

// scope in javascript

// scope determines the accesibility of variables , objects, and functions from different parts of a code.

// three type of scope (function,block,lexical)

// function that defines under the function are not accessible from the outside of the function.

// let mul = 54;  // global scope

// function mul() {
//     let mul = 24; // function scope
//     console.log(mul);  // inside function we can use global scope variable.
// }

// # block scope

// function that defines under the block are not accessible from the outside of the function.

// # lexical scope

function outerFunc() {
    let x = 5;
    let y = 10;
    function innerFunc() {
        return x; 
    }
    return innerFunc(); // returns 5
}

// console.log(outerFunc()); // logs 5

// function expression or nameless function

// where we define our function and store it into the variable
// function called with an variable name.

const summation = function(a,b) {
    return a + b;
}

// console.log(summation(2,3));

// higher order function that takes input as an one or multiple function.

function printMultiplegreet(func,count) {
    for(let i = 1; i <= count; i++){
        greet();
    }
}

let greet = function() {
    console.log("hello");
}

// printMultiplegreet(greet,4);

let odd = function(n) {
    console.log(!(n%2 == 0))
}

let even = function(n) {
    console.log((n%2 == 0))
}

function oddorEvenFactoryfunc (request) {
    if(request=="odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0))
        }
        return odd;
    } else if(request == "even") {
        let even = function(n) {
            console.log((n%2 == 0))
        }
        return even;
    }
    else {
        console.log("invalid request");
    }
}

let request = "odd";

// function that are define within a object is called as method.

const calculator = {
    add : function(a,b) {
        return a + b;
    },
    mul: function(a,b) {
        return a * b;
    },
    sub: function(a,b) {
        return a - b;
    }
};

let num = 10;
let arr2 = [2,4,12,13];

function largerThanNumber (arr,num) {
    for(let i = 0; i < arr.length; i++) {
        if(arr2[i]>num) {
            console.log(arr2[i]);
        }
    }
}

// largerThanNumber(arr2,num);

// practice question

let country = ["australia","germany","united states of america"];


function largestCountryname (country) {
    let ansIdx = 0;
    for (let i = 0; i <country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

console.log(largestCountryname(country));






