let msg = "hello";

// msg.trim();  // trim method to remove extra space from string from both front and back
// console.log(msg);

// let pwd = prompt("enter ur pwd :");
// console.log(pwd.trim()); // strings are immutable.

// tuppercase and lowercase method

console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

// methods with arguments

console.log(msg.indexOf("h"));

// slicemethod to get the particular part of a string.
// where we pass the starting index and ending index where ending index index is not count.

let str = "ilovecoding";

console.log(str.slice(5));
console.log(str.slice(1,5));
console.log(str.slice(-2)); // 11 -2 -> 9

// replace method

console.log(str.replace("love", "do"));


// repeat method

console.log(str.repeat(2));