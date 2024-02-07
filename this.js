     
      /* 'this' in Browser w/o strict  */




// console.log(this);// window object -> w/o strict


// function func(){
//     console.log(this);// window object -> w/o strict
// }

// func();

// let obj = {
//     prop1:1,

//     // direct function (stored as key value pair)
//     f : function(){
//         console.log(this); // obj -> w/o strict
//     }
// }

// obj.f();



// let obj2 = {
//     prop1:1,
//     f : function(){
//         function f2(){
//             console.log(this); // window object -> w/o strict
//         };
//         f2(); // indirect fucntion (not stored as key value pair)
//     },
// }

// obj2.f();





/*
  
    'use strict' => if we use it we will enter strict mode so no lenancy will be allowed i.e USE PROPER SYNTAX

    ex ->

    a = 2;
    console.log(a); -> no error

    function f(a,a){ ->no error

    }

    function f(a,a){ -> error
        "use strict" -> Strict mode sirf is function ke liye hoga
    }

    "use strict"

    a = 2;
    console.log(a); -> error

    function f(a,a){ -> error

    }


  
*/






            /* 'this' int Browser w strict  */

// "use strict"    /*****************/

// console.log(this); // window object


// function func() {
//     console.log(this); // undefined 
// }

// func();

// let obj = {
//     prop1: 1,

//     // direct function (stored as key value pair)
//     f: function () {
//         console.log(this); // obj 
//     }
// }

// obj.f();



// let obj2 = {
//     prop1: 1,
//     f: function () {
//         function f2() {
//             console.log(this); // undefined 
//         };
//         f2(); // indirect fucntion (not stored as key value pair)
//     },
// }

// obj2.f();