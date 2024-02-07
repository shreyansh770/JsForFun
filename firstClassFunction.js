// function Statement

function a(){
    console.log("a called")
}


// function expression aka function Declartion

var b = function(){
    console.log("b called");
}



// Anonymous Function -> function without a name

/*function (){
    // -> but this will give error
}*/



// Named Function Expression -> function with a name stored in a variable
var c = function xyz(){
     console.log("C is called");
}

c()// -> C is called"
xyz()// -> error xyz function is not created in global scope. So it can't be called.


// Diffrence between Parameters & Argument ?

var d = function (param1 , param2){
    // -> param1 & param2 are parameters
}

d(1,2) // -> 1,2 are arguments



// First Class Function aka First Class Citizens
/*
      -> the ability to used functions as value first-class functions
      -> i.e we can pass function functions are args and even return them
*/

var e = function (param){
    // returning a function
   /* return function(){

    }*/
}

 // passing function as args
e(function xyz(){

})

// Arrow Functions