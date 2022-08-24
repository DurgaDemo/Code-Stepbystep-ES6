// function Add(a,b){
//     return a+b
// }

// console.log(Add(10,20))
// console.log(Add(10,30))



// function Add(a,b=30,c=20){
//     return a+b+c
// }

// console.log(Add(10))



// function someVal(){
//     return 100
// }
// function add(a,b=30,c=someVal()){
//     return a+b+c
// }
// console.log(add(10))



// function someVal(){
//     return "Mohapatra"
// }
// function add(a,b="sankar",c=someVal()){
//     return a +" "+ b +" "+ c
// }
// console.log(add("Durga"))



function main(a,b=main()){
    return a+b
}
main()