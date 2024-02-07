function f(n,x){
    return new Promise((resolve)=>{
        
        setTimeout(()=>{
            resolve(x);
        },n);
    });
}


(function(){
    let a =  f(1000,1);
    console.log(a);

    a.then(async (x)=>{
        let y = await f(2000,2);
        console.log(y);
        let z = await f(1000,3);
        console.log(z);
        let p = await f(2000,4);
        console.log(p);
        let q = await f(1000,5);
        console.log(q);
        console.log(x +y+z +(await p)+await(q));
    })

})();