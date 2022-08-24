// let a=undefined

// setTimeout(() => {
//     a="Hi Durga"
// },3000);

// alert(a)




let a=undefined

let promiseData=new Promise((resolve,reject)=>{

setTimeout(() => {
    a="Hi Durga"
    resolve("done")
}, 3000);
})

promiseData.then(()=>{
    alert(a)
})