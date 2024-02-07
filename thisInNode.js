

           /* 'this' in Node w/o strict  */

  /*//console.log(this);  // -> {}


function f(){
    console.log(this); // -> global object
}

// f()

let obj = {
    name :"Rahul",
    f:function(){
        console.log(this); // obj
    }
}

// obj.f()


let obj1 = {
    name :"Rahul",
    f:function(){
        function f1(){
            console.log(this); // global object
        } 

        f1()
    },

    
}

obj1.f();


*/








                  /* 'this' in Node w strict  */


// "use strict"


//  console.log(this); // --> {}



// function f(){
//     console.log(this); // -> undefined
// }

// // f()

// let obj = {
//     name : "Rahul",
//     f : function(){
//         console.log(this);// obj
//     }
// }

// //obj.f()


// let obj1 = {
//     name :"Rahul",
//     f:function(){
//         function f1(){
//             console.log(this); // undefined
//         } 

//         f1()
//     },

    
// }

// obj1.f();