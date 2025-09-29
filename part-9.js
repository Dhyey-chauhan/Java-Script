// DOM events

// to select single button.

// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     console.log("button was clicked");
// };

function sayHello() {
    alert("hello");
}

// btn.onclick = sayHello;

// to select all the button use query selectorall.

let btns = document.querySelectorAll("button");

for (let btn of btns) {
    // btn.onclick = sayHello;
    // btn.onmouseenter = function() {
    //     console.log("you entered a button");
    // };
    // console.dir(btn);

}

// with onclick we can set only single value

// so we have to use eventlistener.

// for (btn of btns) {
//     btn.addEventListener("click",function () {
//         console.log("button clicked!!");
//     })
//     btn.addEventListener("click",function() {
//         alert("again clicked");
//     })
// };


// let btn = document.querySelector("button");


// btn.addEventListener("click",function() {
//     let h3 = document.querySelector("h3");
//     let randomcolor = getRandomColor();
//     h3.innerText = randomcolor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomcolor;
   
// });

// function getRandomColor () {
//     let red =Math.floor(Math.random() * 255);
//     let green =Math.floor(Math.random() * 255);
//     let blue =Math.floor(Math.random() * 255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

// let p = document.querySelector("p");

// p.addEventListener("click",function() {
//     console.log("para is clicked");
// });

// let box = document.querySelector(".box");

// console.dir(box);

// box.addEventListener("mouseenter",function() {
//     console.log("mouse entered");
// })

// this for event listener.

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");

// btn.addEventListener("click",function() {
//     this.style.backgroundColor = "blue";
// })

function changeColor() {
   
    this.style.color = "blue";
};

// h1.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// btn.addEventListener("click",changeColor);

// keyboard events in js


