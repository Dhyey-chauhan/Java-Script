// object literals 

// to store the complex data we use object literals. and it is stored in terms of key value pair.

// creating object literals //

// const student = { 
//     name : "Dhyey",
//     age : 23,
//     marks : 95,
//     city : "surat"
// }; // this is object so there is no particular order that it follow.

// values can be changed but not the reference.

const item = {
    price : 100.99,
    discount : 50,
    colors : ["pink" ,"red"]
};

// create a object literal for twitter/thread posts.

const post =  {
    username : "@dhyey",
    content: "this is my first post",
    likes : 150,
    repost: 5,
    tags : ["apnacollege","delta"]
};

// get values

console.log(post.username); // in case of . operator u can not use variable
console.log(post["likes"]); // u can use variable

// js convert object values to string automatically.
 
const obj = {
    1: "a",
    2: "b",
    true : "c", // read as a string not as a keyword.
    null : "d",
    undefined : "e",
}

// add/update values in object literals

const student = { 
    name : "Dhyey",
    age : 23,
    marks : 95,
    city : "surat"
};

student.city = "mumbai";
console.log(student.city); // to change the value

student.gender = "male"; // to add the value
console.log(student.gender);

student.marks = [98,99,100];
console.log(student.marks);

delete student.gender;

// nested objects 

// const classInfo = {
//     dhyey : {
//             grade : "A",
//             city : "surat"
//     },

//     mahi : {
//             grade : "B",
//             city : "mumbai"
//     }
// };

// console.log(classInfo.dhyey);

// array of object

const classInfo = [
    {
        name: "dhyey",
        city:"surat",
        marks:"98"
    },

    {
        name: "mahi",
        city:"mumbai",
        marks:"92"
    }
];

console.log(classInfo[0].name);

// math object

console.log(Math.PI);
console.log(Math.abs(-12));
console.log(Math.pow(2,2));
console.log(Math.floor(2.3));
console.log(Math.ceil(2.3));
console.log(Math.random());

// generating random integers

let num = Math.random(); // step 1;
num = num * 10; // step 2
num = Math.floor(num);
num = num + 1;
console.log(num);

let num2 = Math.floor(Math.random() * 100 ) + 1;
console.log(num2);