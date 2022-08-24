function* steps(){
    let a=10
    let b=20
    console.log(10+20)
    yield "step 1 complted"
    console.log(10-20)
    yield "step 2 complted"
    console.log(10*20)
    yield "step 3 complted"

    return "all steps done"
   
}

let stp=steps()
function getSteps(){
    console.log(stp.next())
}




/*generator is basically a type function which we can do pause and resume.
      we can call it using next method*/
      
// yield is basically used for creating steps

