// shadowing

var a = 20;
let b = 200;
const c = 2000;


{
    var a = 10;
    let b = 100;
    const c = 1000;
    console.log(a);// shawdowing
    console.log(b);// shawdowing
    console.log(c);// shawdowing

}

//fn()

console.log(a);// shawdowing


console.log(b);
console.log(c);

// illegal shadowing

// let d = 10;
// var e  =8;
// {
//     var d = 100; //  illegal shadowing -> becoz var has global scope 
//     let e = 9; //  this is ok -> bcoz let is limited to {}
// }

let x = 20;
function y() {
 var x = 10;
}
y()
console.log("x is "+x);