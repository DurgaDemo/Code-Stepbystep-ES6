let data={
    list:"friend",
    names:['Durga','Mithun','Papu'],
    getFriends:function(){
        console.log(this.list)
        this.names.map(function(item){
             console.log(item) 
        })
    }
}
data.getFriends()





// let student={
//     firstName:"Durga",
//     lastName:"Mohapatra",
//     age:30,
//     fullName:function(){
//         setTimeout(function(){
//             console.log(this.firstName+" "+this.lastName+" "+this.age)
//         })
//     }
// }
// student.fullName()





// let student={
//     firstName:"Durga",
//     lastName:"Mohapatra",
//     age:30,
//     fullName:function(){
//        let self=this
//         setTimeout(function(){
//             console.log(self.firstName+" "+self.lastName+" "+self.age)
//         })
//     }
// }
// student.fullName()




// let student={
//     firstName:"Durga",
//     lastName:"Mohapatra",
//     age:30,
//     fullName:function(){
//         setTimeout(()=>{
//             console.log(this.firstName+" "+this.lastName+" "+this.age)
//         })
//     }
// }
// student.fullName()




