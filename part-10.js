// js callstack

function one() {
    return 1;

};

function two() {
    return one() + one ();
};


function three() {
    let ans = two() + one ();
    console.log(ans);
};

three();

// js single threded.

// one time do only execution.
// to handle with single threaded we have callbacks.

// synchronous nature
setTimeout(() => {
    console.log("apna college");
},2000);

setTimeout(() => {
    console.log("apna college");
},2000);

console.log("hello' ,dhyey from :")

// js is single threaded so it is not wait to execute multiple code at same time.
// but browser code is written in c++. than broser is multithreded.
// this is how set time-out function work.


// ## callback hell.

let h1 = document.querySelector("h1");

function changeColor(color, delay,nextColorChange) {
   setTimeout(() => {
      h1.style.color = color;
      if(nextColorChange) nextColorChange();
   }, delay);
}

changeColor("red", 1000,() => {
    changeColor("orange", 1000,() => {
        changeColor("green", 1000);
    });
});

// callback nesting refer as callback hell.

// ##promises in js.


function savedDB(data,success,failure) {
    let intenetSpeed = Math.floor(Math.random() * 10) + 1;

    if(intenetSpeed > 4) {
        success();
    } else {
        failure();
    }
};

savedDB("hello",() => {
    console.log("success : your data was saved");
    savedDB("hello world" , () => {
        console.log("data2 saved");
    }, ()=> {
        console.log("failure2");
    })
}, () => {
    console.log("failure : weak connection. data not saved");
});


function savedDB(data) {
   return new Promise((resolve,reject) => {
    let intenetSpeed = Math.floor(Math.random() * 10) + 1;
    if(intenetSpeed > 4) {
        resolve("success : data was saved");
    } else {
        reject("failure : weak connection");
    }
   });
}

savedDB("data")
    .then(()=> {
        console.log("promise resolved data1 saved");
        return savedDB("hello world");
})
.then(()=> {
    console.log("promise2 resolved data2 saved"); // this is promise chaining.
     
})
.catch(() => {
    console.log("promise was rejected");
})


// promise chaining when we used multiple then than it is called as an promise chaining.

// results and errors in promise.

savedDB("data")
    .then((result)=> {
        console.log("promise resolved data1 saved");
        console.log("result is :" + result);
        return savedDB("hello world");
})
.then((resul)=> {
    console.log("promise2 resolved data2 saved"); // this is promise chaining.
    cconsole.log("result is :" + result);
})
.catch((error) => {
    console.log("promise was rejected");
    console.log(`error is : ${error}`);
})



