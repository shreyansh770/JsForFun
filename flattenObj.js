let Obj ={
    nObj1:{
       obj1:{
           obj2:{
               one:1,
               two:2
           }
       }
    },

    nObj2:{
        obj3:{
            obj4:{
               three:3,
               four:4
            }
        }
    },

    a:1
}

// expected result
res = {"nObj1.obj1.obj2.one":1,"nObj1.obj1.obj2.two":2,"nObj2.obj3.obj4.three":3,"nObj2.obj3.obj4.four":4,"a":1}

let flatten = (wObj)=>{
    let res = {}
    for(let i in wObj){
        if(typeof wObj[i] == "object"){
            let recObj = flatten(wObj[i]);
            for(let j in recObj){
                res[i+"."+j] = recObj[i]; 
            }
        }else{
             res[i] = wObj[i];
        }
    }

    return res;
}


let ans = flatten(Obj);

console.log(ans);