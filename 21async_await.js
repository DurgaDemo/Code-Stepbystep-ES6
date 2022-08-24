// function getData(){

//     let handlePromise=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("All Done")
//         }, 1000);
//     })
//     handlePromise.then((x)=>{
//         console.log(x)
//     })
// }
// getData()




//  async function getData(){

//     let handlePromise=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("All Done")
//         }, 1000);
//     })
//   let x= await handlePromise
//   console.log(x)
// }
// getData()





// async function getData(){

//     let handlePromise=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("All Done")
//         }, 1000);
//     });
//                                                             //async await using multiple promise
//     let handlePromise1=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("All Done")
//         }, 1000);
//     })
//   let x= await handlePromise
//   let x1= await handlePromise1
//   console.log(x,x1)
// }
// getData()



// async await using Api

async function getData(){
    let data=await fetch("https://jsonplaceholder.typicode.com/users")
    data=await data.json()
    console.log(data)
}
getData()