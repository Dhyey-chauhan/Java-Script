// console.log("hello world!");
// console.log("dhyey chauhan");
// let a = 10;
// let b = 20;
// console.log("sum is " + (a + b));

// tempelate literals

let a = 10;
let b = 5;
// let output = "The total price is : " + (pencilPrice + erasorPrice) + " Rupees";

// you can also use backtick ``.

let output = `The total price is : ${a + b}`;
console.log(output);


// Arithmetic operator that you already know (+,-,*,%,**,/)
// unary operator (++ , --)

console.log(a++); // print a = 10
console.log(++a); // print a = 12

//assignment operator (= , +=, -= , *= , /= ,%= etc)

// comparison operator (> , < , <= , >= , != , ==(ignore the data type) , ===(consider the type))

let n = 5;
let str = '5';
console.log(n == str); // output = true
console.log(n === str); // output = false 

// if we have to do strict comparison than we use triple euqal to(===)
// comparison for non-number where a == 61 and A == 41 wjere unicode is compared

// conditional statements **** (if else , nested if-else , switch)

let Age = 23;

// if statement

// if(age >= 18) { // you can compare number and string and different type of variable.
//     console.log("you can vote");
//     console.log("you can drive");
// }

// js is case sensitive so while comparing do remember this.

// else if statement

let age = 20;
if(Age >= 18) {
    console.log("can vote"); // if is true than never check else if
}
else if(Age < 18) {
    console.log("can not vote");
}

// else statement 

let AGE = 20;
if(AGE >= 18) {
    console.log("can vote2"); // if is true than never check else if
}
else{
    console.log("can not vote");
}

// you can write nested if statement also

let marks = 75;

if(marks >= 33) {
    console.log("pass");
    if(marks >= 80) {
        console.log("pass with grade A");
    } else {
        console.log("pass with grade B");
    }
} else {
    console.log("better luck next time!");
}

// logical operator (logical and && , logical or || , logical not !)

if (marks >= 33 && marks >= 70) {
    console.log("pass");
    console.log("A");
}

// logical not
console.log(!(5 > 6));

let string = "apple";
if (string[0] === "a" && string.length > 3) {
    console.log("good string");
} else {
    console.log("not a good string");
}

// truthly and falsy value 
// in java script every statment or character has it's boolean value

if(false){
    console.log("it is true value");
} else {
    console.log ("it is false value");
}

// switch statement

let day = 1;

switch(day) {
    case 1 : 
        console.log("monday");
        break;
    case 2 : 
        console.log("tuesday");
        break;
    case 3 : 
        console.log("wednesday");
        break;
    case 4 : 
        console.log("thursday");
        break;
    case 5 : 
        console.log("friday");
        break;
    case 6 : 
        console.log("saturday");
        break;
    case 7: 
        console.log("sunday");
        break;
    default :
        console.log("invalid day");
    }

// alert and promt

// alert("something is wrong!")
console.log("alert!");
console.error("this is an error msg!!") // error msg
console.warn("this is a warning msg"); // warning msg

// let name = prompt("enter ur name :");

// console.log(name);

let firstName = prompt("enter first name:");
let lastName = prompt("enter first name:");
console.log("welcome" , firstName , "" , lastName , "!")

 

