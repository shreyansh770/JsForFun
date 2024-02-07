//What are callback Functions in JavaScript



// setTimeout(() => {
//     // callback function
//     console.log("hellow");
// }, 5000);

// function a(){
//     console.log("a");
// }

// function b(){
//     console.log("b");
// }



function xyz() {
     count = 0;
    document.getElementById("clickme").addEventListener("click", () => {
        console.log("clicked me" + " " + count++);
        console.log(count)
    })
}
let count = 7;
console.log(count)
xyz();

console.log(count)