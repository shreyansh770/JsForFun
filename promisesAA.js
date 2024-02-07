function resolveAfterNSeconds(n, x) {
    return new Promise(resolve => {
        // console.log("Before");
        setTimeout(() => {
            resolve(x);
        }, n);
        // console.log("After");
    });
}
//   t-> 0
(function () {
    let a = resolveAfterNSeconds(1000, 1)
    console.log("a", a);// on which second a will be printed PP-> 0th sec {pending promise}
    a.then(async function (x) {
        console.log("x", x) // on which second x will be printed -> 1st sec 1
        let y = await resolveAfterNSeconds(2000, 2)
        console.log("y", y) // on which second  y will be printed -> 3rd sec 2
        let z = await resolveAfterNSeconds(1000, 3)
        console.log("z", z) // on which second z will be printed -> 4th sec 3
        let p = resolveAfterNSeconds(2000, 4)
        console.log("p", p) // on which second  p will be printed -> 4th sec {pending promise}
        let q = resolveAfterNSeconds(1000, 5); //-> 
        console.log(x + y + z + await p + await q); //output on which second  6th second 15
    })
})()