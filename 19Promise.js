// let data=1
// console.log(data)

// setTimeout(() => {
//     console.log("Timer "+data)
// }, 2000);

// data=3
// console.log("Last "+data)



// let data=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Code has been executed")
//     }, 2000);
// })

// // console.log(data)

// data.then((item)=>{
//     console.log(item)
// })



// let data=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({
//             name:"Durga",
//             age:30,
//             phone:90900
//         })
//     }, 2000);
// })


// data.then((item)=>{
//     console.log(item)
// })

// console.log("Hello")



// let data=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         // resolve("Code has been executed")
//         reject("Some Issues")
//     }, 2000);
// })

// data.then((item)=>{
//     console.log(item)
// }).catch((err)=>{
//     console.log(err)
// })




// let data=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             // resolve("Code has been executed")
//             reject("Some Issues")
//         }, 2000);
//     })
//     console.log(data)


// let data1=fetch("https://jsonplaceholder.typicode.com/users")
// console.log(data1)



// let data1=fetch("https://jsonplaceholder.typicode.com/users")
// data1.then((item)=>{
//     console.log(item)
// })



// let data1=fetch("https://jsonplaceholder.typicode.com/users")
// data1.then((item)=>{
//     return item.json()
// }).then((result)=>{
//   console.log(result)
// })



let data=new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve("Code has been executed")
        reject("Some Issues")
    }, 2000);
})

data.finally((item)=>{
    console.log("finally block",item)       // finally block will execute in both cases either promise will resolve or reject
})
