// async function

// async function greet() {
//     throw "some random error";
//     return "namaste!";
// };

// greet()
// .then(() => {
//     console.log("promise fullfilled");
// })
// .catch((err)=> {
//     console.log("rejected :" ,err);
// })

// // await keyword (pause the execution of its surrounding async function)

// function getNum() {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             let num2 = Math.floor(Math.random() * 5) + 1; 
//             if(num2 > 3) {
//                 reject("promise rejected");
//             }
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();

//             let a = 1000;
//             console.log(a);
//         },1000);
//     });
// };

// async function demo() {
//    try {
//    await getNum();
//    await getNum();
//    await getNum();
//    } catch(err) {
//     console.log(err); // handeling rejection.
//    }
// }


// api = application programming interface.

// api gives response in json format.
// json referred as = javascript object notation.

// ## accessing json response.

let jsonRes = '{"fact":"Cats have 3 eyelids.","length":20}';

console.log(jsonRes);

let validRes = JSON.parse(jsonRes); // json data to js object
console.log(validRes);

console.log(validRes.fact);

// json.stringify (json) // js object to json data

// ## testing api request.






