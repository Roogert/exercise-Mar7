//Write a function `redundantReturn` that takes in a string `str` and return a function that returns str.

function redundantReturn(str){
return ()=>{
    return str + "!";
}
}

const myString = redundantReturn("String")
console.log(myString)