let btn = document.querySelector("button");

btn.addEventListener("click", function(event) {
    console.log(event);
    console.log("button clicked!!");
});

btn.addEventListener("dblclick", function(event) {
    console.log(event);
    console.log("button clicked!!");
}); // we will use this type of events while making it.


// ##key-events in js.

let input = document.querySelector("input");

input.addEventListener("keyup",function(event){
    console.log("key was released");
   // console.log(event.key); give us which key is pressed.
   // console.log(event.code); KeyA, if space then give us space
})

input.addEventListener("keydown",function(event) {
    if(event.code == "ArrowUp") {
        console.log("move upward");
    } else if(event.code == "ArrowDown") {
        console.log("move Downward");
    } else if(event.code == "ArrowLeft") {
        console.log("move leftside");
    } else if(event.code == "ArrowRight") {
        console.log("move downward");
    }
    console.log(event.code);
})

// ## form events

let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    // console.log("form submitted!!!");
    
    
    let username = this.elements[0]; //this referred to form.element[0].
    let password = document.querySelector("#password");

    console.dir(username.value);
    console.log(password.value);

    alert(`hi name is ${username.value} and pwd is ${password.value}`);
});

// change event in form

let user = document.querySelector("#username");



user.addEventListener("input",function() {
    console.log("input event");
    console.log(this.value);
});

user.addEventListener("change",function() {
    console.log("change event");
    console.log(this.value);
});

let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input",function() {
    console.log(inp.value);
    p.innerText = inp.value;
});

