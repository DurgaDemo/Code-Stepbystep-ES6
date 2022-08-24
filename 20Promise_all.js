// let data=Promise.all([

//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("2 Second")
//         }, 2000);
//     }),

//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("1 Second")
//         }, 1000);
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("5 Second")
//         }, 5000);
//     })

// ])

// data.then((item)=>{
//     console.log("then block",item)
// }).catch((err)=>{
//      console.log("catch block",err)
// })




// let data=Promise.all([

//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("2 Second")
//         }, 2000);
//     }),

//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject("1 Second")
//         }, 1000);
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("5 Second")
//         }, 5000);
//     })

// ])

// data.then((item)=>{
//     console.log("then block",item)
// }).catch((err)=>{
//      console.log("catch block",err)
// })

/*
Promise all will work when all promise will resolve if one promise will reject it
will go to catch block. for that we will go for promise all.Settled
*/



// let data=Promise.allSettled([

//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("2 Second")
//         }, 2000);
//     }),

//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("1 Second")
//         }, 1000);
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("5 Second")
//         }, 5000);
//     })

// ])

// data.then((item)=>{
//     console.log("then block",item)
// }).catch((err)=>{
//      console.log("catch block",err)
// })



// let data=Promise.allSettled([

//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("2 Second")
//         }, 2000);
//     }),

//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject("1 Second")
//         }, 1000);
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("5 Second")
//         }, 5000);
//     })

// ])

// data.then((item)=>{
//     console.log("then block",item)
// }).catch((err)=>{
//      console.log("catch block",err)
// })


/*
This Promise allSettled will give full information of all promise
howmany has resolved and how many are rejected.
if you want the promise which is resolved first then we will go for Promise.race
*/


let data=Promise.race([

    new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("2 Second")
        }, 2000);
    }),

    new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("1 Second")
        }, 1000);
    }),
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("5 Second")
        }, 5000);
    })

])

data.then((item)=>{
    console.log("then block",item)
}).catch((err)=>{
     console.log("catch block",err)
})


