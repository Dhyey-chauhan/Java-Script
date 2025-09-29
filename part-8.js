// array methods

let arr = [1,2,3,4,5];

// let print = function(el) {
//     console.log(el);
// };

// arr.forEach(print);

arr.forEach(function(el) {
    // console.log(el);
});

let student = [
    {
    name: "dhyey",
    marks : 97,
    },
    {
    name: "piya",
    marks : 92,
    },
    {
    name: "oneek",
    marks : 95,
    }];

student.forEach((el) => {
    // console.log(el.marks);
});

// map method

let num = [1,2,3,4];

let double = num.map(function(el) {
    return el*2;
});

// console.log(double);

let gpa = student.map ((el) => {
    return el.marks / 10;
});

// console.log(gpa);

// filter method

let nums = [2,4,1,3,7,6,8,10];

let even = nums.filter((el) => {
    return el % 2 == 0;
});

// console.log(even);

// every method 

// every method gives return gives true if every elements of array gives true for an function. else gives false
// return only 2 values true or false. refer as logically and operator.

let evTrue = nums.every((el) => {
    return el % 2 == 0;
});

// console.log(evTrue);

// some also work as every but if the one value is true than it return true. 
// in case of every value is false than it gives false.

let someTrue = nums.some((el) => {
    return el % 2 == 0;
})

// console.log(someTrue);

// reduce method.

// reduce method also gives us a single value but it is not boolean value like every and some

let finalValue = [1,2,3,4].reduce((acc,el) => (acc+=el));

// console.log(finalValue);

let arr2 = [2,3,4,5,3,4,7,8,2,0];

let max = arr2.reduce((max , el) => {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});

// console.log(max);

// practice question

let arr3 = [10,20,30];

let final = arr3.every((el) => {
    return el % 10 == 0;
});

// console.log(final);

let min = arr2.reduce((min, el) => {
    if(min < el) {
        return min;
    } else {
        return el;
    }
})

// console.log(min);

// ## default parameter. 
// if the value is not passsed than default value is work as an value.

function sum(a , b=10) {
    // console.log(a + b);
};

// sum(2);

// spread method.

// console.log(Math.min(1,2,3,4,5,0));

let ar = [1,2,3,4];
// console.log(Math.max(...ar)); // spread method

let str = "dhyeychauhan";

console.log(...str);








