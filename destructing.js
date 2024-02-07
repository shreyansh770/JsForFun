let a = ["ram","shyam"];

let [b] = a; // "ram"

//console.log(b);

let c = ["jai","rai","pai"]

// b ,d , e koi array mhi hai vo log normal variables hai

let [d,e] = c;// jai , rai 

//console.log(d,e);


let arr = [1,2,3,4]


let [k ,,l] = arr; // k-> 1 , beech ki value skip, l->3 

//console.log(k , l);


                    /***************************/

// let obj = {
//     x:"alpha",
//     y:"beta"
// };

let obj = {
    x:{
        z :"gamma"
    },
    y:"beta"
};

//restriction => jis value ko destructor krna hai uski he key ke naam se variable banani hogi
let {x} = obj;

//let {z} = obj; // undefined

let {
    x :{z}
} = obj;

console.log(z) // gamma


