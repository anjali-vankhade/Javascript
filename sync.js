console.log("one");
console.log("two");

// async code, it will execute after 4s.
setTimeout(() => {
    console.log("hello");
}, 4000);

console.log("three");
console.log("four");

// callback functions --------
// synchronous way -------
function sum(a, b){
    console.log(a + b);
}
function calculator(a, b, sumCallback){
    sumCallback(a, b);
}
calculator(1, 2, sum);

// asynchronous way -------
const hello = () => {
    console.log("asynchronous way");
}
setTimeout(hello, 3000);

// // callback hell --------
// function getData(dataId, getNextData){
//     // 2s timer
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// // need to get the data every after 2s.
// getData(1, () => {
//     console.log("getting data2.......... ")
//     getData(2, () => {
//         console.log("getting data3.......... ")
//         getData(3, () => {
//             console.log("getting data4.......... ")
//             getData(4);
//         }) 
//     })
// })

// Promise ------------
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     // reject("some error is found");
// })

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        // 5s timer
        setTimeout(() => {
            console.log("data", dataId);
            resolve("data received");
            // no need to use incase of promise chain
            // if(getNextData){
            //     getNextData();
            // }
        }, 3000);
    })
}

//  use of then() and catch() ------------
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        // resolve("success");
        reject("some error is found");
    })
}
let promise = getPromise();
promise.then((res) =>{
    console.log("promise fulfilled", res);
});

promise.catch((err) => {
    console.log("promise rejected", err);
})

// Promise chaining by using callback hell code -------
// 1st way -------
// getData(1).then((res) => {
//     console.log("getting data2.......... ", res);
//     getData(2).then((res) => {
//         console.log("getting data3.......... ", res)
//         getData(3).then((res) => {
//             console.log("getting data4.......... ", res)
//             getData(4);
//         })
//     })
// })

// 2nd way ------
// getData(1).then((res) =>{
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     return getData(4);
// }) 

// Uses of Async await ------------
function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000)
    });
}

async function getWeatherData (){
    await api(); // 1st
    await api(); // 2nd
}

async function getDataForAll(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}

// using IIFE -----------
(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
})();