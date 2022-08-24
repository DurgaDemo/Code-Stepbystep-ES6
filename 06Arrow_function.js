/*
function Name(){
    return "Name"    // Normal Function
}
console.log(Name())


let Name1=function(){
    return "Name1"         // Function Expression or Annonomous Function
}
console.log(Name1())

let Name2=()=>{
    return "Name2"         // Arrow Function
}
console.log(Name2())

*/


/*
let data=[10,20,40,60,70]

let newData=data.map(function(item){
       return item*2
})
console.log(newData)


let newData1=data.map((item)=> item*2)
console.log(newData1)
*/



let student={
    firstName:"Durga",
    lastName:"Mohapatra",
    age:28,
    fullName: function(){
         console.log(this.firstName+" "+this.lastName+" "+this.age)
         console.log(this)
    },
    fullName1:()=>{
        // console.log(this.firstName+" "+this.lastName+" "+this.age)
        console.log(this)
   },
}
student.fullName()
student.fullName1()