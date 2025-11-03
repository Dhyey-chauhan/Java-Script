let input = document.querySelector("input");
let h2 = document.querySelector("h2");

input.addEventListener("input", (event) => {
    
    console.log(input.value);
    if(event.key == "  " || [a-zA-Z].test(event.key) ) {
    h2.innerText = input.value;
    }
})