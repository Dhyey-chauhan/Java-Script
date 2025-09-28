// this keyword in js.

// this refered to an object that is exucuting the current piece of code.

const student = {
    name:"dhyey",
    age: 23,
    eng : 95,
    math : 93,
    phy : 97,
    getAvg () {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg); // method in js cannot access variable directly.
    }
};

// when we define an object and in that object we using an method and in that we using obejct varibale than it is used this keyword to referred that object.

// ## try and catch.

console.log("hello");
console.log("hello");
try {
console.log(a); // check if there is any error or not.
} catch {
    console.log("variable doesn't exist"); // if error occurs this code executed
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

// miscellaneous  topic.

// arrow function.

// arrow function assign as variable or an callback function. nameless function.
// syntax is different but work as same normal function.

const sum = (a,b) => {
    console.log(a + b);
}

// sum(2,3);

const mul = (a,b) => a * b;

console.log(mul(2,3));

// settimeout function.

// console.log("hi there");

setTimeout( () => {
    console.log("apna college");
},4000); {
};  // used for api and request response.

// ## setinterval function.



let id = setInterval( () => {
    console.log("apna college");
},2000); {
};


// clearinterval is used to stop the id or stop the set interrval function. 

const student2 = {
    name: "dhyey",
    age : 21,
    marks : 97,
    getName : function() {
        console.log(this); // global scope
        return this.name;
    },
    
    getMarks: () => {
        console.log(this); // parent's scope -> window
        return this.marks;
    },
};





// question 











