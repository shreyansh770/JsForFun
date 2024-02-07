


// we can do both synchronous and asynchronous work inside Promise
// but promises were made to perform async task

const { fromNumber } = require("long");

// Creation 

let promise = new Promise((resolve,reject)=>{

     setTimeout(()=>{
        resolve("done-1!");
       // resolve("done-2!");// ignore
       // resolve("done-3!"); //  ignore
     },2000)
})



// consumers => then , catch , finally

// promise.then((value)=>{
//      return value;
// })

/*  
finally ->koi value nhi store krta ye resolve , reject se ayi hui value ko age then ya catch me pass kr deta hai
-> finally is mainly used for clean up
*/
// promise.finally(()=>{
//      console.log("finally was called");
// }).then((v)=>{
//     console.log(v)
// })

// here we are putting then on resolved promise i.e after 2 sec the promised
// has been resolved but the then will still work in setTimeout

/*setTimeout(()=>{
    promise.then((y)=>{
         console.log(y);
    })
},3000)*/



// async function ke ander await lagne se us function ka execution
// stop hota hai na ki js ka 
// iska mtlb ki js vase he chlti rahegi

console.log("before");

(async ()=>{
     console.log("inside function");
     let p = await promise;
     console.log(p);
})();

console.log("after");

