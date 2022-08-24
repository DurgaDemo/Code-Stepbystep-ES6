// class Fruits{
//     constructor(){
//         console.log("constructor")
//     }
//     getFruits(){
//         console.log("this is fruits method")
//     }
// }

// let f1=new Fruits()
// f1.getFruits()



class Car {
    name="Durga Mohapatra"
    age=30
  constructor() {}
  carMethod() {
    console.log("this is car method");
    console.log(this.name+" "+this.age)
  }
}
class Maruti extends Car {
    constructor(){
        super()
    }
  marutimehod() {
    console.log("marutimehod");
    console.log(this.name+" "+this.age)
  }
}

let f1 = new Maruti();
f1.carMethod();
f1.marutimehod();

let f2=new Car()
// f2.marutimehod()  // Error: Parent class can't access child class properties.
f2.carMethod()
