
// console.log("line 2"+a);

// let a = 10;

// console.log("line 6"+" "+a);


// function f(){
//     // console.log("line 10"+a);

//     a = 20;
//     console.log("line 13"+" "+a);

//     {
//         let a = 40;
//         console.log("line 17"+" "+a);

//     }

//     console.log("line 21"+" "+a);

//     a = 30;
//     console.log("line 24"+" "+a);
    
// }

// console.log("line 28"+" "+a);

// f();
// console.log("line 31"+" "+a);

let timer;
function setTimer()
{
    timer = 2;// ref pe jake change krega
    let timer = 2;// ase case me sirf {}
    console.log(timer);
}
console.log(timer);
setTimer()
console.log(timer);