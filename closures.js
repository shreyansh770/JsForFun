// function x(){
//     var a= 7;
//     function y(b){
//         console.log(a);
//         console.log(b);
//         return a
//     }

//     // here we are returing the function along with its lexical environment i.e closure
//     return y;
// }

// var z = x();
// let p = z(10) 

function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste Javascript");
}
x();