// arrays in javascript

let students = ["dhyey","piya","oneek"];
console.log(students);
console.log(students[0]); // to accacess particular array element
console.log(students.length); // to fidn array length

// type of arrays are object
// u can create mixed arrays also.

let newArr = []; // empty array

console.log(students[0][0]); // print character

students = ["dhyey","lucky one","hello"];
console.log(students); // arrays are mutable.

// arrays method

let nums = [1,2,3,4];
console.log(nums);

nums.push(5);
console.log(nums); // add to end of an array
nums.pop();
console.log(nums); // remove last element

nums.unshift(0); // add to start
nums.shift(); // remove from front

let followers = ["a","b","c"];
console.log(followers);

let blocked = followers.shift();
console.log(blocked);

let primary = ["red","yellow","green"];
let secondary = ["blue","violet","indigo"];

console.log(primary);
console.log(primary.indexOf("yellow")); // return indexof an element

console.log(primary.includes("yellow")); // check if the value is there or not,return true and false

// merge 2 arrays
let colors = primary.concat(secondary); 

// reverse an array
console.log(primary.reverse());

// slice operation return small portion of an array. // doesn't change in original array
console.log(colors);
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));

//splice method

console.log(colors.splice(4)); // work as an slice // change in original array // remove from the starting index
console.log(colors); // return whole array
(colors.splice(0,1)); // remove first element
console.log(colors); 

colors.splice(0,1,"black","grey"); // first starting index,delete count,adding element
console.log(colors);

colors.splice(1,0,"red");
console.log(colors);

let num = [1,4,2,5,7,2]; // here num is a reference variable.
console.log(num.sort());

// in this method sort array is not sorted particularly cause it changes number to string and than sort.

// arrays reference

console.log([1]==[1]); 

// in reference variable there is adress is stored not the value that's why js give false.

// array reference example

let arr = ["a","b"];
let arrcopy = arr;
arrcopy.push("c");
console.log(arrcopy);

console.log(arr);
console.log(arr == arrcopy);

// constant array

const arr2 = [1,2,3]; // here u can delete or update element
arr2.push(4);  // but arr2 this name is constant u can not completely chnage it
console.log(arr2);
 
// nested array multidimensional array

let arr3 = [[1,2],[2,3],[3,4]];

let question = [1,2];
if(question.length != 0) {
    console.log("not empty array");
}
else {
    console.log("empty array");
}













