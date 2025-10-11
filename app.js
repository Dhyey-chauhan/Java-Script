// // selecting elements by id.

// // getelementbyclassname.

// // let smallImages = document.getElementsByClassName("oldImg");

// // for(let i = 0; i < smallImages.length; i++) {
// //     // console.dir(smallImages[i]);
// // }

// // for(let i = 0; i < smallImages.length; i++) {
// //     smallImages[i].src = "spiderman_img.png";
// //     console.log(`value of image no ${i} is changed`);
// // }

// // ## elementselectbytagname

// // document.getElementsByTagName("p");

// // query selector in js

// // allow us to use any css selector.


// // console.dir(document.querySelector("h1"));

// // console.dir(document.querySelector("#description"));

// // console.dir(document.querySelector(".oldImg")); // query selector is used to select only single element.

// // console.dir(document.querySelectorAll("div a")); // gives all the values that matches or selected.


// // ## setting content of objects.

// let para = document.querySelector("p");

// // para.innerText = "hello"; // shows visible content on webpage.

// // para.innerHTML  // shows inner html or full markup.
// // para.textContent // shows what is actual code return in the html file.

// para.innerHTML = `<u>${para.innerText}</u>`;

// // ## manipulating attributes.

// let img = document.querySelector("img");

// img.src = "";

// let heading = document.querySelector("h1");

// // heading.style.color = "green";
// heading.style.backgroundColor = "yellow";

// let links = document.querySelectorAll("a");

// // for (let i = 0; i < links.length; i++) {
// //   links[i].style.color = "green";
// // }

// for (link of links) {
//     link.style.color = "red";
// };


// // classlist property to add,remove,contains,toggle in class property

// // console.log(img.classList);

// // img.classList.add("abc"); // adding class list;

// // console.log(img.classList);


// heading.classList.add("red");

// // as add we can use remove to remove any class.

// // heading.classList.remove("red");

// // we can also set this with set attribute but we can not use it cause we can only use one attribute at one time.

// console.log(heading.classList.contains("red")); // to check if class is exist or not.

// // toggle method between add & remove class. work as an switch.

// // navigation on page.

// let h4 = document.querySelector("h4");

// // console.log(h4.parentElement);

// // console.log(h4.children);

// let box = document.querySelector(".box");

// // console.log(box.children);

// // console.log(box.childElementCount);

// // previouselementsibling / nextelementsibling.

// // adding element or creting element.

// let newP = document.createElement("p"); // to create new paragraph.

// newP.innerText = "hello i am newP";

// let body = document.querySelector("body");

// body.appendChild(newP);

// let btn = document.createElement("button");
// btn.innerText = "submit";

// body.appendChild(btn); // used to appendchild childern.

// // append is used to add string.

// newP.append(" this is new text"); // append is used to change in same element that we had entered.

// // prepend is also use to add but in front of element.
// // append add in last vs prepend add in first.

// let btn2 = document.createElement("button");

// btn2.innerText = "new!! btn";

// let p = document.querySelector("p");

// p.insertAdjacentElement("afterbegin",btn2);


// // removing element.

// body.removeChild(newP);
// // p.remove(btn2);
// body.removeChild(btn);


let input = document.createElement("input");
let btn = document.createElement("button");

input.innerText = "enter ur name";
input.placeholder = "username";

btn.innerText = "click me";
btn.id = "btn";


let body = document.querySelector("body");

body.append(input);
body.insertAdjacentElement("afterend",btn);

let btn1 = document.querySelector("#btn");

btn1.classList.add("buttonStyle");

let h1 = document.createElement("h1");
h1.innerText = "DOM practice";

body.append(h1);

h1.classList.add("h1");

let para = document.createElement("P");
para.innerHTML = "apna college <b>delta</b> practice"

document.querySelector("body").append(para);












