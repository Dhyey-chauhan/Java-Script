// // loops in js

// //for loop

// for (let i = 1; i <= 5; i++) { 
//     console.log(i);
// }

// // print even numbers

// for(let i = 2; i <= 10 ; i+=2) {
//     console.log(i);
// }

// // infinite loop

// // for (let i = 1; i>=0; i++) {

// // }

// //multiplication table of 5

// for(let i = 1; i <= 10; i++) {
//     console.log(5*i);
// }

// // parsint(n) convert whatever datatype into the integer.

// //nested for loop

// for(let i = 1; i <= 3; i++) {
//     console.log("outer loop");
//     for(let j = 1; j <= 3; j++) {
//         console.log(j);
//     }
// }


// // while loop

// console.log("while loop")
// // let i = 2;
// while(i<=5) {
//     console.log(i);
//     i++;
// }

// break keyword

// let i = 1;
// while(i<=5) {
//     if(i == 3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// loops with array

let fruits = ["apple","banana","cherry","watermelon","pineapple"];

for(let i = 0; i < fruits.length; i++) {
    console.log(i,fruits[i]);
}

//nested loops with array

// let heroes = [["ironman","spiderman","thor"] , ["superman","wondar woman","flash"]];

// for(let i = 0; i < heroes.length; i++) {
//     console.log(`list #${i}`); 
//         for(let j = 0; j < heroes[i].length;j++) {
//             console.log(heroes[i][j]);
//         }
//     }


let students = [["aman",95],["shraddha",94.4],["rajat",98]];

for(let i = 0; i < students.length; i++) {
    console.log(`student inormation : ${i}`);
    for(let j =0; j < students[i].length ; j++) {
        console.log(students[i][j]);
    }
}

// for of loop

for (char of "apnacollege") {
    console.log(char);
}

// nested for of loop 
let heroes = [["ironman","spiderman","thor"] , ["superman","wondar woman","flash"]];

for(list of heroes) {
    for (hero of list) {
        console.log(hero);
    }
}

// question 1;


let num = 287152;
let count = 0;

let copy = num;

while(copy > 0) {
    count++;
    copy = num % 10;
}
console.log(count);



